"use client";
import { caseApiUrl, fetchCase } from "@/services/case";
import useSWR from "swr";

const CustomerCaseCountBadge = () => {
  const { data, isLoading } = useSWR(`${caseApiUrl}-count?status=1`, fetchCase);
  return (
    <div className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-sm text-white px-3 rounded-full shadow">
      {isLoading ? "..." : data?.total}
    </div>
  );
};

export default CustomerCaseCountBadge;
