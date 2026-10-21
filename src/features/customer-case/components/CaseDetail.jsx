"use client";

import CaseStatusBadge from "./CaseStatusBadge";
import { formattedDate, formattedDateWithoutTime } from "@/utils/dateTime";
import Link from "next/link";
import ClientFileSection from "./ClientFileSection";
import { Share } from "lucide-react";
import { toast } from "sonner";

const CaseDetail = ({ data }) => {
  const handleShare = async () => {
    const text = `
      Hello ${data?.data?.customer?.name},

      How are you? I hope you are well. As for me, I'm fine.

      Your Tracking code is : ${data?.data?.tracking_code}
      You can track your case here: ${process.env.NEXT_PUBLIC_WEB_LINK}/tracking/${data?.data?.tracking_code}
      Your case status is: ${data?.data?.status}
      Your case service is: ${data?.data?.service?.title}

      Best regards,
    `;
    await navigator.clipboard.writeText(text);
    toast.success("File request link copied to clipboard");
  };

  return (
    <div className=" col-span-1 md:col-span-2">
      <table className=" border-collapse w-full rounded-xl mb-5">
        <tbody>
          <tr>
            <td className=" p-3 border w-44">Tracking Code</td>
            <td className=" p-3 border flex justify-between items-center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEB_LINK}/tracking/${data?.data?.tracking_code}`}
                target="_blank"
                className=" underline underline-offset-4 font-mono"
              >
                {data?.data?.tracking_code}
              </Link>
              <button
                onClick={handleShare}
                className=" border border-gray-300 flex items-center gap-2 py-2 px-4 duration-150 active:scale-95"
              >
                <Share className=" size-4" />
                <span>Share</span>
              </button>
            </td>
          </tr>

          <tr>
            <td className=" p-3 border">Status</td>
            <td className=" p-3 border">
              <CaseStatusBadge status={data?.data?.status} />
            </td>
          </tr>
          <tr>
            <td className=" p-3 border">Service</td>
            <td className=" p-3 border">{data?.data?.service?.title}</td>
          </tr>
          <tr>
            <td className=" p-3 border">Customer</td>
            <td className=" p-3 border">{data?.data?.customer?.name}</td>
          </tr>

          <tr>
            <td className=" p-3 border">Start Date</td>
            <td className=" p-3 border">
              {data?.data?.start_date
                ? formattedDateWithoutTime(data?.data?.start_date)
                : "xxxxx"}
            </td>
          </tr>
          <tr>
            <td className=" p-3 border">End Date</td>
            <td className=" p-3 border">
              {data?.data?.end_date
                ? formattedDateWithoutTime(data?.data?.end_date)
                : "xxxxx"}
            </td>
          </tr>
        </tbody>
      </table>

      <ClientFileSection files={data?.data?.client_files} />
      <div className="flex item-center gap-3 mb-6">
        <Link
          href={`/dashboard/customer-case/edit/${data?.data?.id}`}
          className=" flex gap-2 text-nowrap items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium border borer-[#E4E4E7] hover:bg-gray-100 hover:text-blue-600  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Edit Case
        </Link>
        <div>
          <span className="text-xs mb-2">Created at</span>
          <p className="text-sm ">{formattedDate(data?.data?.created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
