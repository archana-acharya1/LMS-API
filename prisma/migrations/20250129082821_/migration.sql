/*
  Warnings:

  - Changed the type of `total_copies` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "total_copies",
ADD COLUMN     "total_copies" INTEGER NOT NULL;
