import { bebas } from "@/lib/font";
import { Bell, Search } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className={`${bebas.className} text-5xl`}>dashboard </h1>

      <div className="flex items-center gap-4">
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
          <Bell />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
