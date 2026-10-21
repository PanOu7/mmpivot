"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import UserCreateForm from "../components/UserCreateForm";

const UserCreatePage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Create User"}
          links={[{ title: "User Module", path: "/dashboard/user" }]}
        />
        <UserCreateForm />
    </DashboardLayout>
  );
};

export default UserCreatePage;
