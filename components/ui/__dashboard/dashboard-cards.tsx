import React from "react";
import CircularGauge from "../cards/circular-gauge";
import MoreStats from "../cards/more-stats";
import RolePlayStats from "../cards/role-play-stats";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full mt-10">
      <CircularGauge
        className="w-full col-end-3 lg:col-span-1"
        score={660}
        maxScore={1000}
        lastCheckDate="21 Apr"
      />

      <RolePlayStats className="w-full col-end-3 lg:col-span-1" />

      <MoreStats />
    </div>
  );
};

export default DashboardCards;
