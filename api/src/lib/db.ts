import { MongoClient } from "mongodb";
import { ENV } from "./env";
let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;
let indexesPromise: Promise<void> | null = null;
const uriHasCredentials = (uri: string) => /mongodb(\+srv)?:\/\/[^/]*@/i.test(uri);
const uriIsLocal = (uri: string) => /mongodb(\+srv)?:\/\/(localhost|127\.0\.0\.1)/i.test(uri);
const uriIsSrv = (uri: string) => /^mongodb\+srv:\/\//i.test(uri);
const uriHasTlsOption = (uri: string) => /[?&](tls|ssl)=true/i.test(uri);
const shouldUseTls = () =>
  ENV.MONGO_TLS || Boolean(ENV.MONGO_CA_FILE || ENV.MONGO_CERT_FILE) || uriIsSrv(ENV.MONGO_URI);
const validateMongoUri = () => {
  if (!ENV.MONGO_REQUIRE_AUTH) return;
  if (uriIsLocal(ENV.MONGO_URI)) return;
  if (!uriHasCredentials(ENV.MONGO_URI)) {
    throw new Error("MONGO_URI must include credentials for non-local connections.");
  }
};
const validateMongoTls = () => {
  if (!ENV.MONGO_REQUIRE_TLS) return;
  if (uriIsLocal(ENV.MONGO_URI)) return;
  if (shouldUseTls()) return;
  if (uriHasTlsOption(ENV.MONGO_URI)) return;
  throw new Error("MONGO_URI must enable TLS for non-local connections.");
};
const buildClient = async () => {
  validateMongoUri();
  validateMongoTls();
  client = new MongoClient(ENV.MONGO_URI, {
    appName: ENV.MONGO_APP_NAME,
    maxPoolSize: ENV.MONGO_MAX_POOL_SIZE,
    minPoolSize: ENV.MONGO_MIN_POOL_SIZE,
    serverSelectionTimeoutMS: ENV.MONGO_SERVER_SELECTION_MS,
    retryWrites: true,
    tls: shouldUseTls() || undefined,
    tlsCAFile: ENV.MONGO_CA_FILE || undefined,
    tlsCertificateKeyFile: ENV.MONGO_CERT_FILE || undefined
  });
  await client.connect();
  return client;
};

const ensureEssentialIndexes = async (connectedClient: MongoClient) => {
  const db = connectedClient.db(ENV.DB_NAME);

  await Promise.all([
    db.collection("usuarios").createIndexes([
      { key: { username: 1 }, name: "usuarios_username_unique", unique: true },
      { key: { email: 1 }, name: "usuarios_email_unique", unique: true }
    ]),
    db.collection("escuelas").createIndexes([
      { key: { code: 1 }, name: "escuelas_code_unique", unique: true }
    ]),
    db.collection("membresias_escuela").createIndexes([
      {
        key: { usuarioId: 1, escuelaId: 1 },
        name: "membresias_usuario_escuela_unique",
        unique: true
      }
    ]),
    db.collection("modulos").createIndexes([{ key: { id: 1 }, name: "modulos_id_unique", unique: true }]),
    db.collection("billeteras").createIndexes([
      { key: { usuarioId: 1 }, name: "billeteras_usuarioId_unique", unique: true }
    ]),
    db.collection("quizzes").createIndexes([{ key: { id: 1 }, name: "quizzes_id_unique", unique: true }]),
    db.collection("quiz_versions").createIndexes([
      { key: { quizId: 1, version: 1 }, name: "quiz_versions_quiz_version_unique", unique: true }
    ]),
    db.collection("quiz_attempts").createIndexes([
      {
        key: { moduleId: 1, quizId: 1, userId: 1, status: 1 },
        name: "quiz_attempts_module_quiz_user_status_in_progress_unique",
        unique: true,
        partialFilterExpression: { status: "in_progress" }
      }
    ])
  ]);
};
export async function getDb() {
  if (!clientPromise) clientPromise = buildClient();
  const connectedClient = await clientPromise;

  if (!indexesPromise) {
    indexesPromise = ensureEssentialIndexes(connectedClient);
  }
  await indexesPromise;

  return connectedClient.db(ENV.DB_NAME);
}
