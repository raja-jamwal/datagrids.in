import { NextRequest, NextResponse } from "next/server";
import { subDays } from "date-fns";
import { PrismaClient } from "@prisma/client";
import { getMandiForDate } from "@/app/api/mandi/getMandiForDate";

export async function GET(req: NextRequest) {
  let dateString = req.nextUrl.searchParams.get("date") as string;
  let date = null;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = subDays(new Date(), 1);
  }
  const prisma = new PrismaClient();
  const mandis = await getMandiForDate(date);
  const mandiIds = mandis.map((mandi) => mandi.id);
  const existingMandis = await prisma.mandi.findMany({
    where: {
      id: {
        in: mandiIds,
      },
    },
    select: {
      id: true,
    },
  });

  const existingIds = existingMandis.map((mandi) => mandi.id);
  const newMandis = mandis
    .filter((mandi) => !existingIds.includes(mandi.id))
    .map((mandi) => ({
      id: mandi.id,
      state: mandi.state,
      apmc: mandi.apmc,
      commodity: mandi.commodity,
      min_price: parseInt(mandi.min_price),
      modal_price: parseInt(mandi.modal_price),
      max_price: parseInt(mandi.max_price),
      commodity_arrivals: parseInt(mandi.commodity_arrivals),
      commodity_traded: parseInt(mandi.commodity_traded),
      created_at: new Date(mandi.created_at),
      status: mandi.status,
      Commodity_Uom: mandi.Commodity_Uom,
    }));

  if (newMandis.length > 0) {
    await prisma.mandi.createMany({
      data: newMandis,
      skipDuplicates: true,
    });
  }

  return NextResponse.json(
    {
      written: newMandis.length,
    },
    { status: 200 },
  );
}
