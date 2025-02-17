import { bebas } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Clock, Star } from "lucide-react";
import React from "react";

const ModuleCard = ({
  bg = "url(/images/ball.png)",
  className,
}: {
  bg?: string;
  className?: string;
}) => {
  return (
    <div
      style={{ backgroundImage: bg }}
      className={cn(
        "relative text-white h-[477px] rounded-[20px] overflow-hidden shadow-module-card bg-ball bg-cover bg-[#4F45F0]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#4F45F0] to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#4F45F0] to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.15] to-transparent" />

      <div className="relative z-10 h-full p-10 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h5 className={`${bebas.className} text-[31px]`}>
            How to integrate with ease
          </h5>

          <p className="text-[20px]">
            Whether you&apos;re using our API or plugin, we&apos;re here to help
            you every step of the way
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#0000001F] p-3 rounded-[25px] gap-2">
            <Clock className="w-5 h-5 text-white/80" />
            <span className="text-sm text-white/80">12:30 PM</span>
          </div>

          <button className="self-start px-6 py-2 text-[#4F45F0] bg-white rounded-full font-semibold flex gap-4 items-center hover:bg-white/90 transition-colors">
            Get started
            <div className="size-[26px] shadow-lg rounded-full p-2 bg-gradient-to-tr from-[#312F4C] to-[#4F45F0] flex items-center text-white justify-center">
              <Star />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
