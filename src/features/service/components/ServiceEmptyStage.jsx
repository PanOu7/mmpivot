"use client"

import Link from "next/link";

const ServiceEmptyStage = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
      <td colSpan={6} className="px-6 py-4 text-center">
        There is no Service . <Link href="/dashboard/service-create" className=" text-blue-700 underline">create Service</Link>
      </td>
    </tr>
  );
};

export default ServiceEmptyStage;
