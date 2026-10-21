"use client";

import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import {
  fetchCustomer,
  updateCustomer,
  customerApiUrl,
} from "../../../services/customer";
import { toast } from "sonner";

export const useEditCustomer = () => {
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
    id ? `${customerApiUrl}/${id}` : null,
    fetchCustomer
  );

  const update = async (formData) => {
    try {
      const res = await updateCustomer(
        {
          name: formData.name,
          company_name: formData.company_name,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
        },
        id
      );
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      mutate(`${customerApiUrl}/${id}`);
      toast.success("Customer updated successfully");

      if (formData.back_to_customer_list) {
        router.push("/dashboard/customer");
      }
    } catch (err) {
      toast.error(err.message || "Failed to update customer");
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
