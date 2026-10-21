"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CustomerEditForm from "../components/CustomerEditForm";

const CustomerEditPage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Edit Customer"}
          links={[{ title: "Customer Module", path: "/dashboard/customer" }]}
        />
        <CustomerEditForm />
    </DashboardLayout>
  );
};

export default CustomerEditPage;
