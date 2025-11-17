-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "src" TEXT,
    "sellerName" TEXT,
    "sellerEmail" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
