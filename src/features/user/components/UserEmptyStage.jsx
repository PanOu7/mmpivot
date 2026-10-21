"use client"

import Link from "next/link";

const UserEmptyStage = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
      <td colSpan={6} className="px-6 py-4 text-center">
        There is no User . <Link href="/dashboard/user/create" className=" text-blue-700 underline">create User</Link>
      </td>
    </tr>
  );
};

export default UserEmptyStage;
