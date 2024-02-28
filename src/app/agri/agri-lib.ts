"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStateCount() {
  return prisma.mandi.findMany({
    distinct: ["state"],
    select: {
      state: true,
    },
  });
}

export async function getApmcCount() {
  return prisma.mandi.findMany({
    distinct: ["apmc"],
    select: {
      apmc: true,
    },
  });
}

export async function getCommodityCount() {
  return prisma.mandi.findMany({
    distinct: ["commodity"],
    select: {
      commodity: true,
    },
  });
}

export async function getMandiForDate(
  date: Date,
  state?: string,
  apmc?: string,
  commodity?: string,
) {
  let mandiFilter: any = {
    where: {
      created_at: {
        gte: date,
        // lt: addDays(date, 1),
      },
    },
  };
  if (state) {
    mandiFilter.where["state"] = state;
  }
  if (apmc) {
    mandiFilter.where["apmc"] = apmc;
  }
  if (commodity) {
    mandiFilter.where["commodity"] = commodity;
  }
  return prisma.mandi.findMany(mandiFilter);
}
