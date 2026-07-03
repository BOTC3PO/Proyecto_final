-- PLAN-C §4 (ítem 29) — personalización por escuela: branding (logo,
-- ícono, colores). Guardado como JSON serializado en texto (mismo patrón
-- que el resto del schema, sin tipo Json nativo de Prisma). Nullable: una
-- escuela sin branding usa el look & feel default de la plataforma.
ALTER TABLE "escuelas" ADD COLUMN "branding" TEXT;
