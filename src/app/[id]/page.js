"use client";
import { CollegeDetail } from "@/components";

export default function UniversityDetailPage() {
  return (
    <CollegeDetail
      apiBasePath="/api/university"
      fallbackCategory="University"
    />
  );
}
