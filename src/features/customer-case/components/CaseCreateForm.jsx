"use client";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useCreateCase } from "../hooks/useCreateCase";

const CaseCreateForm = () => {
  const {
    store,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    router,
    customers,
    services,
    customersLoading,
    servicesLoading,
  } = useCreateCase();

  return (
    <div className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Create New Case</h1>
      <p className="mb-10 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(store)}>
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
                type="text"
                {...register("customer_id", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.customer_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option>Choose Customer</option>
                {customersLoading ? (
                  <option>Loading...</option>
                ) : (
                  customers?.data?.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))
                )}
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
                className={`bg-gray-50 border ${
                  errors.service_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option>Choose Service</option>
                {servicesLoading ? (
                  <option>Loading...</option>
                ) : (
                  services?.data?.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))
                )}
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
              <span>Save Case</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CaseCreateForm;
