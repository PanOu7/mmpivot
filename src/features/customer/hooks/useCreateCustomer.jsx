"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { storeCustomer } from "../../../services/customer";
import { toast } from "sonner";

export const useCreateCustomer = () => {
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
      const res = await storeCustomer({
        name: formData.name,
        company_name: formData.company_name,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      toast.success("Customer created successfully");
      reset();

      if (formData.back_to_customer_list) {
        router.push("/dashboard/customer");
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
