"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import ServiceSection from "../components/ServiceSection";

const ServiceListPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageTitle={"Service Module"} />
      <ServiceSection />
    </DashboardLayout>
  );
};

export default ServiceListPage;
