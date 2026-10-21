"use client";
import React from "react";
import ProcessCard from "./ProcessCard";
import ProcessEmptyStage from "./ProcessEmptyStage";

const ProcessList = ({ processes }) => {
  console.log(processes);
  return (
    <div>
      <h1 className=" text-gray-700 font-bold mb-3">Process List</h1>
      <div className=" flex flex-col gap-3">
        <ProcessEmptyStage />
        {processes.map((process, index) => (
          <ProcessCard key={process.id} process={process} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProcessList;
