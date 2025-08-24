-- CreateTable
CREATE TABLE "public"."Vender" (
    "id" TEXT NOT NULL,
    "vendorName" TEXT NOT NULL,
    "vnCode" TEXT NOT NULL,
    "totalQty" TEXT NOT NULL,
    "products" TEXT[],
    "pricePerNos" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vender_vendorName_key" ON "public"."Vender"("vendorName");
