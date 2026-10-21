import CaseStatusBadge from "@/features/customer-case/components/CaseStatusBadge";
import { Calendar } from "lucide-react";
import React from "react";

const CustomerCaseDetailCard = ({ caseData }) => {
  return (
    <div className=" grid grid-cols-4 gap-5 mb-10">
      <div className=" col-span-full">
        {/* <p className=" text-xs text-gray-600">Tracking code</p> */}
        <h3 className=" text-xl lg:text-2xl font-bold flex items-center gap-2">
          <span> # </span>
          <span className="">{caseData?.tracking_code}</span>{" "}
          <CaseStatusBadge status={caseData.status} />
        </h3>
      </div>
      <div className=" col-span-full ">
        <p className=" font-bold">{caseData?.title}</p>
        <p className=" text-sm">{caseData?.description}</p>
      </div>

      <div className=" col-span-2">
        <div className=" flex items-center gap-2">
          <Calendar className=" stroke-1 size-8" />
          <div className="">
            <p className=" text-xs text-gray-600">Start date</p>
            <p className=" font-bold">{caseData?.start_date ?? "xx.xx.xxxx"}</p>
          </div>
        </div>
      </div>
      <div className=" col-span-2">
        <div className=" flex items-center gap-2">
          <Calendar className=" stroke-1 size-8" />
          <div className="">
            <p className=" text-xs text-gray-600">End date</p>
            <p className=" font-bold">{caseData?.end_date ?? "xx.xx.xxxx"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCaseDetailCard;
