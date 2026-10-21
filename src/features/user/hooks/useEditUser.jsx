"use client";

import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import { fetchUser, updateUser, userApiUrl } from "../../../services/user";
import { toast } from "sonner";

export const useEditUser = () => {
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
    id ? `${userApiUrl}/${id}` : null,
    fetchUser
  );

  const update = async (payload) => {
    try {
      const res = await updateUser(
        {
          name: payload.name,
          email: payload.email,
          role: payload.role,
          password: payload.password,
        },
        id
      );
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      mutate(`${userApiUrl}/${id}`);
      toast.success("User updated successfully");

      if (payload.back_to_user_list) {
        router.push("/dashboard/user");
      }
    } catch (err) {
      toast.error(err.message || "Failed to update user");
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
