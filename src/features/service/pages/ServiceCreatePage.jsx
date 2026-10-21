"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import ServiceCreateForm from "../components/ServiceCreateForm";

const ServiceCreatePage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Create Service"}
          links={[{ title: "Service Module", path: "/dashboard/service" }]}
        />
        <ServiceCreateForm />
    </DashboardLayout>
  );
};

export default ServiceCreatePage;
