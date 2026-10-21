"use client";

import {
  HiNoSymbol,
  HiOutlineArrowPath,
  HiOutlineArrowRight,
  HiOutlineNoSymbol,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useSWRConfig } from "swr";
import Link from "next/link";
import ShowDateTime from "../../../components/ShowDateTime";
import { userApiUrl, terminateUser } from "../../../services/user";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { HiOutlineRewind } from "react-icons/hi";

const UserRow = ({
  user: { id, name, email, role, created_at, terminated_at, profile_image },
}) => {
  const { mutate } = useSWRConfig();
  const searchParams = useSearchParams();

  const handleDeleteBtn = async () => {
    if (
      !confirm(
        terminated_at
          ? "Are you sure you want to restore this User?"
          : "Are you sure you want to terminate this User?"
      )
    )
      return;

    const toastId = toast.loading("Deleting User ....");

    try {
      const res = await terminateUser(id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message, { id: toastId });
      mutate(`${userApiUrl}?${searchParams.toString()}`);
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
        <img
          src={
            profile_image
              ? profile_image
              : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt={name}
          className="size-[50px] rounded-full"
        />
      </th>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span className=" block">
          {name}{" "}
          {terminated_at && (
            <span className=" text-xs text-red-500">(Terminated)</span>
          )}
        </span>
        <span className=" block  text-gray-400 text-xs">{email}</span>
      </th>

      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 dark:text-white"
      >
        <span
          className={`${
            role === "staff"
              ? " bg-gray-200 text-gray-700"
              : " bg-blue-100 text-blue-700"
          } text-nowrap text-xs rounded-full px-4 py-1 capitalize`}
        >
          {role}{" "}
          {terminated_at && (
            <span className="  text-red-500">(Terminated)</span>
          )}
        </span>
      </th>
      <td className="px-6 py-3 text-end">
        <ShowDateTime
          className=" flex justify-end  uppercase gap-3 text-gray-700"
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
            {terminated_at ? <HiOutlineArrowPath /> : <HiOutlineNoSymbol />}
          </button>
          <Link
            href={`/dashboard/user/edit/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>
          <Link
            href={`/dashboard/user/detail/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
