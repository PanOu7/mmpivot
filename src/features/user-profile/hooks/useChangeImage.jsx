import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { changeImage } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import { useState } from "react";

const useChangeImage = () => {
  const navigate = useRouter();

  const { account, setAccount } = useAccountStore();

  const handleChangeImage = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);
    try {
      const res = await changeImage(formData);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Profile Image Change failed");
      }
      setAccount(json.user);
      toast.success("Image Changed Successfully");
      navigate.push("/dashboard/user-profile");
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    }
  };

  return {
    handleChangeImage,
  };
};

export default useChangeImage;
