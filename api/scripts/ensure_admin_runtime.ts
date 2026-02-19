import { MongoClient } from "mongodb";
import { ENV } from "../src/lib/env";

const TARGET_EMAIL = "admin@escuela.com";
const TARGET_USERNAME = process.env.ADMIN_USERNAME ?? "admin.escuela";
const DEFAULT_PASSWORD_HASH =
  "pbkdf2$100000$b142c6ce8da912e98148614e87cb2cf4$aee08b4f7ed477b8c077036bd58cf480867554e5f20da13a6c6921ce13032b44e44cf101cdaa0b54ec9f72d11fd8706698b0e20641666f3ef6facacfda6122c4";

async function main() {
  const uri = ENV.MONGO_URI;
  const dbName = ENV.DB_NAME;

  console.log("[env] Effective runtime variables");
  console.log(`MONGO_URI=${uri}`);
  console.log(`DB_NAME=${dbName}`);

  const client = new MongoClient(uri);
  await client.connect();
  try {
    const db = client.db(dbName);
    const usuarios = db.collection("usuarios");

    const byEmail = await usuarios.findOne({ email: TARGET_EMAIL });
    const byUsername = await usuarios.findOne({ username: TARGET_USERNAME });

    console.log("[lookup] by email:", summarize(byEmail));
    console.log("[lookup] by username:", summarize(byUsername));

    const variantMatches = await usuarios
      .find(
        { email: { $regex: `^${escapeRegex(TARGET_EMAIL)}$`, $options: "i" } },
        { projection: { _id: 1, email: 1, username: 1, isDeleted: 1 } }
      )
      .toArray();

    if (variantMatches.length > 0) {
      console.log(`[normalize] found ${variantMatches.length} email variant(s)`);
      for (const item of variantMatches) {
        if (typeof item.email === "string" && item.email !== item.email.toLowerCase()) {
          const normalized = item.email.toLowerCase();
          await usuarios.updateOne({ _id: item._id }, { $set: { email: normalized, updatedAt: new Date() } });
          console.log(`[normalize] ${item.email} -> ${normalized}`);
        }
      }
    }

    let admin = await usuarios.findOne({
      $or: [{ email: TARGET_EMAIL }, { username: TARGET_USERNAME }]
    });

    if (admin && admin.isDeleted === true) {
      console.log("[repair] user exists but isDeleted=true. Restoring to false.");
      await usuarios.updateOne(
        { _id: admin._id },
        { $set: { isDeleted: false, email: TARGET_EMAIL, updatedAt: new Date() } }
      );
      admin = await usuarios.findOne({ _id: admin._id });
    }

    if (!admin) {
      console.log("[reseed] admin user not found in target DB. Creating in this exact DB.");
      const now = new Date();
      const result = await usuarios.insertOne({
        username: TARGET_USERNAME,
        email: TARGET_EMAIL,
        fullName: "Administrador",
        role: "ADMIN",
        passwordHash: DEFAULT_PASSWORD_HASH,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      });
      admin = await usuarios.findOne({ _id: result.insertedId });
    }

    console.log("[result] final admin:", summarize(admin));
  } finally {
    await client.close();
  }
}

function summarize(doc: any) {
  if (!doc) return null;
  return {
    _id: doc._id?.toString?.() ?? doc._id,
    email: doc.email,
    username: doc.username,
    role: doc.role,
    isDeleted: doc.isDeleted
  };
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((error) => {
  console.error("[error]", error);
  process.exit(1);
});
