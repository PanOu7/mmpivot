"use client";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useEditCustomer } from "../hooks/useEditCustomer";

const CustomerEditForm = () => {
  const {
    data,
    register,
    handleSubmit,
    update,
    isSubmitting,
    isLoading,
    errors,
    router,
  } = useEditCustomer();
  if (isLoading) return null;

  return (
    <div className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Edit Customer</h1>
      <p className="mb-10 text-gray-500">
        Update the customer information below.
      </p>
      <form onSubmit={handleSubmit(update)}>
        <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-x-5 gap-y-3">
          <div className="col-span-2">
            <div className="mb-2">
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                defaultValue={data?.data?.name}
                className={`bg-gray-50 border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  Customer Name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="company_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.company_name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="company_name"
                type="text"
                {...register("company_name", { required: true })}
                defaultValue={data?.data?.company_name}
                className={`bg-gray-50 border ${
                  errors.company_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.company_name && (
                <p className="text-red-500 text-sm mt-1">
                  Company Name is required
                </p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="position"
                className={`block mb-2 text-sm font-medium ${
                  errors.position ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Position <span className="text-red-500">*</span>
              </label>
              <input
                id="position"
                type="text"
                {...register("position", { required: true })}
                defaultValue={data?.data?.position}
                className={`bg-gray-50 border ${
                  errors.position
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.position && (
                <p className="text-red-500 text-sm mt-1">
                  Position is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium ${
                  errors.email ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Contact Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                defaultValue={data?.data?.email}
                className={`bg-gray-50 border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Contact Email is required
                </p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-2">
              <label
                htmlFor="phone"
                className={`block mb-2 text-sm font-medium ${
                  errors.phone ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone", { required: true })}
                defaultValue={data?.data?.phone}

                className={`bg-gray-50 border ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  Contact Phone is required
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
                {...register("back_to_customer_list")}
                id="back-to-Customer-list"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="back-to-Customer-list"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Back to Customer List after saving
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
              <span>Update Customer</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerEditForm;
