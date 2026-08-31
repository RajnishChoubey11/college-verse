"use client";
import { CollegeDetail } from "@/components";

export default function EngineeringDetailPage() {
  return (
    <CollegeDetail
      apiBasePath="/api/engineering"
      fallbackCategory="Engineering"
    />
  );
}
