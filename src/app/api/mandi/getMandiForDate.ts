import { formatDate } from "date-fns";

type MandiData = {
  id: string;
  state: string;
  apmc: string;
  commodity: string;
  min_price: string;
  modal_price: string;
  max_price: string;
  commodity_arrivals: string;
  commodity_traded: string;
  created_at: string;
  status: string;
  Commodity_Uom: string;
};

export async function getMandiForDate(date: Date) {
  const formattedDate = formatDate(date, "yyyy-MM-dd");
  console.log("formattedDate", formattedDate);
  const result = await fetch(
    "https://enam.gov.in/web/Ajax_ctrl/trade_data_list",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Sec-Fetch-Site": "same-origin",
        "Accept-Language": "en-GB,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Mode": "cors",
        Host: "enam.gov.in",
        Origin: "https://enam.gov.in",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5.2 Safari/605.1.15",
        Referer: "https://enam.gov.in/web/dashboard/trade-data",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "ci_session=ba82s1v7v5bjl28iob51ic9gfrtiu4s8; _ga=GA1.3.1012873269.1709050128; _gid=GA1.3.631138435.1709050128; privacyPolicyAccepted=true; uniqueCode=20240581772; SERVERID=node1",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: `language=en&stateName=MAHARASHTRA&apmcName=--+Select+APMCs+--&commodityName=--+Select+Commodity+--&fromDate=${formattedDate}&toDate=${formattedDate}`,
    },
  );

  const json = await result.json();
  return json.data as MandiData[];
}
