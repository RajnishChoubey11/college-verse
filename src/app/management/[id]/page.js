"use client";
import { CollegeDetail } from "@/components";

export default function ManagementDetailPage() {
  return (
    <CollegeDetail
      apiBasePath="/api/management"
      fallbackCategory="Management"
    />
  );
}
