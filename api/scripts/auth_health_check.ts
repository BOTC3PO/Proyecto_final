import { getDb } from "../src/lib/db";
import { isPasswordHashUsable } from "../src/lib/passwords";

const TARGET_EMAIL = process.env.AUTH_HEALTH_EMAIL ?? "admin@escuela.com";

async function main() {
  const db = await getDb();
  const user = await db.collection("usuarios").findOne(
    { email: TARGET_EMAIL, isDeleted: { $ne: true } },
    { projection: { _id: 1, role: 1, passwordHash: 1 } }
  );

  if (!user) {
    console.error(`[auth:health] Usuario semilla no encontrado: ${TARGET_EMAIL}`);
    process.exit(1);
  }

  const hashOk = isPasswordHashUsable(user.passwordHash);
  if (!hashOk) {
    console.error(
      `[auth:health] Usuario '${TARGET_EMAIL}' existe, pero passwordHash inválido/no utilizable.`
    );
    process.exit(1);
  }

  if (user.role !== "ADMIN") {
    console.warn(
      `[auth:health] Usuario '${TARGET_EMAIL}' existe con rol '${String(user.role)}' (esperado: ADMIN).`
    );
  }

  console.log(
    `[auth:health] OK usuario semilla presente con hash utilizable (email=${TARGET_EMAIL}, db=core_schema.sqlite).`
  );
}

main().catch((error) => {
  console.error("[auth:health] error inesperado", error);
  process.exit(1);
});
