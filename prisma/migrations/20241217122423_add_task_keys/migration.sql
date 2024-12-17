/*
  Warnings:

  - Added the required column `author` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookName` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "author" VARCHAR(255) NOT NULL,
ADD COLUMN     "bookName" VARCHAR(255) NOT NULL;
