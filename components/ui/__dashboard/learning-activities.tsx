import { bebas } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import { MessageCircleIcon } from "lucide-react";

const LearningActivities = () => {
  const ongoingActivities = [
    {
      title: "Difficult conversations",
      progress: "20%",
      image: "/images/activity-1.png",
      icon: "/path-to-chat-icon.png",
    },
    {
      title: "Active listening",
      progress: "20%",
      image: "/images/activity-2.png",
      icon: "/path-to-headphones-icon.png",
    },
    {
      title: "Giving feedback",
      progress: "20%",
      image: "/images/activity-3.png",
      icon: "/path-to-question-icon.png",
    },
    {
      title: "Managing difficult situations",
      progress: "20%",
      image: "/images/activity-4.png",
      icon: "/path-to-chart-icon.png",
    },
  ];

  return (
    <div>
      <h1 className={`${bebas.className} text-5xl mb-[30px]`}>
        ongoing activity
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {ongoingActivities.map((activity, index) => (
          <div
            key={index}
            className="relative h-fit bg-white rounded-2xl overflow-hidden"
          >
            <div className="overflow-hidden h-fit">
              <div className="p-2">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={100}
                  height={100}
                  unoptimized
                  className="object-cover w-full rounded-2xl h-[268px]"
                />
              </div>

              <div className="bg-white p-4 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <Button
                    className="bg-black size-[43px] rounded-[10px] shadow-activity-icon text-white text-[20px]"
                  >
                    <MessageCircleIcon size={20} />
                  </Button>

                  <h2 className="text-[15px] font-semibold">
                    {activity.title}
                  </h2>
                </div>
                <div className="flex items-center w-full gap-2 justify-between">
                  <div className="w-full max-w-[70%]">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div
                        className="h-full w-[20%] bg-yellow-400 rounded-full"
                        style={{ width: activity.progress }}
                      ></div>
                    </div>
                  </div>
                  <span
                    className={`bg-white rounded-[43px] shadow-lg ${bebas.className} text-[12px] px-[6px] text-nowrap`}
                  >
                    {activity.progress} COMPLETE
                  </span>
                </div>
                <button className="mt-4 w-full bg-[#68A7AD] text-white py-3 rounded-full shadow-activity-button text-[14px] hover:bg-[#5a9195] transition-colors">
                  Continue course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningActivities;
