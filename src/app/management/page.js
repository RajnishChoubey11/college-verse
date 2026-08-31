"use client";
import { CollegeList } from "@/components";

export default function ManagementPage() {
  return (
    <CollegeList
      title="Management Colleges"
      apiEndpoint="/api/management"
      detailBasePath="/management"
      placeholder="Try 'IIM', 'Management', or 'Business'"
    />
  );
}
