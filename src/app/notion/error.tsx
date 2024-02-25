"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col space-y-2">
      <h2>{error.message}</h2>
      <Button onClick={() => reset()}>Try again</Button>
      <Button onClick={() => router.push("/api/notion_oauth")}>
        Authenticate
      </Button>
    </div>
  );
}
