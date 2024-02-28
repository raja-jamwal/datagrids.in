import React from "react";
import { DbStat } from "@/app/agri/DbStat";
import {
  getApmcCount,
  getCommodityCount,
  getMandiForDate,
  getStateCount,
} from "@/app/agri/agri-lib";
import { subDays } from "date-fns";
import { MandiData } from "@/app/api/mandi/getMandiForDate";
import { MandiTable } from "@/app/agri/MandiTable";
import { DataFilter } from "@/app/agri/DataFilter";
import GoBack from "@/components/GoBack";

type AgriPageProps = {
  searchParams: {
    state: string;
    apmc: string;
    comm: string;
  };
};

async function AgriPage({ searchParams }: AgriPageProps) {
  const { state, apmc, comm } = searchParams;
  const states = await getStateCount();
  const apmcs = await getApmcCount();
  const commodities = await getCommodityCount();
  const date = subDays(new Date(), 1);
  date.setHours(0, 0, 0, 0);
  const mandiForDate = await getMandiForDate(date, state, apmc, comm);
  return (
    <div className="flex flex-col gap-y-2 m-8">
      <GoBack />
      <h1 className="text-xl">Commodity Online</h1>
      <div className="flex flex-row space-x-2">
        <DbStat
          title="State"
          description="Number of States"
          value={states.length}
        />
        <DbStat
          title="APMC"
          description="Number of APMCs"
          value={apmcs.length}
        />
        <DbStat
          title="Commodity"
          description="Number of Commidities"
          value={commodities.length}
        />
      </div>

      <div className="flex flex-row gap-2">
        <DataFilter states={states} apmcs={apmcs} commodities={commodities} />
      </div>
      <MandiTable
        date={date}
        mandiForDate={mandiForDate as any as MandiData[]}
      />
    </div>
  );
}

export default AgriPage;
