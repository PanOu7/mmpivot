"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import ServiceEditForm from "../components/ServiceEditForm";

const ServiceEditPage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Edit Service"}
          links={[{ title: "Service Module", path: "/dashboard/service" }]}
        />
        <ServiceEditForm />
    </DashboardLayout>
  );
};

export default ServiceEditPage;
