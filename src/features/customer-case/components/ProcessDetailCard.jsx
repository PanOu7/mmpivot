"use client";
import { Edit, SquareCheck, Trash2 } from "lucide-react";
import ProcessAttachmentButton from "./ProcessAttachmentButton";
import ProcessAttachmentUploadButton from "./ProcessAttachmentUploadButton";
import { caseApiUrl } from "@/services/case";
import { useSWRConfig } from "swr";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { destroyProcess } from "@/services/process";
import ProcessFileRequestBtn from "./ProcessFileRequestBtn";

const ProcessDetailCard = ({
  processData,
  index,
  open,
  setOpen,
  setEditProcess,
}) => {
  const { mutate } = useSWRConfig();
  const { id } = useParams();

  const handleDeleteProcess = async (processId) => {
    if (!confirm("Are you sure you want to delete this process?")) return;

    try {
      const res = await destroyProcess(processId);
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success(json.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      mutate(`${caseApiUrl}/${id}`);
    }
  };

  return (
    <div className=" grid grid-cols-12 gap-x-3 gap-y-2 group border border-transparent hover:bg-gray-50 hover:border-gray-200  hover:py-3 px-3 rounded-lg">
      <div className=" col-span-1 flex items-center">
        <div className=" border border-blue-400 font-bold w-full rounded-full aspect-square flex justify-center items-center">
          <p> {index + 1}</p>
        </div>
      </div>
      <div className=" col-span-11  flex items-start justify-center flex-col">
        <h5 className=" font-semibold mb-1 last:mb-0 ">
          {processData.title}
        </h5>
        <div className="  group-hover:flex gap-2 hidden">
          <button
            onClick={() => handleDeleteProcess(processData.id)}
            className="duration-200 active:scale-95 text-red-600 border border-red-600 size-6   text-xs gap-1 flex justify-center items-center rounded-full"
          >
            <Trash2 className="  size-3" />
          </button>
          <button
            onClick={() => {
              setOpen(true);
              setEditProcess(processData);
            }}
            className="duration-200 active:scale-95 text-yellow-600 border border-yellow-600 size-6   text-xs gap-1 flex justify-center items-center rounded-full"
          >
            <Edit className="  size-3" />
          </button>
          <ProcessAttachmentUploadButton processData={processData} />
          <ProcessFileRequestBtn processData={processData} />
        </div>
      </div>
      <div className=" col-span-1  flex justify-center">
        <div className=" border-l border-blue-200 border-dashed "></div>
      </div>
      <div className=" col-span-11 -mt-4 group-hover:-mt-0 pb-3 min-h-10">
        <div className=" w-8/12 text-gray-600 text-sm mb-2 flex gap-2 items-center justify-start ">
          {processData.show_note && <SquareCheck className=" size-4 " />}
          <div
            className="whitespace-pre w-full"
            dangerouslySetInnerHTML={{
              __html: processData?.note?.replace(
                /(https?:\/\/[^\s]+)/g,
                (url) =>
                  `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${
                    url.length > 30 ? url.substring(0, 30) + " ....." : url
                  }</a>`
              ),
            }}
          />
        </div>
        <div className=" w-8/12 text-red-500 text-sm mb-2 last:mb-0 flex gap-2 items-center ">
          {processData.show_notice && <SquareCheck className=" size-4" />}
          <div
            className="whitespace-pre"
            dangerouslySetInnerHTML={{
              __html: processData?.notice?.replace(
                /(https?:\/\/[^\s]+)/g,
                (url) =>
                  `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${
                    url.length > 30 ? url.substring(0, 30) + " ....." : url
                  }</a>`
              ),
            }}
          />
        </div>
        <div className=" flex gap-2 flex-wrap ">
          {processData?.attachments?.map((el) => (
            <ProcessAttachmentButton key={el.id} attachmentData={el} />
          ))}
        </div>
        <div className=" hidden underline"></div>
      </div>
    </div>
  );
};

export default ProcessDetailCard;
