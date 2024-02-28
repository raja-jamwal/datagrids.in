import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type DbStatProps = {
  title: string;
  description: string;
  value: number;
};

export function DbStat({ title, description, value }: DbStatProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{value}</p>
      </CardContent>
    </Card>
  );
}
