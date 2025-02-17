"use client";
import React from "react";
import { BookOpen, Clock, LucideIcon, Palette } from "lucide-react";
import RolePlayVector from "../vector/role-play-vector";
import { cn } from "@/lib/utils";

interface RolePlayCardProps {
  title: string;

  duration: string;
  chapters: number;
  icon?: LucideIcon;
  iconSize?: number;
  vectorStopColor?: string;
  vectorOffsetStopColor?: string;
  onStart?: () => void;
  className?: string;
  buttonText?: string;
  bgImg?: string;
}

const RolePlayCard = ({
  title,
  duration,
  chapters,
  icon: Icon = Palette,
  iconSize = 61,
  vectorStopColor,
  vectorOffsetStopColor,
  onStart = () => {},
  className = "",
  buttonText = "Get started",
  bgImg = "url('/images/mine.jpg')",
}: RolePlayCardProps) => {
  const titleLines = title.split("<br />");

  return (
    <div
      style={{ backgroundImage: bgImg }}
      className={cn(
        `relative bg-cover bg-no-repeat w-full  overflow-hidden rounded-3xl h-[602px]`,
        className
      )}
    >
      <RolePlayVector
        className="w-full absolute left-0 -bottom-5"
        stop_color={vectorStopColor}
        offset_stop_color={vectorOffsetStopColor}
      />

      <div className="relative z-10 flex justify-end h-full p-10 flex-col gap-6">
        <div className="flex items-center gap-4">
          <button className="size-[127px] rounded-[28px] shadow-activity-icon flex items-center justify-center bg-black p-0 text-white">
            <Icon size={iconSize} />
          </button>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold text-white">
              {titleLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#0000001F] p-3 rounded-[25px] gap-2">
              <Clock className="w-5 h-5 text-white/80" />
              <span className="text-sm text-white/80">{duration}</span>
            </div>
            <div className="flex items-center bg-[#0000001F] p-3 rounded-[25px] gap-2">
              <BookOpen className="w-5 h-5 text-white/80" />
              <span className="text-sm text-white/80">{chapters} Chapters</span>
            </div>
          </div>

          <button
            onClick={onStart}
            className="self-start px-6 py-2 text-orange-500 bg-white rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolePlayCard;
