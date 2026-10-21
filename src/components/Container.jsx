"use client";

import { cn } from "@/lib/utils";

const Container = ({ children, className, ...props }) => {
  return (
    <div className={cn(" w-full md:w-[720px]  lg:w-[1000px] mx-auto ", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
