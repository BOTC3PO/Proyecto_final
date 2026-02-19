import { ObjectId } from "mongodb";
import { getDb } from "../src/lib/db";
import { hashPassword, isPasswordHashUsable } from "../src/lib/passwords";

type UsuarioAuthProjection = {
  _id: ObjectId;
  email?: unknown;
  username?: unknown;
  role?: unknown;
  passwordHash?: unknown;
  passwordResetRequired?: unknown;
};

type IssueReason =
  | "missing-hash"
  | "null-hash"
  | "empty-hash"
  | "bcrypt-hash"
  | "unsupported-prefix"
  | "invalid-pbkdf2-format"
  | "non-string-hash";

const normalizeHashPrefix = (rawHash: string) => {
  const normalized = rawHash.startsWith("$") ? rawHash.slice(1) : rawHash;
  return normalized.split("$")[0] ?? "";
};

const classifyHashIssue = (passwordHash: unknown): IssueReason | null => {
  if (passwordHash === undefined) return "missing-hash";
  if (passwordHash === null) return "null-hash";
  if (typeof passwordHash !== "string") return "non-string-hash";
  const trimmed = passwordHash.trim();
  if (!trimmed) return "empty-hash";
  if (trimmed.startsWith("$2a$") || trimmed.startsWith("$2b$") || trimmed.startsWith("$2y$")) {
    return "bcrypt-hash";
  }
  const prefix = normalizeHashPrefix(trimmed);
  if (prefix !== "pbkdf2" && prefix !== "pbkdf2-sha256") {
    return "unsupported-prefix";
  }
  if (!isPasswordHashUsable(trimmed)) return "invalid-pbkdf2-format";
  return null;
};

const parseArgs = () => {
  const args = process.argv.slice(2);
  return {
    write: args.includes("--write"),
    includeGuests: args.includes("--include-guests"),
    rehashPassword: (() => {
      const idx = args.indexOf("--rehash-password");
      if (idx === -1) return null;
      const value = args[idx + 1];
      return typeof value === "string" && value.length > 0 ? value : null;
    })()
  };
};

const asText = (value: unknown) => (typeof value === "string" ? value : null);

const run = async () => {
  const { write, includeGuests, rehashPassword } = parseArgs();
  if (process.argv.includes("--rehash-password") && !rehashPassword) {
    throw new Error("Missing value for --rehash-password");
  }

  const db = await getDb();
  const query: Record<string, unknown> = { isDeleted: { $ne: true } };
  if (!includeGuests) {
    query.role = { $ne: "GUEST" };
  }

  const users = (await db
    .collection("usuarios")
    .find(query)
    .project<UsuarioAuthProjection>({
      _id: 1,
      email: 1,
      username: 1,
      role: 1,
      passwordHash: 1,
      passwordResetRequired: 1
    })
    .toArray()) as UsuarioAuthProjection[];

  const incompatible = users
    .map((user) => {
      const reason = classifyHashIssue(user.passwordHash);
      if (!reason) return null;
      return {
        id: user._id,
        email: asText(user.email),
        username: asText(user.username),
        role: asText(user.role),
        reason,
        passwordResetRequired: user.passwordResetRequired === true
      };
    })
    .filter(Boolean) as Array<{
    id: ObjectId;
    email: string | null;
    username: string | null;
    role: string | null;
    reason: IssueReason;
    passwordResetRequired: boolean;
  }>;

  const summary = incompatible.reduce<Record<IssueReason, number>>(
    (acc, item) => {
      acc[item.reason] = (acc[item.reason] ?? 0) + 1;
      return acc;
    },
    {
      "missing-hash": 0,
      "null-hash": 0,
      "empty-hash": 0,
      "bcrypt-hash": 0,
      "unsupported-prefix": 0,
      "invalid-pbkdf2-format": 0,
      "non-string-hash": 0
    }
  );

  console.log(
    JSON.stringify(
      {
        scannedUsers: users.length,
        incompatibleCount: incompatible.length,
        write,
        migrationMode: rehashPassword ? "rehash" : "force-reset",
        summary,
        samples: incompatible.slice(0, 25).map((item) => ({
          id: item.id.toString(),
          email: item.email,
          username: item.username,
          role: item.role,
          reason: item.reason,
          passwordResetRequired: item.passwordResetRequired
        }))
      },
      null,
      2
    )
  );

  if (!write || incompatible.length === 0) return;

  const now = new Date();
  if (rehashPassword) {
    const updates = incompatible.map((item) => ({
      updateOne: {
        filter: { _id: item.id },
        update: {
          $set: {
            passwordHash: hashPassword(rehashPassword),
            passwordResetRequired: false,
            updatedAt: now
          }
        }
      }
    }));
    const result = await db.collection("usuarios").bulkWrite(updates, { ordered: false });
    console.log(
      JSON.stringify(
        {
          action: "rehash",
          matchedCount: result.matchedCount,
          modifiedCount: result.modifiedCount
        },
        null,
        2
      )
    );
    return;
  }

  const ids = incompatible.map((item) => item.id);
  const result = await db.collection("usuarios").updateMany(
    { _id: { $in: ids } },
    {
      $set: {
        passwordResetRequired: true,
        updatedAt: now
      }
    }
  );

  console.log(
    JSON.stringify(
      {
        action: "force-reset",
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount
      },
      null,
      2
    )
  );
};

run().catch((error) => {
  console.error("[password_hash_diagnostics] failed", error);
  process.exitCode = 1;
});
