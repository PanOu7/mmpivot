"use client";
import Header from "../components/Header";
import DashboardLayout from "../components/DashboardLayout";
import ModuleListSection from "../components/ModuleListSection";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Header />
      <ModuleListSection />
    </DashboardLayout>
  );
};

export default DashboardPage;
