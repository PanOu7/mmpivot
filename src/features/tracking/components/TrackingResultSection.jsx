"use client";

import { fetchTracking, trackingApiUrl } from "@/services/tracking";
import { useParams } from "next/navigation";
import useSWR from "swr";
import CustomerCaseDetailCard from "./CustomerCaseDetailCard";
import ProcessList from "./ProcessList";
import TrackingLoader from "./TrackingLoader";
import TrackingNotFound from "./TrackingNotFound";
import Link from "next/link";

const TrackingResultSection = () => {
  const { code } = useParams();
  const { data, isLoading, error } = useSWR(
    `${trackingApiUrl}/?code=${code}`,
    fetchTracking
  );

  if (isLoading) return <TrackingLoader />;

  if (data.status === false) return <TrackingNotFound />;

  console.log(data);
  return (
    <section className=" w-full md:w-1/2 lg:w-[600px] mx-auto min-h-svh px-5 md:px-0">
      <Link
        href={process.env.NEXT_PUBLIC_MAIN_WEB_LINK}
        className=" block py-5"
      >
        <img src="/logo.png" className=" h-14" alt="" />
      </Link>
      <p className=" mb-5">
        Here is the result for the you case based on the tracking code
      </p>
      <div>
        <CustomerCaseDetailCard caseData={data?.data} />
        <ProcessList processes={data?.data?.processes} />
        <div className=" py-10"></div>
      </div>
    </section>
  );
};

export default TrackingResultSection;
