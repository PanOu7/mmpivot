"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import UserDetailSection from "../components/UserDetailSection";

const UserDetailPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageTitle={"User Detail"}
        links={[{ title: "User Module", path: "/dashboard/user" }]}
      />
      <UserDetailSection />
    </DashboardLayout>
  );
};

export default UserDetailPage;
