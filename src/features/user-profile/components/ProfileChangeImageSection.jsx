"use client"


import ButtonSpinner from "../../../components/ButtonSpinner";
import useChangeImage from "../hooks/useChangeImage";
import { useRouter } from "next/navigation";
import useAccountStore from "@/store/useAccountStore";
import ProfileUploadInputImage from "./ProfileUploadInputImage";

const ProfileChangeImageSection = () => {
   const galleryApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user-profile/change-profile-image`;

  const navigate = useRouter();

  const { handleChangeImage, register, handleSubmit, isSubmitting, errors, reset, setValue } =
    useChangeImage();

  const {account} = useAccountStore();

  const handleCancel = () => {
    navigate("/dashboard/user-profile");
  };

  return (
    <section className="rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-3">Change User Image</h1>
      <p className="mb-10 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleChangeImage)}>
        <div className=" grid grid-cols-3">
          <div className=" col-span-1">
            <div className="mb-5">
              <label
                htmlFor="profile_image"
                className={`block mb-2 text-sm font-medium ${
                  errors.profile_image ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Change Image <span className=" text-red-500">*</span>
              </label>

              <ProfileUploadInputImage
                inputName="profile_image"
                register={register}
                setValue={setValue}
                required={true}
                uploadUrl={galleryApiUrl}
                defaultValue={account.profile_image}
                errors={errors}
              />

              {errors.profile_image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.profile_image.type === "required" &&
                    "Profile image is required"}
                </p>
              )}
            </div>
            <div className=" col-span-full">
              <div className="flex items-center mb-4">
                <input
                  {...register("all_correct")}
                  required
                  id="all-correct"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="all-correct"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Make sure all field are correct
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-blue-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Change Image</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileChangeImageSection;
