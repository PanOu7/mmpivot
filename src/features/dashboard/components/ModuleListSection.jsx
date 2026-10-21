"use client";
import CustomerCaseCountBadge from "@/features/customer-case/components/CustomerCaseCountBadge";
import ModuleButton from "./ModuleButton";
import {
  Box,
  CoinsIcon,
  FilePlus,
  Files,
  LockIcon,
  Text,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import useAccountStore from "@/store/useAccountStore";

const ModuleListSection = () => {
  const { account } = useAccountStore();
  const modules = [
    {
      title: "Main Modules",
      lists: [
        {
          name: "Manage Services",
          icon: <Box className="size-7" />,
          url: "/dashboard/service",
          accept: [1, 2],
        },
        {
          name: "Manage Customers",
          icon: <CoinsIcon className="size-7" />,
          url: "/dashboard/customer",
          accept: [1, 2],
        },
      ],
    },
    {
      title: "Customer Case",
      lists: [
        {
          name: "Create New Case",
          icon: <FilePlus className="size-7" />,
          url: "/dashboard/customer-case/create",
          accept: [1, 2],
        },
        {
          name: "Manage Customer Cases",
          icon: <Files className="size-7" />,
          url: "/dashboard/customer-case",
          count: <CustomerCaseCountBadge />,
          accept: [1, 2],
        },
      ],
    },
    {
      title: "User Module",
      lists: [
        {
          name: "Create New User",
          icon: <UserPlus className="size-7" />,
          url: "/dashboard/user/create",
          accept: [1],
        },
        {
          name: "Manage Users",
          icon: <Users className="size-7" />,
          url: "/dashboard/user",
          accept: [1],
        },
      ],
    },
    {
      title: "Account Modules",
      lists: [
        {
          name: "Your Profile",
          icon: <User className="size-7" />,
          url: "/dashboard/user-profile",
          accept: [1, 2],
        },
        {
          name: "Change Password",
          icon: <LockIcon className="size-7" />,
          url: "/dashboard/user-profile/change-password",
          accept: [1, 2],
        },
        {
          name: "Change Name",
          icon: <Text className="size-7" />,
          url: "/dashboard/user-profile/change-name",
          accept: [1, 2],
        },
      ],
    },
  ];

  return (
    <section>
      {modules.map((module) => (
        <div key={module.title} className="mb-5">
          {module.lists.some((item) =>
            item.accept.includes(Number(account.role))
          ) && <h1 className="mb-3 text-xl font-bold">{module.title}</h1>}

          <div className="grid grid-cols-2 gap-5 mb-10  md:grid-cols-3 xl:grid-cols-4">
            {module.lists.map(({ name, icon, url, count, accept }, i) =>
              accept.includes(Number(account.role)) ? (
                <div key={i} className="col-span-1 row-span-1 ">
                  <ModuleButton
                    name={name}
                    icon={icon}
                    url={url}
                    count={count}
                  />
                </div>
              ) : (
                <div key={i}></div>
              )
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ModuleListSection;
