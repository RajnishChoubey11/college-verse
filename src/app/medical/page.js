"use client";
import { CollegeList } from "@/components";

export default function MedicalPage() {
  return (
    <CollegeList
      title="Medical Colleges"
      apiEndpoint="/api/medical"
      detailBasePath="/medical"
      placeholder="Try 'AIIMS', 'Medical', or 'Hospital'"
    />
  );
}
