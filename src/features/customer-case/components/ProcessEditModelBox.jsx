"use client";

import { useEffect } from "react";
import ButtonSpinner from "@/components/ButtonSpinner";
import { caseApiUrl } from "@/services/case";
import { storeProcess, updateProcess } from "@/services/process";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ProcessEditModelBox = ({ open, setOpen, editProcess }) => {
  const { id } = useParams();
  const { mutate } = useSWRConfig();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (editProcess) {
      setValue("title", editProcess.title || "");
      setValue("note", editProcess.note || "");
      setValue("notice", editProcess.notice || "");
      setValue("show_note", !!editProcess.show_note);
      setValue("show_notice", !!editProcess.show_notice);
    }
  }, [editProcess, setValue]);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.title,
        note: data.note,
        notice: data.notice,
        show_note: data.show_note || false,
        show_notice: data.show_notice || false,
        customer_case_id: id,
      };

      const res = await updateProcess(payload, editProcess.id);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message);

      mutate(`${caseApiUrl}/${id}`);
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`fixed z-40 w-full h-screen bg-gray-950/35 top-0 left-0 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed z-50 top-0 right-0 h-screen w-5/12 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <h1 className="text-xl font-bold mb-3">Edit Process Detail</h1>

          <div className="grid gap-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className={`block mb-2 text-sm font-medium ${
                  errors.title ? "text-red-500" : "text-gray-900"
                }`}
              >
                Process Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
                className={`w-full p-2.5 text-sm rounded-lg border bg-gray-50 ${
                  errors.title
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  Service Title is required
                </p>
              )}
            </div>

            {/* Note */}
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="edit_show_note"
                  {...register("show_note")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="edit_show_note"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Show Process Note
                </label>
              </div>
              <textarea
                rows={10}
                {...register("note")}
                className={`w-full p-2.5 text-sm rounded-lg border bg-gray-50 ${
                  errors.note
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                }`}
              />
              {errors.note && (
                <p className="mt-1 text-sm text-red-500">
                  Description is required
                </p>
              )}
            </div>

            {/* Notice */}
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="edit_show_notice"
                  {...register("show_notice")}
                  className="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500"
                />
                <label
                  htmlFor="edit_show_notice"
                  className="ml-2 text-sm font-medium text-red-500"
                >
                  Show Process Notice
                </label>
              </div>
              <textarea
                rows={10}
                {...register("notice")}
                className={`w-full p-2.5 text-sm rounded-lg border bg-gray-50 ${
                  errors.notice
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                }`}
              />
              {errors.notice && (
                <p className="mt-1 text-sm text-red-500">
                  Description is required
                </p>
              )}
            </div>

            {/* Confirmation Checkboxes */}
            <div>
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id="edit_all_correct"
                  {...register("edit_all_correct", { required: true })}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="edit_all_correct"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Make sure all fields are correct
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="close_process_edit_modal"
                  {...register("close_process_edit_modal")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="close_process_edit_modal"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Close Process Create Modal
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-80"
                >
                  <span>Update Process</span>
                  {isSubmitting && <ButtonSpinner />}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProcessEditModelBox;
