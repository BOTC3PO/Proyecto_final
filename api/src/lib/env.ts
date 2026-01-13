import * as dotenv from "dotenv";
dotenv.config();
const parseBool = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return ["true", "1", "yes", "on"].includes(value.toLowerCase());
};
export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 5050),
  MONGO_URI: process.env.MONGO_URI ?? "mongodb://localhost:27017",
  DB_NAME: process.env.DB_NAME ?? "educational_platform",
  CORS_ORIGIN: (process.env.CORS_ORIGIN ?? "http://localhost:5173").split(","),
  MAX_PAGE_MB: Number(process.env.MAX_PAGE_MB ?? 30),
  MONGO_TLS: parseBool(process.env.MONGO_TLS, false),
  MONGO_REQUIRE_TLS: parseBool(process.env.MONGO_REQUIRE_TLS, true),
  MONGO_CA_FILE: process.env.MONGO_CA_FILE ?? "",
  MONGO_CERT_FILE: process.env.MONGO_CERT_FILE ?? "",
  MONGO_APP_NAME: process.env.MONGO_APP_NAME ?? "educational-platform-api",
  MONGO_MAX_POOL_SIZE: Number(process.env.MONGO_MAX_POOL_SIZE ?? 10),
  MONGO_MIN_POOL_SIZE: Number(process.env.MONGO_MIN_POOL_SIZE ?? 0),
  MONGO_SERVER_SELECTION_MS: Number(process.env.MONGO_SERVER_SELECTION_MS ?? 5000),
  MONGO_REQUIRE_AUTH: parseBool(process.env.MONGO_REQUIRE_AUTH, true)
};
