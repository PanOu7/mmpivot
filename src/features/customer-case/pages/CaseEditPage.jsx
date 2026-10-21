"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CaseEditForm from "../components/CaseEditForm";

const CaseEditPage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Edit Case"}
          links={[{ title: "Case Module", path: "/dashboard/customer-case" }]}
        />
        <CaseEditForm />
    </DashboardLayout>
  );
};

export default CaseEditPage;
