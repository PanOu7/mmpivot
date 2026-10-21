"use client";

import { HiPlus } from "react-icons/hi2";
import ProcessEmptyStage from "./ProcessEmptyStage";
import ProcessList from "./ProcessList";

const ProcessTrackingSection = ({ processes }) => {
  return (
    <div className=" col-span-1 md:col-span-2 ">
      {processes.length ? <ProcessList processes={processes} /> : <ProcessEmptyStage />}
    </div>
  );
};

export default ProcessTrackingSection;
