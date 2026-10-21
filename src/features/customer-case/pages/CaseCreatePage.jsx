"use client"
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CaseCreateForm from "../components/CaseCreateForm";

const CaseCreatePage = () => {
  return (
    <DashboardLayout>
        <BreadCrumb
          currentPageTitle={"Create Case"}
          links={[{ title: "Case Module", path: "/dashboard/customer-case" }]}
        />
        <CaseCreateForm />
    </DashboardLayout>
  );
};

export default CaseCreatePage;
