"use client";
import { CollegeList } from "@/components";

export default function EngineeringPage() {
  return (
    <CollegeList
      title="Engineering Colleges"
      apiEndpoint="/api/engineering"
      detailBasePath="/engineering"
      placeholder="Try 'IIT', 'NIT', or 'Technology'"
    />
  );
}
