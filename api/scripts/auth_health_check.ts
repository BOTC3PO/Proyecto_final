import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { isPasswordHashUsable } from "../src/lib/passwords";

const TARGET_EMAIL = process.env.AUTH_HEALTH_EMAIL ?? "admin@plataforma.com";

async function main() {
  const user = await prisma.usuario.findFirst({
    where: { email: TARGET_EMAIL, isDeleted: false },
    select: { id: true, role: true, passwordHash: true }
  });

  if (!user) {
    console.error(`[auth:health] Usuario no encontrado: ${TARGET_EMAIL}`);
    process.exit(1);
  }

  const hashOk = isPasswordHashUsable(user.passwordHash ?? "");
  if (!hashOk) {
    console.error(`[auth:health] passwordHash inválido para ${TARGET_EMAIL}`);
    process.exit(1);
  }

  if (user.role !== "ADMIN") {
    console.warn(`[auth:health] Rol inesperado: ${user.role} (esperado: ADMIN)`);
  }

  console.log(`[auth:health] OK — ${TARGET_EMAIL} presente con hash válido en Postgres.`);
}

main()
  .catch(e => { console.error("[auth:health] error:", e); process.exit(1); })
  .finally(() => prisma.$disconnect());
