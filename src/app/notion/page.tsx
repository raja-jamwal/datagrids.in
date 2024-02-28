import React from "react";
import { listNotionDatabases } from "@/app/lib/lib";
import { get } from "lodash";
import { DbList } from "@/app/notion/DbList";
import GoBack from "@/components/GoBack";

async function Notion() {
  const notionDatabases = await listNotionDatabases();
  const dbs = notionDatabases.results.map((result) => {
    return {
      id: result.id,
      title: get(result, "title[0].plain_text") || "Untitled Database",
    };
  });
  return (
    <>
      <GoBack />
      <div className="font-semibold">Select the Notion DB</div>
      <div className="flex-grow overflow-y-auto">
        <DbList dbs={dbs} />
      </div>
    </>
  );
}

export default Notion;
