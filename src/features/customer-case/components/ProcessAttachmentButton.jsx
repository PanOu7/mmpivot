"use client";
import { destroyAttachment } from "@/services/attachment";
import { caseApiUrl } from "@/services/case";
import { X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ProcessAttachmentButton = ({ attachmentData }) => {
  const { id } = useParams();
  const { mutate } = useSWRConfig();
  const handleDeleteAttachment = async () => {
    if (!confirm("Are you sure you want to delete this Attachment?")) return;

    try {
      const res = await destroyAttachment(attachmentData.id);
      toast.success("Delete successful");
      mutate(`${caseApiUrl}/${id}`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className=" border border-gray-600 rounded text-xs px-2 py-1 gap-2 flex flex-row justify-center items-center">
      <Link href={attachmentData?.url} download={attachmentData?.file_name}>
        <span className="">{attachmentData?.file_name}</span>
      </Link>
      <button onClick={() => handleDeleteAttachment(attachmentData?.id)}>
        <X
          size={13}
          onClick={() => handleDeleteAttachment(attachmentData?.id)}
          className=" hidden group-hover:block"
        />
      </button>
    </div>
  );
};

export default ProcessAttachmentButton;
