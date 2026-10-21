"use client";
import Link from "next/link";

const ModuleButton = ({ name, icon, url, count = null }) => {
  return (
    <Link
      href={url}
      className="flex h-full gap-3 items-center text-blue-900 bg-blue-50 hover:bg-blue-100 duration-100 active:scale-95  p-5 rounded-lg relative "
    >
      {icon}
      {name}
      {count ? <>{count}</> : <></>}
    </Link>
  );
};

export default ModuleButton;
