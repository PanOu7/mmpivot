"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import UserSection from "../components/UserSection";

const UserListPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageTitle={"User Module"} />
      <UserSection />
    </DashboardLayout>
  );
};

export default UserListPage;
