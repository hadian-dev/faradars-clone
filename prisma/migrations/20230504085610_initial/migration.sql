-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('Man', 'Woman', 'Unknown');

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "ratingCount" INTEGER NOT NULL DEFAULT 0,
    "duration" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageCover" TEXT NOT NULL,
    "videoCover" TEXT,
    "size" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessons" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "duration" TEXT,
    "video" TEXT,
    "images" TEXT[],
    "notes" TEXT[],
    "practices" TEXT[],
    "rating" INTEGER NOT NULL DEFAULT 0,
    "ratingCount" INTEGER NOT NULL DEFAULT 0,
    "courseId" INTEGER,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),
    "name" TEXT,
    "image" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "slug" TEXT,
    "biography" TEXT,
    "grade" TEXT,
    "degree" TEXT,
    "gender" "GenderType" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_on_course" (
    "courseId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "categories_on_course_pkey" PRIMARY KEY ("courseId","categoryId")
);

-- CreateTable
CREATE TABLE "users_on_course" (
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "users_on_course_pkey" PRIMARY KEY ("courseId","userId")
);

-- CreateTable
CREATE TABLE "tags_on_course" (
    "courseId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tags_on_course_pkey" PRIMARY KEY ("courseId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_parentId_key" ON "categories"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_course" ADD CONSTRAINT "categories_on_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_course" ADD CONSTRAINT "categories_on_course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_course" ADD CONSTRAINT "users_on_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_course" ADD CONSTRAINT "users_on_course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_course" ADD CONSTRAINT "tags_on_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_course" ADD CONSTRAINT "tags_on_course_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
