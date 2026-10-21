import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import ProfileChangePasswordSection from "../components/ProfileChangePasswordSection";

const PasswordChangePage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageTitle={"Change Your Password"}
        links={[
          {
            title: "User Profile",
            path: "/dashboard/user-profile",
          },
        ]}
      />
      <ProfileChangePasswordSection />
    </DashboardLayout>
  );
};

export default PasswordChangePage;
