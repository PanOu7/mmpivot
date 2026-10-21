"use client";

import { uploadAttachment } from "@/services/attachment";
import { caseApiUrl } from "@/services/case";
import { Paperclip } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ProcessAttachmentUploadButton = ({ processData }) => {
  const { mutate } = useSWRConfig();
  const { id } = useParams();
  const handleUploadAttachment = async (event) => {
    const toastId = toast.loading("Uploading .....");
    try {
      const files = event.target.files;

      if (!files.length) return;

      const formData = new FormData();
      formData.append("process_id", processData?.id);
      for (let file of files) {
        formData.append("urls[]", file);
      }

      const res = await uploadAttachment(formData);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message);
      toast.success("Attachment uploaded", { id: toastId });
    } catch (err) {
      toast.error(err.message, { id: toastId });
    } finally {
      mutate(`${caseApiUrl}/${id}`);
    }
  };
  return (
    <>
      <label
        htmlFor={`attachment-upload-btn-${processData?.id}`}
        className=" duration-200 active:scale-95 text-gray-600 border border-gray-600 h-6  px-2  text-xs gap-1 flex justify-center items-center rounded-full"
      >
        <Paperclip className="  size-3" /> Attachment
      </label>
      <input
        type="file"
        className=" hidden"
        multiple
        id={`attachment-upload-btn-${processData?.id}`}
        onChange={handleUploadAttachment}
      />
    </>
  );
};

export default ProcessAttachmentUploadButton;
