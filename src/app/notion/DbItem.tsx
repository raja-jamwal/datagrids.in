"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type DbItemParams = {
  db: { id: string; title: string };
  onClick: () => Promise<unknown>;
};

export function DbItem(props: DbItemParams) {
  const [loading, setLoading] = useState(false);
  const handleOnClick = async () => {
    setLoading(true);
    const result = await props.onClick();
    setLoading(false);
  };

  return (
    <Button
      className={`block w-full ${loading ? "opacity-50" : ""}`}
      variant="outline"
      onClick={handleOnClick}
      disabled={loading}
    >
      {loading ? "Saving..." : props.db.title}
    </Button>
  );
}
