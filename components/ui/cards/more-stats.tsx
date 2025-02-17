import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { Card } from "../card";

const MoreStats = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex flex-col gap-4 text-center w-full items-center justify-between h-full">
        <h2 className="text-[13px] font-semibold text-[#7A7A7A] uppercase">
          More stats
        </h2>

        <div className="relative w-full flex justify-center items-center">
          <div className="size-[70px] text-[30px] rounded-full bg-[#F3F3F3] flex items-center justify-center z-10">
            %
          </div>
        </div>

        <h1 className="text-[37px] font-[450]">37</h1>

        <div>
          <p className="font-semibold">How many scenarios left to play</p>
          <p className="text-[#7A7A7A] text-[13px]">Last Check on 21 Apr</p>
        </div>

        <div className="w-full py-3 pl-5 rounded-[20px] bg-[#F3F3F3] px-4 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Role minutes played</p>

            <div className="flex items-center text-gray-400 gap-1">
              <p>This week</p>

              <ChevronUp size={20} />
            </div>
          </div>

          <div className="px-5 py-2 font-semibold bg-[#978FED] text-white rounded-[30px]">
            576 Mins
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MoreStats;
