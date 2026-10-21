import React from "react";

const TrackingLoader = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-[600px] mx-auto min-h-svh px-5 md:px-0 animate-pulse">
      <div className="py-5" />
      {/* Header */}
      <div className="grid grid-cols-4 gap-5 mb-10">
        <div className="col-span-full">
          <div className="h-8 w-40 bg-gray-200 rounded mb-2" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
        {/* Title + Description */}
        <div className="col-span-full">
          <div className="h-5 w-56 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-72 bg-gray-100 rounded" />
        </div>
        {/* Start Date */}
        <div className="col-span-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="space-y-1">
            <div className="h-3 w-16 bg-gray-100 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        {/* End Date */}
        <div className="col-span-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="space-y-1">
            <div className="h-3 w-16 bg-gray-100 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      {/* Process List */}
      <div>
        <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
        {/* Repeated Item Skeleton */}
        <div className="flex flex-col gap-4">
          {/* Item */}
          <div className="grid grid-cols-10 gap-3">
            <div className="col-span-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" />
            </div>
            <div className="col-span-9 space-y-2">
              <div className="h-4 w-48 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-1/2 bg-gray-100 rounded" />
            </div>
          </div>
          {/* Repeat 3 more times */}
          <div className="grid grid-cols-10 gap-3">
            <div className="col-span-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" />
            </div>
            <div className="col-span-9 space-y-2">
              <div className="h-4 w-44 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-2/3 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-10 gap-3">
            <div className="col-span-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" />
            </div>
            <div className="col-span-9 space-y-2">
              <div className="h-4 w-56 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-1/4 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-10 gap-3">
            <div className="col-span-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" />
            </div>
            <div className="col-span-9 space-y-2">
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-100 rounded" />
              <div className="h-3 w-1/3 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10" />
    </div>
  );
};

export default TrackingLoader;
