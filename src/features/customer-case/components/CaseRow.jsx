"use client";

import {
  HiOutlineArrowRight,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useSWRConfig } from "swr";
import Link from "next/link";
import ShowDateTime from "../../../components/ShowDateTime";
import { caseApiUrl, destroyCase } from "../../../services/case";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import CaseStatusBadge from "./CaseStatusBadge";
import { ArrowRight } from "lucide-react";

const CaseRow = ({
  case: {
    id,
    title,
    description,
    status,
    tracking_code,
    start_date,
    end_date,
    service,
    customer,
    user,
    created_at,
  },
}) => {
  const { mutate } = useSWRConfig();
  const searchParams = useSearchParams();

  const handleDeleteBtn = async () => {
    if (!confirm("Are you sure you want to delete this Customer Case?")) return;

    const toastId = toast.loading("Deleting Case ....");

    try {
      const res = await destroyCase(id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message, { id: toastId });
      mutate(`${caseApiUrl}?${searchParams.toString()}`);
    } catch (err) {
      toast.error(err.message, { id: toastId });
      console.error(err);
    }
  };

  return (
    <tr>
      <td className="px-6 py-3">{id}</td>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span className=" block capitalize mb-1">{title}</span>
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_WEB_LINK}/tracking/${tracking_code}`}
          className="  text-xs text-gray-500 font-mono border border-gray-300 p-0.5 rounded-lg px-2 uppercase"
        >
          {tracking_code}
        </Link>
      </th>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <CaseStatusBadge status={status} />
      </th>

      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span className=" block text-sm">{service?.title}</span>
        <span className="   text-gray-400 text-xs flex gap-2 items-center">
          {start_date ?? " xxx "} <ArrowRight size={10} /> {end_date ?? " xxx "}
        </span>
      </th>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span className=" block text-sm text-nowrap">{customer.name}</span>
        <span className=" block  text-gray-400 text-xs">{customer.phone}</span>
      </th>
      <td className="px-6 py-3 text-end">
        <p className=" block  text-nowrap text-gray-900 font-medium  text-sm">
          {user?.name}
        </p>
        <ShowDateTime
          className=" flex justify-end text-xs uppercase gap-3 text-gray-400"
          timestamp={created_at}
          hideTime={true}
        />
      </td>

      <td className="px-6 py-3 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineTrash />
          </button>
          <Link
            href={`/dashboard/customer-case/edit/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>
          <Link
            href={`/dashboard/customer-case/detail/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default CaseRow;
