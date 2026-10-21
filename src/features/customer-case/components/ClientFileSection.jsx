"use client";

import { caseApiUrl } from "@/services/case";
import { destroyClientFile } from "@/services/clientFile";
import { groupByProcess } from "@/utils/process";
import { Delete, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ClientFileSection = ({ files }) => {
  const { mutate } = useSWRConfig();
  const { id: customer_case_id } = useParams();
  const groupedFiles = groupByProcess(files);
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this Client File?")) return;

    try {
      const res = await destroyClientFile(id);
      toast.success("Delete successful");
      mutate(`${caseApiUrl}/${customer_case_id}`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className=" border py-3 mb-5">
      <h1 className=" font-bold mb-3 px-3 capitalize">Client Uploaded Files</h1>
      <p className=" px-3 text-sm hidden last:block text-gray-500">
        There is no client files yet !
      </p>
      {groupedFiles.map((group) => (
        <div className=" mb-3 last:mb-0" key={group.process_id}>
          <h2 className=" capitalize font-medium px-3">
            {group.process_id} # {group.process_title ?? "Unknown Process"}
          </h2>
          <div className="grid grid-cols-1 ">
            {group.files.map((file) => (
              <div
                key={file.id}
                className="hover:py-2 border-y border-transparent hover:border-gray-200 group px-3 hover:bg-gray-100  flex justify-between items-center"
              >
                <Link
                  target="_blank"
                  href={file.url}
                  download={file.file_name}
                  className="text-sm truncate text-gray-600 hover:underline"
                >
                  {file.file_name}
                </Link>
                <button
                  onClick={() => handleDelete(file.id)}
                  className=" hidden group-hover:flex duration-200 active:scale-95 text-red-600 border border-red-600 size-6   text-xs gap-1 justify-center items-center rounded-full"
                >
                  <Trash2 className=" size-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientFileSection;
