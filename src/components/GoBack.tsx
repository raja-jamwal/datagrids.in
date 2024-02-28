"use client";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function GoBack() {
  const router = useRouter();
  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <IoMdArrowRoundBack size={22} />
    </Button>
  );
}

export default GoBack;
