"use client";
import { useRouter } from "next/navigation";

import { DbItem } from "@/app/notion/DbItem";
import React from "react";
import { createPageInDb } from "@/app/lib/lib";

export function DbList(props: { dbs: { id: string; title: string }[] }) {
  const router = useRouter();
  return (
    <div className="space-y-2">
      {props.dbs.map((db) => {
        return (
          <DbItem
            key={db.id}
            db={db}
            onClick={async () => {
              const result = await createPageInDb(
                db.id,
                "Hello",
                "Hello World",
              );
              if (result) {
                router.push("/notion/done");
              } else {
                router.push("/notion/error");
              }
            }}
          />
        );
      })}
    </div>
  );
}
