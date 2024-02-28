-- CreateTable
CREATE TABLE "Mandi" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "apmc" TEXT NOT NULL,
    "commodity" TEXT NOT NULL,
    "min_price" INTEGER NOT NULL,
    "modal_price" INTEGER NOT NULL,
    "max_price" INTEGER NOT NULL,
    "commodity_arrivals" INTEGER NOT NULL,
    "commodity_traded" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "Commodity_Uom" TEXT NOT NULL,

    CONSTRAINT "Mandi_pkey" PRIMARY KEY ("id")
);
