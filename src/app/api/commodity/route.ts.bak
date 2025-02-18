import { NextRequest } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(req: NextRequest) {
  // const response = await fetch(
  //   "https://www.commodityonline.com/mandiprices/onion",
  // );
  // const html = await response.text();
  const dom = await JSDOM.fromURL(
    "https://www.commodityonline.com/mandiprices/onion",
  );
  const table = dom.window.document.querySelector("table#main-table2");
  if (!table) {
    return new Response("Table not found", { status: 404 });
  }

  // define array to hold our JSON data
  const jsonTableData: any[] = [];

  const headingRow = Array.from(table.querySelectorAll("th"));

  // get rows of the table
  const rows = Array.from(table.querySelectorAll("tbody tr"));

  for (const row of rows) {
    console.log(row.textContent);
  }

  // loop through each row
  rows.forEach((row, i) => {
    // get columns in this row
    const cols = Array.from(row.getElementsByTagName("td"));

    // data row, convert to JSON
    // define a json object for each row
    let rowJsonData: any = {};

    // loop through each column in the row
    cols.forEach((col, j) => {
      let headerText = headingRow[j]?.textContent?.trim();
      if (headerText && col.textContent) {
        rowJsonData[headerText] = col.textContent;
      }
    });

    // push the JSON object into our JSON data array
    jsonTableData.push(rowJsonData);
  });

  return new Response(JSON.stringify(jsonTableData), {
    status: 200,
    headers: { "Content-Type": "application/json" }, // set headers to return JSON
  });
}
