"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import UserEditForm from "../components/UserEditForm";

const UserEditPage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Edit User"}
          links={[{ title: "User Module", path: "/dashboard/user" }]}
        />
        <UserEditForm />
    </DashboardLayout>
  );
};

export default UserEditPage;
