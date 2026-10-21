"use client";

import { SignJWT } from "jose";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const ProcessFileRequestBtn = ({ processData }) => {
  const handleClick = async () => {
    const secret = new TextEncoder().encode("asdffdsa");
    const payload = {
      process_id: processData.id,
      process_title: processData.title,
      customer_case_id: processData.customer_case_id,
    };

    const jwtToken = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(`${process.env.NEXT_PUBLIC_FILE_WAITING_TIME}h`)
      .sign(secret);

    const link = `${process.env.NEXT_PUBLIC_WEB_LINK}/request-file/${jwtToken}`;
    await navigator.clipboard.writeText(link);
    toast.success("File request link copied to clipboard");
  };

  return (
    <button
      onClick={handleClick}
      className="duration-200 active:scale-95 text-gray-600 border border-gray-600 h-6 px-2 text-xs gap-1 flex justify-center items-center rounded-full"
    >
      <Copy className="  size-3" />
      File Request
    </button>
  );
};

export default ProcessFileRequestBtn;
