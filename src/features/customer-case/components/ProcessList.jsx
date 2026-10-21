"use client";
import React, { useState } from "react";
import ProcessDetailCard from "./ProcessDetailCard";
import { Plus } from "lucide-react";
import ProcessCreateModelBox from "./ProcessCreateModelBox";
import ProcessEditModelBox from "./ProcessEditModelBox";

const ProcessList = ({ processes }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editProcess, setEditProcess] = useState({});
  return (
    <div className=" flex gap-2 flex-col">
      {processes.map((el, index) => (
        <ProcessDetailCard
          key={el.id}
          index={index}
          processData={el}
          open={openEdit}
          setOpen={setOpenEdit}
          setEditProcess={setEditProcess}
        />
      ))}
      <ProcessCreateModelBox open={open} setOpen={setOpen} />
      <ProcessEditModelBox
        open={openEdit}
        setOpen={setOpenEdit}
        editProcess={editProcess}
      />
      <div
        onClick={() => setOpen(true)}
        className=" sticky bottom-1 bg-white group grid grid-cols-12 gap-x-3 gap-y-2  rounded-lg px-3 py-1"
      >
        <div className=" col-span-1">
          <div className=" duration-200 group-active:scale-95 border border-blue-400 bg-blue-500 text-white font-bold rounded-full aspect-square flex justify-center items-center mx-auto">
            <Plus className=" size-4" />
          </div>
        </div>
        <div className=" col-span-11  flex items-start justify-center flex-col">
          <h5 className=" hover:underline origin-left w-8/12 font-semibold mb-1 last:mb-0 cursor-pointer duration-200 group-active:scale-95">
            Create New Process
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProcessList;
