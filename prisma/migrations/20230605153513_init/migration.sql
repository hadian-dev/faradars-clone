/*
  Warnings:

  - You are about to drop the column `description` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `htmlDescription` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `introduction` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `suitableFor` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `tableOfContents` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "description",
DROP COLUMN "htmlDescription",
DROP COLUMN "introduction",
DROP COLUMN "suitableFor",
DROP COLUMN "tableOfContents";

-- CreateTable
CREATE TABLE "CourseDescription" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "courseId" INTEGER,

    CONSTRAINT "CourseDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseDescription" ADD CONSTRAINT "CourseDescription_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
