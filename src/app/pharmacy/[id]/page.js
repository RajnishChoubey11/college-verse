"use client";
import { CollegeDetail } from "@/components";

export default function PharmacyDetailPage() {
  return (
    <CollegeDetail
      apiBasePath="/api/pharmacy"
      fallbackCategory="Pharmacy"
    />
  );
}
