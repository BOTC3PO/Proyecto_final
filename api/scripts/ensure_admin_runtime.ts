import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { hashPassword } from "../src/lib/passwords";

const TARGET_EMAIL = process.env.ADMIN_EMAIL ?? "admin@plataforma.com";

async function main() {
  let admin = await prisma.usuario.findFirst({
    where: { email: TARGET_EMAIL }
  });

  if (admin?.isDeleted) {
    console.log("[ensure_admin] Usuario existe pero isDeleted=true. Restaurando.");
    admin = await prisma.usuario.update({
      where: { id: admin.id },
      data: { isDeleted: false, updatedAt: new Date().toISOString() }
    });
  }

  if (!admin) {
    console.log("[ensure_admin] Admin no encontrado. Creando.");
    const now = new Date().toISOString();
    admin = await prisma.usuario.create({
      data: {
        id: "usr-admin-001",
        username: "admin.plataforma",
        email: TARGET_EMAIL,
        fullName: "Administrador",
        role: "ADMIN",
        passwordHash: hashPassword("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
  }

  console.log("[ensure_admin] Admin OK:", {
    id: admin.id, email: admin.email, role: admin.role, isDeleted: admin.isDeleted
  });
}

main()
  .catch(e => { console.error("[ensure_admin] Error:", e); process.exit(1); })
  .finally(() => prisma.$disconnect());
