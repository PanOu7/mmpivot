"use client";

import BreadCrumb from "@/components/BreadCrumb";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import ProfileChangeNameSection from "../components/ProfileChangeNameSection";

const ProfileChangeNamePage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageTitle={"Change Your Name"}
        links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
      />
      <ProfileChangeNameSection />
    </DashboardLayout>
  );
};

export default ProfileChangeNamePage;
