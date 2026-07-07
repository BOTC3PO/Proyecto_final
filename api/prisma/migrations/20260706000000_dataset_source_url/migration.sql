-- PLAN-E §20 (F1) — datasets externos: URL de origen (HTTPS, CSV/JSON) para
-- refresco manual server-side. Aditiva: una columna nullable.

ALTER TABLE "vblang_datasets" ADD COLUMN "source_url" TEXT;
