"use client";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useEditService } from "../hooks/useEditService";

const ServiceEditForm = () => {
  const {
    data,
    register,
    handleSubmit,
    update,
    isSubmitting,
    isLoading,
    errors,
    router,
  } = useEditService();

  if (isLoading) return null;

  return (
    <div className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Edit Service</h1>
      <p className="mb-10 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(update)}>
        <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-x-5 gap-y-3">
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="title"
                className={`block mb-2 text-sm font-medium ${
                  errors.title ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Service Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={data?.data?.title}
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
              <label
                htmlFor="description"
                className={`block mb-2 text-sm font-medium ${
                  errors.description ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                defaultValue={data?.data?.description}
                {...register("description", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.type === "required" &&
                    "Description is required"}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-full">
            <div className="flex items-center mb-4">
              <input
                {...register("is_publish")}
                id="is_publish"
                type="checkbox"
                defaultChecked={data?.data?.is_publish}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="is_publish"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Make it publish
              </label>
            </div>
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
                {...register("back_to_service_list")}
                id="back-to-service-list"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="back-to-service-list"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Back to Service List after saving
              </label>
            </div>

            <button
              type="button"
              onClick={() => router.back()}
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-blue-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Update Service</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceEditForm;
