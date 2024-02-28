#!/usr/bin/env node

import fetch from "node-fetch";
import { eachDayOfInterval, format, parseISO } from "date-fns";

async function callApi(date) {
  const formatDate = format(date, "yyyy-MM-dd");
  const response = await fetch(
    `http://localhost:3000/api/mandi/save?date=${formatDate}`,
  );
  const data = await response.text();
  console.log(`Response for date ${formatDate}: ${data}`);
}

function main() {
  if (process.argv.length !== 4) {
    console.error(
      "Please provide from and to dates, e.g. cli/store_mandis.js 2021-01-01 2021-01-31",
    );
    process.exit(1);
  }

  const fromDate = parseISO(process.argv[2]);
  const toDate = parseISO(process.argv[3]);

  const dateInterval = eachDayOfInterval({ start: fromDate, end: toDate });
  console.log(`Fetching data for ${dateInterval.length} days`);

  for (const date of dateInterval) {
    callApi(date);
  }
}

main();
