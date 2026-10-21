"use client";
import { useRouter } from "next/navigation";
import { register as accountRegister } from "../../../services/auth";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const handleRegister = async (data) => {
    try {
      const res = await accountRegister(data);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Registration failed");
      }

      toast.success("Register Successfully");
      reset();
      router.push("/");
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred during registration");
    }
  };

  return {
    handleRegister,
    handleSubmit,
    register,
    isSubmitting,
  };
};

export default useRegister;
