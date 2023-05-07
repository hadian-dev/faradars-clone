-- DropIndex
DROP INDEX "categories_parentId_key";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "image" DROP NOT NULL;
