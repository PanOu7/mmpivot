"use client";
import BreadCrumb from "@/components/BreadCrumb";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import UserProfileSection from "../components/UserProfileSection";

const UserProfilePage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageTitle={"User Profile"} />
      <UserProfileSection />
    </DashboardLayout>
  );
};

export default UserProfilePage;
