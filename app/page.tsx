import DashboardCards from "@/components/ui/__dashboard/dashboard-cards";
import DashboardOngoing from "@/components/ui/__dashboard/dashboard-ongoing";
import DashboardRolePlay from "@/components/ui/__dashboard/dashboard-role-play";
import LearningModule from "@/components/ui/__dashboard/learning-module";
import DashboardHeader from "@/components/ui/__static/dashboard-header";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-[100px]">
      <div>
        <DashboardHeader />
        <DashboardCards />
      </div>

      <DashboardOngoing />
      <DashboardRolePlay />
      <LearningModule />
    </div>
  );
};

export default Page;
