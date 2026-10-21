"use client";

import { uploadAttachment } from "@/services/attachment";
import { caseApiUrl } from "@/services/case";
import { uploadRequestFile } from "@/services/tracking";
import {
  FileWarning,
  Loader,
  Loader2,
  Paperclip,
  TriangleAlert,
  UploadCloud,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const RequestFileSection = () => {
  const { mutate } = useSWRConfig();
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadAttachment = async (event) => {
    setIsLoading(true);
    const toastId = toast.loading("Uploading .....");
    try {
      const files = event.target.files;

      if (!files.length) return;

      const formData = new FormData();
      formData.append("token", token);
      for (let file of files) {
        formData.append("files[]", file);
      }
      const res = await uploadRequestFile(formData);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message);
      toast.success("File uploaded", { id: toastId });
    } catch (err) {
      toast.error(err.message, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className=" w-full md:w-1/2 lg:w-[600px] mx-auto min-h-svh px-5 md:px-0">
        <Link href={process.env.NEXT_PUBLIC_MAIN_WEB_LINK} className=" block py-5">
          <img src="/logo.png" className=" h-14" alt="" />
        </Link>
        <p className=" mb-5">
          We are pleased to extend a warm welcome to MMPivot! Kindly submit your
          Upload Request as soon as possible.
        </p>

        <div className=" mb-2">
          <label
            htmlFor={`request-file-upload`}
            className=" duration-200 active:scale-95 text-blue-600 bg-blue-50 border border-blue-300 h-44  px-2 gap-1 flex flex-col justify-center items-center rounded-xl"
          >
            {isLoading ? (
              <Loader2 className="  size-16 stroke-1 animate-spin " />
            ) : (
              <UploadCloud className="  size-16 stroke-1" />
            )}
            {isLoading ? (
              <span>Uploading ...</span>
            ) : (
              <span>Upload Requested Files</span>
            )}
          </label>
          <input
            type="file"
            className=" hidden"
            multiple
            id={`request-file-upload`}
            onChange={handleUploadAttachment}
          />
        </div>
        <div className=" rounded-lg flex items-center gap-3 mb-5 w-full lg:w-3/4">
          <TriangleAlert className=" text-gray-500 size-10 stroke-1" />
          <p className=" text-gray-600 text-xs ">
            The link will expire in 3 hours. If it expires before submission, we
            will reach out to you via phone. Thank you!
          </p>
        </div>
        <p>
          We at M M Pivot sincerely apologize for any inconvenience that may
          have occurred during the testing period. We appreciate your patience
          and understanding as we work to improve our services. Thank you for
          your continued support.
        </p>
      </section>
    </>
  );
};

export default RequestFileSection;
