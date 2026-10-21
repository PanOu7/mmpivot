"use client";
import { toast } from "sonner";
import {
  changePassword,
} from "../../../services/profile";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const useChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const navigate = useRouter();
const handleChangePassword = async (data) => {
    try {
      const res = await changePassword(data);
      const json = await res.json();
  
      if (!res.ok) {
        throw new Error(json.message);
      }
  
      toast.success(json.message);
      reset();
      navigate.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  return {
    handleChangePassword,
    handleSubmit,
    register,
    isSubmitting,
    reset,
    errors,
  };
};

export default useChangePassword;
