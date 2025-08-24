-- AlterTable
ALTER TABLE "public"."Vender" ADD COLUMN     "address" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "contactNumber" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gstNumber" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nameOfPerson" TEXT NOT NULL DEFAULT '';
