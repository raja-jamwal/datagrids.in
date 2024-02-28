"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type DataFilterProps = {
  states: { state: string }[];
  apmcs: { apmc: string }[];
  commodities: { commodity: string }[];
};

export function DataFilter({ states, apmcs, commodities }: DataFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigate = (param: string) => {
    return (value: string) => {
      if (!searchParams) {
        return;
      }
      const params: any = {
        state: searchParams.get("state") || "",
        apmc: searchParams.get("apmc") || "",
        comm: searchParams.get("comm") || "",
      };
      params[param] = value;
      router.push("/agri?" + new URLSearchParams(params).toString());
    };
  };

  return (
    <>
      <Select onValueChange={navigate("state")}>
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
      <Select onValueChange={navigate("apmc")}>
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
      <Select onValueChange={navigate("comm")}>
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
    </>
  );
}
