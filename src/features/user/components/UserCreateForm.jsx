"use client";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useCreateUser } from "../hooks/useCreateUser";

const UserCreateForm = () => {
  const { store, register, handleSubmit, isSubmitting, errors, router } =
    useCreateUser();

  return (
    <div className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Create User</h1>
      <p className="mb-10 text-gray-500">
        Create new user which can be managed efficiently!{" "}
      </p>
      <form onSubmit={handleSubmit(store)}>
        <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-x-5 gap-y-3">
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="username"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                User Name <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                autoComplete="username"
                type="text"
                {...register("name", { required: true })}
                className={`bg-gray-50 border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  User Name is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium ${
                  errors.email ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="text"
                {...register("email", { required: true })}
                className={`bg-gray-50 border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="role"
                className={`block mb-2 text-sm font-medium ${
                  errors.role ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Role <span className="text-red-500">*</span>
              </label>

              <select
                id="role"
                {...register("role", { required: true })}
                className={`bg-gray-50 border ${
                  errors.role
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option value={1}>admin</option>
                <option value={2}>staff</option>
              </select>

              {errors.role && (
                <p className="text-red-500 text-sm mt-1">Role is required</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="new-password"
                className={`block mb-2 text-sm font-medium ${
                  errors.password ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="new-password"
                type="password"
                {...register("password", { required: true })}
                autoComplete="new-password"
                className={`bg-gray-50 border ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
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
                Accept all informations are correct{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                {...register("back_to_user_list")}
                id="back-to-User-list"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="back-to-User-list"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Back to User List after saving
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
              <span>Save User</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserCreateForm;
