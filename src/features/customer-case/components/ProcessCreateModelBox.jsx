"use client";

import ButtonSpinner from "@/components/ButtonSpinner";
import { caseApiUrl } from "@/services/case";
import { storeProcess } from "@/services/process";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ProcessCreateModelBox = ({ open, setOpen }) => {
  const { id } = useParams();
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  const { mutate } = useSWRConfig();

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.title,
        note: data.note,
        notice: data.notice,
        show_note: data.show_note ?? false,
        show_notice: data.show_notice ?? false,
        customer_case_id: id,
      };

      const res = await storeProcess(payload);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      data.close_process_create_modal && setOpen(false);
      reset();
      mutate(`${caseApiUrl}/${id}`);
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={` duration-200 fixed z-40 w-full h-screen bg-gray-950/35 top-0 left-0 ${
          open
            ? " opacity-100 pointer-events-auto"
            : " opacity-0 pointer-events-none"
        } `}
      ></div>
      <div
        className={`w-5/12 duration-300 bg-white h-screen fixed z-50 top-0 right-0 ${
          open ? "translate-x-0  " : " translate-x-full "
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className=" p-5">
          <h1 className="text-xl font-bold mb-3">Create new process</h1>
          <div className="w-full grid grid-cols-1 gap-x-5 gap-y-3 ">
            <div className="col-span-1">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className={`block mb-2 text-sm font-medium ${
                    errors.title ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Process Title <span className=" text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: true,
                  })}
                  className={`bg-gray-50 border ${
                    errors.title
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.type === "required" &&
                      "Service Title is required"}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex items-center mb-2">
                  <input
                    {...register("show_note")}
                    id="show_note"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="show_note"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Show Process Note
                  </label>
                </div>
                <textarea
                  type="text"
                  rows={10}
                  {...register("note")}
                  className={`bg-gray-50 border ${
                    errors.note
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                ></textarea>
                {errors.note && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.note.type === "required" &&
                      "Description name is required"}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex items-center mb-2">
                  <input
                    {...register("show_notice")}
                    id="show_notice"
                    type="checkbox"
                    className="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="show_notice"
                    className="ml-2 text-sm font-medium text-red-500"
                  >
                    Show Process Notice
                  </label>
                </div>
                <textarea
                  type="text"
                  rows={10}
                  {...register("notice")}
                  className={`bg-gray-50 border ${
                    errors.notice
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                ></textarea>
                {errors.notice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.notice.type === "required" &&
                      "Description name is required"}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <div className="flex items-center mb-4">
                <input
                  {...register("all_correct")}
                  required
                  id="all-correct"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="all-correct"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Make sure all fields are correct
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  {...register("close_process_create_modal")}
                  id="back-to-Service-list"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="back-to-Service-list"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Close Process Create Modal
                </label>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
              >
                <span>Save Process</span>
                {isSubmitting && <ButtonSpinner />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProcessCreateModelBox;
