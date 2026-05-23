/*
  Warnings:

  - You are about to drop the column `category` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `duration_minutes` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `modulos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "modulos" DROP COLUMN "category",
DROP COLUMN "duration_minutes",
DROP COLUMN "level",
DROP COLUMN "subject";
