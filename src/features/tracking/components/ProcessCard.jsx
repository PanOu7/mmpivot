"use client";

import ProcessAttachmentButton from "@/features/customer-case/components/ProcessAttachmentButton";
import Link from "next/link";

const ProcessCard = ({ process, index }) => {
  return (
    <div className=" grid grid-cols-10 gap-3  border border-transparent rounded-lg">
      <div className=" col-span-1 flex items-center">
        <div className=" border border-blue-400 font-bold w-full rounded-full aspect-square flex justify-center items-center">
          <p> {index + 1}</p>
        </div>
      </div>
      <div className=" col-span-9  flex items-start justify-center flex-col">
        <h5 className=" font-semibold mb-1 last:mb-0 ">
          {process.title}
        </h5>
      </div>
      <div className=" col-span-1  flex justify-center">
        <div className=" border-l border-blue-200 border-dashed "></div>
      </div>
      <div className=" col-span-9   pb-3 min-h-10">
        <div className=" text-gray-600 text-sm mb-2 flex gap-2 items-center justify-start ">
          {process?.show_note && (
            <div
              className=" whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: process?.note?.replace(
                  /(https?:\/\/[^\s]+)/g,
                  (url) =>
                    `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${
                      url.length > 30 ? url.substring(0, 30) + " ....." : url
                    }</a>`
                ),
              }}
            />
          )}
        </div>
        <div className=" text-red-500 text-sm mb-2 last:mb-0 flex gap-2 items-center ">
          {process.show_notice && (
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: process?.notice?.replace(
                  /(https?:\/\/[^\s]+)/g,
                  (url) =>
                    `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${
                      url.length > 30 ? url.substring(0, 30) + " ....." : url
                    }</a>`
                ),
              }}
            />
          )}
        </div>
        <div className=" flex gap-2 flex-wrap ">
          {process?.attachments?.map((el) => (
            <div
              key={el.id}
              className=" border border-gray-600 rounded text-xs px-2 py-1 gap-2 flex flex-row justify-center items-center"
            >
              <Link href={el?.url} download={el?.file_name}>
                <span className="">{el?.file_name}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className=" hidden underline"></div>
      </div>
    </div>
  );
};

export default ProcessCard;
