"use client";

import { MandiData } from "@/app/api/mandi/getMandiForDate";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "date-fns";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pageSize = 10;

export function MandiTable(props: { date: Date; mandiForDate: MandiData[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(props.mandiForDate.length / pageSize);
  const handlePageChange = (value: string) => {
    setPage(parseInt(value));
  };
  const mandisToShow = props.mandiForDate.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );
  const Options = Array.from({ length: totalPages }).map((_, i) => (
    <SelectItem key={i} value={(i + 1).toString()}>
      {i + 1}
    </SelectItem>
  ));

  return (
    <>
      <div className="flex flex-row items-center gap-x-4">
        <div>Data for Date: {formatDate(props.date, "dd MMMM yyyy")}</div>
        <div className="flex-grow" />
        <div>Entries: {props.mandiForDate.length.toLocaleString()}</div>
        <div>Page:</div>
        <Select onValueChange={handlePageChange} value={page.toString()}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Page" />
          </SelectTrigger>
          <SelectContent>{Options}</SelectContent>
        </Select>
      </div>

      <Table>
        <TableCaption>
          Trades for Date: {formatDate(props.date, "dd / MM / yyyy")}
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
          {mandisToShow.map((mandi) => (
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
    </>
  );
}
