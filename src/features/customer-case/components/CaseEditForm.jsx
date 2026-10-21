"use client";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useEditCase } from "../hooks/useEditCase";

const CaseEditForm = () => {
  const {
    data,
    register,
    handleSubmit,
    update,
    isSubmitting,
    isLoading,
    errors,
    router,
    customers,
    services,
    customersLoading,
    servicesLoading,
  } = useEditCase();
  const statusOptions = [
    { id: "not-started", label: "Not Started", value: 1 },
    { id: "processing", label: "Processing", value: 2 },
    { id: "finished", label: "Finished", value: 3 },
    { id: "terminated", label: "Terminated", value: 4 },
  ];
  if (isLoading || customersLoading || servicesLoading)
    return <p>Loading ...</p>;

  return (
    <div className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Edit Case</h1>
      <p className="mb-10 text-gray-500">Update the case information below.</p>
      <form onSubmit={handleSubmit(update)}>
        <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-x-5 gap-y-3">
          <div className="col-span-2">
            <div className="mb-2">
              <label
                htmlFor="title"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Case Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                {...register("title", { required: true })}
                defaultValue={data?.data?.title}
                className={`bg-gray-50 border ${
                  errors.title
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  Case Title is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="customer_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.customer ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer <span className=" text-red-500">*</span>
              </label>
              <select
                {...register("customer_id", {
                  required: true,
                })}
                defaultValue={data?.data?.customer_id}
                className={`bg-gray-50 border ${
                  errors.customer_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option value="">Select customer</option>
                {customers?.data?.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name} - {customer.company_name}
                  </option>
                ))}
              </select>

              {errors.customer_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customer_id === "required" && "Customer is required"}
                </p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="service_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.service_id ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Service <span className=" text-red-500">*</span>
              </label>
              <select
                type="text"
                {...register("service_id", {
                  required: true,
                })}
                defaultValue={data?.data?.service_id}
                className={`bg-gray-50 border ${
                  errors.service_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option value="">Select Service</option>
                {services?.data?.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>

              {errors.service_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service_id === "required" && "Customer is required"}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="start_date"
                className={`block mb-2 text-sm font-medium ${
                  errors.start_date ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Start Date
              </label>
              <input
                id="start_date"
                type="date"
                {...register("start_date")}
                defaultValue={data?.data?.start_date}
                className={`bg-gray-50 border ${
                  errors.start_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.start_date && (
                <p className="text-red-500 text-sm mt-1">
                  Start Date is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="end_date"
                className={`block mb-2 text-sm font-medium ${
                  errors.end_date ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                End Date
              </label>
              <input
                id="end_date"
                type="date"
                {...register("end_date")}
                defaultValue={data?.data?.end_date}
                className={`bg-gray-50 border ${
                  errors.end_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.end_date && (
                <p className="text-red-500 text-sm mt-1">
                  End Date is required
                </p>
              )}
            </div>
          </div>

          <div className="col-span-2"></div>
          <div className="col-span-2">
            <div className="mb-2">
              <label
                htmlFor="description"
                className={`block mb-2 text-sm font-medium ${
                  errors.description ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Case Description <span className=" text-red-500">*</span>
              </label>
              <textarea
                type="text"
                rows={5}
                {...register("description", {
                  required: true,
                })}
                defaultValue={data?.data?.description}
                className={`bg-gray-50 border ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description === "required" &&
                    "Case Description is required"}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Current Status <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-5 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5">
              {statusOptions.map((option) => (
                <div
                  key={option.id}
                  className="inline-flex items-center rounded-sm dark:border-gray-700"
                >
                  <input
                    id={`status-${option.id}`}
                    type="radio"
                    value={option.value}
                    {...register("status", { required: true })}
                    defaultChecked={data?.data?.status == option.value}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`status-${option.id}`}
                    className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">Status is required</p>
            )}
          </div>

          <div className="col-span-2"></div>

          <div className="col-span-full mt-5">
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
                {...register("back_to_case_list")}
                id="back-to-Case-list"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="back-to-Case-list"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Back to Case List after saving
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
              <span>Update Case</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CaseEditForm;
