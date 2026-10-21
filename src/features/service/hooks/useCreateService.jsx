"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { storeService } from "../../../services/service";
import { toast } from "sonner";

export const useCreateService = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  const store = async (formData) => {
    try {
      const res = await storeService({
        title: formData.title,
        description: formData.description,
        is_publish: formData.is_publish,
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      toast.success("Service created successfully");
      reset();

      if (formData.back_to_service_list) {
        router.push("/dashboard/service");
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  return {
    store,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    router,
    setValue,
  };
};
