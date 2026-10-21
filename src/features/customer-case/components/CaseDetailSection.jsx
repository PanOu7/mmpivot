import React from "react";
import CaseDetail from "./CaseDetail";
import ProcessTrackingSection from "./ProcessTrackingSection";
import { caseApiUrl, fetchCase } from "@/services/case";
import { useParams } from "next/navigation";
import useSWR from "swr";

const CaseDetailSection = () => {
  const { id } = useParams();

  const { data: caseDetail, isLoading } = useSWR(
    `${caseApiUrl}/${id}`,
    fetchCase
  );

  if (isLoading) {
    return <p>Loading ...</p>;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className=" col-span-1 md:col-span-2">
        <h1 className="text-2xl font-bold mb-3 capitalize">
          {caseDetail?.data?.title}
        </h1>
        <p className="mb-5 text-gray-500 ">{caseDetail?.data?.description}</p>
      </div>
      <div className=" col-span-1 md:col-span-2"></div>
      <CaseDetail data={caseDetail} />
      <ProcessTrackingSection processes={caseDetail?.data?.processes} />
    </div>
  );
};

export default CaseDetailSection;
