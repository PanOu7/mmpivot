"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CustomerSection from "../components/CustomerSection";

const CustomerListPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageTitle={"Customer Module"} />
      <CustomerSection />
    </DashboardLayout>
  );
};

export default CustomerListPage;
