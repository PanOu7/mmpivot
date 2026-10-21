"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { storeCase } from "../../../services/case";
import { toast } from "sonner";
import useSWR from "swr";
import { customerApiUrl, fetchCustomer } from "../../../services/customer";
import { serviceApiUrl, fetchService } from "../../../services/service";
import { join } from "lodash";

export const useCreateCase = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  const { data: customers, loading: customersLoading } = useSWR(
    `${customerApiUrl}?limit=100`,
    fetchCustomer
  );
  const { data: services, loading: servicesLoading } = useSWR(
    `${serviceApiUrl}?limit=100`,
    fetchService
  );

  const store = async (formData) => {
    try {
      const res = await storeCase({
        title: formData.title,
        description: formData.description,
        service_id: formData.service_id,
        customer_id: formData.customer_id,
        start_date: formData.start_date,
        end_date: formData.end_date,
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      toast.success("Case created successfully");
      reset();

      if (formData.back_to_case_list) {
        router.push("/dashboard/customer-case");
      } else {
        router.push(`/dashboard/customer-case/detail/${json.data.id}`);
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
    customers,
    customersLoading,
    services,
    servicesLoading,
  };
};
