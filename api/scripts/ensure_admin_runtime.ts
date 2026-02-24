import { getDb } from "../src/lib/db";

const TARGET_EMAIL = "admin@escuela.com";
const TARGET_USERNAME = process.env.ADMIN_USERNAME ?? "admin.escuela";
const DEFAULT_PASSWORD_HASH =
  "pbkdf2$100000$b142c6ce8da912e98148614e87cb2cf4$aee08b4f7ed477b8c077036bd58cf480867554e5f20da13a6c6921ce13032b44e44cf101cdaa0b54ec9f72d11fd8706698b0e20641666f3ef6facacfda6122c4";

type UserDoc = Record<string, unknown>;

function summarize(doc: UserDoc | null) {
  if (!doc) return null;
  return {
    _id: doc._id,
    email: doc.email,
    username: doc.username,
    role: doc.role,
    isDeleted: doc.isDeleted,
  };
}

async function main() {
  const db = await getDb();
  const usuarios = db.collection("usuarios");

  const byEmail    = usuarios.findOne({ email: TARGET_EMAIL }) as UserDoc | null;
  const byUsername = usuarios.findOne({ username: TARGET_USERNAME }) as UserDoc | null;

  console.log("[lookup] by email:",    summarize(byEmail));
  console.log("[lookup] by username:", summarize(byUsername));

  // Normalizar variantes de email con mayúsculas
  const allUsers = usuarios
    .find({ isDeleted: { $ne: true } })
    .toArray() as UserDoc[];
  for (const item of allUsers) {
    if (typeof item.email === "string" && item.email !== item.email.toLowerCase()) {
      const normalized = item.email.toLowerCase();
      usuarios.updateOne(
        { _id: item._id },
        { $set: { email: normalized, updatedAt: new Date().toISOString() } }
      );
      console.log(`[normalize] ${String(item.email)} -> ${normalized}`);
    }
  }

  let admin = usuarios.findOne({
    $or: [{ email: TARGET_EMAIL }, { username: TARGET_USERNAME }],
  }) as UserDoc | null;

  if (admin && admin.isDeleted === true) {
    console.log("[repair] user exists but isDeleted=true. Restoring to false.");
    usuarios.updateOne(
      { _id: admin._id },
      { $set: { isDeleted: false, email: TARGET_EMAIL, updatedAt: new Date().toISOString() } }
    );
    admin = usuarios.findOne({ _id: admin._id }) as UserDoc | null;
  }

  if (!admin) {
    console.log("[reseed] admin user not found. Creating.");
    const now = new Date().toISOString();
    const result = usuarios.insertOne({
      username: TARGET_USERNAME,
      email: TARGET_EMAIL,
      fullName: "Administrador",
      role: "ADMIN",
      passwordHash: DEFAULT_PASSWORD_HASH,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    });
    admin = usuarios.findOne({ _id: result.insertedId }) as UserDoc | null;
  }

  console.log("[result] final admin:", summarize(admin));
}

main().catch((error) => {
  console.error("[error]", error);
  process.exit(1);
});
