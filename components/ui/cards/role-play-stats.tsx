import React from "react";
import { Card } from "../card";
import { cn } from "@/lib/utils";
import { Box, ChevronUp, Star } from "lucide-react";

const RolePlayStats = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6 w-[340px]", className)}>
      <div className="flex flex-col gap-4 w-full items-center justify-between h-full">
        <h2 className="text-[13px] font-semibold text-[#7A7A7A] uppercase">
          Role Play stats
        </h2>

        <div className="relative w-full flex justify-center items-center">
          <div className="size-[70px] rounded-full bg-[#FBDE9D] flex items-center justify-center z-10">
            <Star className="rotate-12" size={32} />
          </div>
          <div className="size-[70px] rounded-full bg-[#74B8EF] flex items-center justify-center -ml-4">
            <Box className="rotate-12" size={32} />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="w-full py-3 pl-5 rounded-[20px] bg-[#F3F3F3] px-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Total role play</p>

              <div className="flex items-center text-gray-400 gap-1">
                <p>This week</p>

                <ChevronUp size={20} />
              </div>
            </div>

            <div className="px-5 py-2 font-semibold bg-[#74B8EF] rounded-[30px]">
              09
            </div>
          </div>
          <div className="w-full py-3 pl-5 rounded-[20px] bg-[#F3F3F3] px-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Total role play</p>

              <div className="flex items-center text-gray-400 gap-1">
                <p>This week</p>

                <ChevronUp size={20} />
              </div>
            </div>

            <div className="px-5 py-2 font-semibold bg-[#FBDE9D] rounded-[30px]">
              09
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RolePlayStats;
