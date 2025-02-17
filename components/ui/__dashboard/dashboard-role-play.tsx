"use client";
import { bebas } from "@/lib/font";
import { Bean, Palette } from "lucide-react";
import RolePlayCard from "../cards/role-play-card";

const DashboardRolePlay = () => {
  return (
    <div>
      <h1 className={`${bebas.className} text-5xl mb-[30px]`}>Role play</h1>
      <div className="grid grid-cols-2 gap-10">
        <RolePlayCard
          title="Difficult<br />conversations"
          duration="34:55 Mins"
          chapters={6}
          icon={Palette}
          buttonText="Get Started"
          className="col-span-2 lg:col-span-1"
          onStart={() => console.log("Starting course...")}
        />{" "}
        <RolePlayCard
          title="Active<br />listening"
          duration="34:55 Mins"
          chapters={6}
          vectorOffsetStopColor="#34A13A"
          vectorStopColor="#8DF895"
          className="col-span-2 lg:col-span-1"
          icon={Bean}
          buttonText="Get Started"
          bgImg="url('/images/dungeon.jpg')"
          onStart={() => console.log("Starting course...")}
        />{" "}
      </div>
    </div>
  );
};

export default DashboardRolePlay;
