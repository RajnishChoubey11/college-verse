"use client";
import { CollegeDetail } from "@/components";

export default function MedicalDetailPage() {
  return (
    <CollegeDetail
      apiBasePath="/api/medical"
      fallbackCategory="Medical"
    />
  );
}
