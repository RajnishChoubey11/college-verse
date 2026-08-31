"use client";
import { CollegeList } from "@/components";

export default function PharmacyPage() {
  return (
    <CollegeList
      title="Pharmacy Colleges"
      apiEndpoint="/api/pharmacy"
      detailBasePath="/pharmacy"
      placeholder="Try 'Hamdard', 'Pharmacy', or 'Pharma'"
    />
  );
}
