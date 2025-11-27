/*
  Warnings:

  - You are about to drop the `UserInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferredContact` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "preferredContact" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserInfo";
