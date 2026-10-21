"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchUser, userApiUrl } from "@/services/user";
import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { LuCircleUser, LuKeySquare } from "react-icons/lu";
import { formattedDate } from "@/utils/dateTime";

const UserDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(`${userApiUrl}/${id}`, fetchUser);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const {
    data: { name, email, profile_image, role, created_at },
  } = data;

  return (
    <section className="rounded-lg w-full space-y-3">
      <div className="flex justify-start items-end gap-5">
        <img
          className=" size-[100px] rounded-full object-cover border-2 border-blue-600 ms-5"
          src={
            profile_image
              ? profile_image
              : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt="user photo"
        />
        <div className="flex items-center gap-3"></div>
      </div>

      {/* user information card */}
      <div className="bg-blue-50 p-6 max-w-lg rounded-md border border-blue-300 space-y-4.5 pt-14 -mt-12">
        <div className="flex items-center gap-2">
          <LuCircleUser className="size-5 text-blue-500  " />
          <h4 className="font-medium text-lg">Personal Information</h4>
        </div>
        <div className="space-y-5">
          <dl className=" flex  items-center">
            <dt className="text-gray-600 w-[150px] text-sm  dark:text-white">
              User Name
            </dt>
            <dd className="text-sm dark:text-gray-400">{name}</dd>
          </dl>
          <dl className=" flex  items-center">
            <dt className="text-gray-600 w-[150px] text-sm dark:text-white">
              Email Address
            </dt>
            <dd className="text-sm dark:text-gray-400">{email}</dd>
          </dl>
          <dl className=" flex  items-center">
            <dt className="text-gray-600 w-[150px] text-sm dark:text-white">
              Role
            </dt>
            <dd className="text-sm dark:text-gray-400 capitalize">{role}</dd>
          </dl>
        </div>
      </div>
      <div className="flex item-center gap-3">
        <Link
          href={`/dashboard/user/edit/${id}`}
          type="button"
          className=" flex gap-2 text-nowrap items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium border borer-[#E4E4E7] hover:bg-gray-100 hover:text-blue-600  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiOutlinePencilAlt /> Edit User
        </Link>
        <div>
          <span className="text-xs mb-2">Registered at</span>
          <p className="text-base font-semibold ">
            {formattedDate(created_at)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserDetailSection;
