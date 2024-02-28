import React from "react";
import { DbStat } from "@/app/agri/DbStat";
import {
  getApmcCount,
  getCommodityCount,
  getMandiForDate,
  getStateCount,
} from "@/app/agri/agri-lib";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDate, subDays } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function AgriPage() {
  const states = await getStateCount();
  const apmcs = await getApmcCount();
  const commodities = await getCommodityCount();
  const date = subDays(new Date(), 1);
  date.setHours(0, 0, 0, 0);
  const mandiForDate = await getMandiForDate(date);
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-xl">Commodity data from Mandies</h1>
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
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem key={state.state} value={state.state}>
                {state.state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All APMC" />
          </SelectTrigger>
          <SelectContent>
            {apmcs.map((apmc) => (
              <SelectItem key={apmc.apmc} value={apmc.apmc}>
                {apmc.apmc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Commodities" />
          </SelectTrigger>
          <SelectContent>
            {commodities.map((com) => (
              <SelectItem key={com.commodity} value={com.commodity}>
                {com.commodity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableCaption>
          Trades for Date: {formatDate(date, "dd / MM / yyyy")}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">State</TableHead>
            <TableHead>APMC</TableHead>
            <TableHead>Commodity</TableHead>
            <TableHead>Min Price (₹)</TableHead>
            <TableHead>Average Price (₹)</TableHead>
            <TableHead>Max Price (₹)</TableHead>
            <TableHead>Arrivals</TableHead>
            <TableHead>Traded</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mandiForDate.map((mandi) => (
            <TableRow key={mandi.id}>
              <TableCell className="font-medium">{mandi.state}</TableCell>
              <TableCell>{mandi.apmc}</TableCell>
              <TableCell>{mandi.commodity}</TableCell>
              <TableCell className="text-right">
                ₹{mandi.min_price.toLocaleString()} / {mandi.Commodity_Uom}
              </TableCell>
              <TableCell className="text-right">
                ₹{mandi.modal_price.toLocaleString()} / {mandi.Commodity_Uom}
              </TableCell>
              <TableCell className="text-right">
                ₹{mandi.max_price.toLocaleString()} / {mandi.Commodity_Uom}
              </TableCell>
              <TableCell className="text-right">
                {mandi.commodity_arrivals.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {mandi.commodity_traded.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {formatDate(mandi.created_at, "dd/mm/yyyy")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AgriPage;
