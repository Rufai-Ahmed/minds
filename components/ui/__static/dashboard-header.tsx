"use client";
import { bebas } from "@/lib/font";
import { Bell, LayoutGrid, Search } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { useSidebar } from "../sidebar";

const DashboardHeader = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between w-full">
      <div className="w-full md:hidden">
        <div className="flex items-center justify-between w-full md:hidden">
          <h1 className={`${bebas.className} text-5xl`}>logo </h1>

          <div className="flex items-center gap-4">
            <Button
              className="shadow-none h-[53px] w-[53px] p-4 bg-white rounded-[20px]"
              size={"icon"}
              variant={"secondary"}
            >
              <Bell size={20} />
            </Button>
            <Button
              onClick={() => setOpenMobile(true)}
              className="shadow-none h-[53px] w-[53px] p-4 bg-white rounded-[20px]"
              size={"icon"}
              variant={"secondary"}
            >
              <LayoutGrid />
            </Button>
          </div>
        </div>

        <div className="relative md:hidden my-10 flex items-center">
          <Search size={17} className="absolute left-4" />
          <Input
            className="border-none shadow-none bg-white rounded-[20px] w-[392px] pl-10 h-[53px]"
            placeholder="Search for anything"
          />
        </div>

        <h1 className={`${bebas.className} text-5xl md:hidden`}>
          dashboard{" "}
        </h1>
      </div>

      <h1 className={`${bebas.className} text-5xl hidden md:block`}>
        dashboard{" "}
      </h1>

      <div className="md:flex items-center flex-wrap gap-4 hidden">
        <div className="relative flex items-center">
          <Search size={17} className="absolute left-4" />
          <Input
            className="border-none shadow-none bg-white rounded-[20px] w-[392px] pl-10 h-[53px]"
            placeholder="Search for anything"
          />
        </div>
        <Button
          className="shadow-none h-[53px] w-[53px] p-4 bg-white rounded-[20px]"
          size={"icon"}
          variant={"secondary"}
        >
          <Bell size={20} />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
