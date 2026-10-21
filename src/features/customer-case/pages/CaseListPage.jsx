"use client";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import CaseSection from "../components/CaseSection";

const CaseListPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageTitle={"Case Module"} />
      <CaseSection />
    </DashboardLayout>
  );
};

export default CaseListPage;
