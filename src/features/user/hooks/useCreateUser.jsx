"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { storeUser } from "../../../services/user";
import { toast } from "sonner";

export const useCreateUser = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  const store = async (payload) => {
    try {
      const res = await storeUser({
        name: payload.name,
        email: payload.email,
        role: payload.role,
        password: payload.password,
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      toast.success("User created successfully");
      reset();

      if (payload.back_to_user_list) {
        router.push("/dashboard/user");
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
