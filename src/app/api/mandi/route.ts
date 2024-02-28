import { NextRequest, NextResponse } from "next/server";
import { getMandiForDate } from "@/app/api/mandi/getMandiForDate";
import { subDays } from "date-fns";

export async function GET(req: NextRequest) {
  let dateString = req.nextUrl.searchParams.get("date") as string;
  let date = null;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = subDays(new Date(), 1);
  }
  const mandis = await getMandiForDate(date);
  return NextResponse.json({ mandis }, { status: 200 });
}
