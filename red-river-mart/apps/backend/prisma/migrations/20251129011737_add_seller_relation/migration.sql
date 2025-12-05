/*
  Warnings:

  - You are about to drop the column `sellerEmail` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `sellerName` on the `Item` table. All the data in the column will be lost.
  - Added the required column `sellerId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "sellerEmail",
DROP COLUMN "sellerName",
ADD COLUMN     "sellerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
