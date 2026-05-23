-- AlterTable
ALTER TABLE "quiz_versions" ADD COLUMN     "plantilla_id" TEXT;

-- CreateTable
CREATE TABLE "plantillas_ejercicio" (
    "id" TEXT NOT NULL,
    "owner_user_id" TEXT NOT NULL,
    "school_id" TEXT,
    "visibility" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "materia" TEXT,
    "tags" TEXT,
    "codigo_dsl" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "basado_en" TEXT,
    "public_aprobado" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "plantillas_ejercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plantillas_ejercicio_versiones" (
    "id" TEXT NOT NULL,
    "plantilla_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "codigo_dsl" TEXT NOT NULL,
    "changelog" TEXT,
    "created_at" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "plantillas_ejercicio_versiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vblang_datasets" (
    "id" TEXT NOT NULL,
    "owner_user_id" TEXT NOT NULL,
    "school_id" TEXT,
    "visibility" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "columnas" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "vblang_datasets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vblang_dataset_filas" (
    "id" TEXT NOT NULL,
    "dataset_id" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "datos" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "vblang_dataset_filas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "plantillas_ejercicio_owner_user_id_idx" ON "plantillas_ejercicio"("owner_user_id");

-- CreateIndex
CREATE INDEX "plantillas_ejercicio_school_id_visibility_idx" ON "plantillas_ejercicio"("school_id", "visibility");

-- CreateIndex
CREATE INDEX "plantillas_ejercicio_materia_visibility_idx" ON "plantillas_ejercicio"("materia", "visibility");

-- CreateIndex
CREATE INDEX "plantillas_ejercicio_visibility_public_aprobado_idx" ON "plantillas_ejercicio"("visibility", "public_aprobado");

-- CreateIndex
CREATE INDEX "plantillas_ejercicio_versiones_plantilla_id_idx" ON "plantillas_ejercicio_versiones"("plantilla_id");

-- CreateIndex
CREATE UNIQUE INDEX "plantillas_ejercicio_versiones_plantilla_id_version_key" ON "plantillas_ejercicio_versiones"("plantilla_id", "version");

-- CreateIndex
CREATE INDEX "vblang_datasets_owner_user_id_idx" ON "vblang_datasets"("owner_user_id");

-- CreateIndex
CREATE INDEX "vblang_datasets_school_id_visibility_idx" ON "vblang_datasets"("school_id", "visibility");

-- CreateIndex
CREATE UNIQUE INDEX "vblang_datasets_owner_user_id_nombre_key" ON "vblang_datasets"("owner_user_id", "nombre");

-- CreateIndex
CREATE INDEX "vblang_dataset_filas_dataset_id_orden_idx" ON "vblang_dataset_filas"("dataset_id", "orden");

-- CreateIndex
CREATE INDEX "quiz_versions_plantilla_id_idx" ON "quiz_versions"("plantilla_id");

-- AddForeignKey
ALTER TABLE "quiz_versions" ADD CONSTRAINT "quiz_versions_plantilla_id_fkey" FOREIGN KEY ("plantilla_id") REFERENCES "plantillas_ejercicio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plantillas_ejercicio" ADD CONSTRAINT "plantillas_ejercicio_basado_en_fkey" FOREIGN KEY ("basado_en") REFERENCES "plantillas_ejercicio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plantillas_ejercicio_versiones" ADD CONSTRAINT "plantillas_ejercicio_versiones_plantilla_id_fkey" FOREIGN KEY ("plantilla_id") REFERENCES "plantillas_ejercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vblang_dataset_filas" ADD CONSTRAINT "vblang_dataset_filas_dataset_id_fkey" FOREIGN KEY ("dataset_id") REFERENCES "vblang_datasets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
