"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CaseDetailSection from "../components/CaseDetailSection";

const CaseDetailPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageTitle={"Case Detail"}
        links={[{ title: "Case Module", path: "/dashboard/customer-case" }]}
      />
      <CaseDetailSection />
    </DashboardLayout>
  );
};

export default CaseDetailPage;
