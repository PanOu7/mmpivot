"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CustomerCreateForm from "../components/CustomerCreateForm";

const CustomerCreatePage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Create Customer"}
          links={[{ title: "Customer Module", path: "/dashboard/customer" }]}
        />
        <CustomerCreateForm />
    </DashboardLayout>
  );
};

export default CustomerCreatePage;
