import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import ProfileChangeImageSection from "../components/ProfileChangeImageSection";

const ProfileChangeImagePage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageTitle={"Change Your Image"}
        links={[
          {
            title: "User Profile",
            path: "/dashboard/user-profile",
          },
        ]}
      />
      <ProfileChangeImageSection />
    </DashboardLayout>
  );
};

export default ProfileChangeImagePage;
