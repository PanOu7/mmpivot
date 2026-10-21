"use client";

import { HiPlus } from "react-icons/hi2";
import ProcessCreateModelBox from "./ProcessCreateModelBox";
import { useState } from "react";

const ProcessEmptyStage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" border flex justify-center items-center flex-col py-16">
      <img src={`/tracking-empty-stage.svg`} className=" mb-3" alt="" />
      <div className=" text-center mb-5">
        <h3 className=" font-semibold">Started Real-Time Tracking</h3>
        <p className=" text-gray-400 w-8/12 mx-auto text-sm">
          Build a workflow with live tracking from the beginning.
        </p>
      </div>
      <ProcessCreateModelBox open={open} setOpen={setOpen} />
      <button
        onClick={() => setOpen(true)}
        href="/dashboard/customer-case/create"
        className="text-white h-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
      >
        Add Process
        <HiPlus />
      </button>
    </div>
  );
};

export default ProcessEmptyStage;
