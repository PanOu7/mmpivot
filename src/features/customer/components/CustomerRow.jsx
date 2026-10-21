"use client";

import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useSWRConfig } from "swr";
import Link from "next/link";
import ShowDateTime from "../../../components/ShowDateTime";
import { customerApiUrl, destroyCustomer } from "../../../services/customer";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const CustomerRow = ({
  customer: {
    id,
    name,
    company_name,
    position,
    email,
    phone,
    created_at,
    user: { name: userName },
  },
}) => {
  const { mutate } = useSWRConfig();
  const searchParams = useSearchParams();

  const handleDeleteBtn = async () => {
    if(!confirm("Are you sure you want to delete this Customer?")) return;
    const toastId = toast.loading("Deleting Customer ....");

    try {
      const res = await destroyCustomer(id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message, { id: toastId });
      mutate(`${customerApiUrl}?${searchParams.toString()}`);
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
        <span className=" block">{name}</span>
        <span className=" block  text-gray-400 text-xs">
          {position} @ {company_name}
        </span>
      </th>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span className=" block">{email}</span>
        <span className=" block  text-gray-400 text-xs">{phone}</span>
      </th>
      <td className="px-6 py-3 text-end">
        <p className=" block  text-nowrap text-gray-900 font-medium  text-sm">{userName}</p>
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
            href={`/dashboard/customer/edit/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default CustomerRow;
