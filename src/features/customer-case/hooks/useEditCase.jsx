"use client";

import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import { fetchCase, updateCase, caseApiUrl } from "../../../services/case";
import { toast } from "sonner";
import { customerApiUrl, fetchCustomer } from "../../../services/customer";
import { serviceApiUrl, fetchService } from "../../../services/service";
import { useEffect } from "react";

export const useEditCase = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { mutate } = useSWRConfig();

  const { data, isLoading, error } = useSWR(
    id ? `${caseApiUrl}/${id}` : null,
    fetchCase
  );
  const { data: customers, loading: customersLoading } = useSWR(
    `${customerApiUrl}?limit=100`,
    fetchCustomer
  );
  const { data: services, loading: servicesLoading } = useSWR(
    `${serviceApiUrl}?limit=100`,
    fetchService
  );

  const update = async (payload) => {
    console.log(payload)
    try {
      const res = await updateCase(
        {
          title: payload.title,
          description: payload.description,
          service_id: payload.service_id,
          customer_id: payload.customer_id,
          start_date: payload.start_date,
          end_date: payload.end_date,
          status: Number(payload.status),
        },
        id
      );
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      mutate(`${caseApiUrl}/${id}`);
      toast.success("Case updated successfully");

      if (payload.back_to_case_list) {
        router.push("/dashboard/customer-case");
      } else {
        router.push(`/dashboard/customer-case/detail/${json.data.id}`);
      }
    } catch (err) {
      toast.error(err.message || "Failed to update case");
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
    customers,
    customersLoading,
    services,
    servicesLoading,
  };
};
