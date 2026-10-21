"use client";

import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import {
  fetchService,
  updateService,
  serviceApiUrl,
} from "../../../services/service";
import { toast } from "sonner";

export const useEditService = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate } = useSWRConfig();

  const { data, isLoading, error } = useSWR(
    id ? `${serviceApiUrl}/${id}` : null,
    fetchService
  );

  const update = async (formData) => {
    try {
      const res = await updateService(
        {
          title: formData.title,
          description: formData.description,
          is_publish: formData.is_publish,
        },
        id
      );
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      mutate(`${serviceApiUrl}/${id}`);
      toast.success("Service updated successfully");

      if (formData.back_to_service_list) {
        router.push("/dashboard/service");
      }
    } catch (err) {
      toast.error(err.message || "Failed to update service");
      console.error(err);
    }
  };

  return {
    update,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isLoading,
    data,
    error,
    router,
  };
};
