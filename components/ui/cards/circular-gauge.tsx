"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CircularGaugeProps {
  score: number;
  maxScore?: number;
  lastCheckDate?: string;
  className?: string;
}

const CircularGauge = ({
  score,
  maxScore = 1000,
  lastCheckDate,
  className,
}: CircularGaugeProps) => {
  const percentage = (score / maxScore) * 100;

  const getScoreText = (score: number) => {
    if (score < 500) return "below average";
    if (score < 700) return "average";
    return "excellent";
  };

  const getIndicatorPosition = (percent: number) => {
    const angle = (percent / 100) * Math.PI;
    const radius = 84;
    const x = 140.5 + radius * Math.cos(angle);
    const y = 78.3339 + radius * Math.sin(angle);
    return { x, y };
  };

  const indicatorPos = getIndicatorPosition(percentage);

  return (
    <Card className={cn("p-6 w-[340px]", className)}>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-[13px] font-semibold text-[#7A7A7A] uppercase">
          YOUR TOP SCORE
        </h2>
        <div className="relative w-full flex justify-center overflow-hidden">
          <svg
            viewBox="0 0 339 173"
            className="w-full flex -mr-[60px] justify-center overflow-hidden bg-white"
          >
            <path
              d="M29.7429 148.372C28.9824 153.593 28.5723 158.89 28.5269 164.228L29.0201 164.232C29.0173 164.562 29.0159 164.892 29.0159 165.223H29.9238C29.9238 164.895 29.9252 164.568 29.928 164.24L30.4212 164.244C30.4658 158.997 30.8689 153.79 31.6166 148.657L31.1285 148.586C31.223 147.938 31.3229 147.29 31.4283 146.644L31.9151 146.724C32.7578 141.558 33.9504 136.472 35.4785 131.502L35.0071 131.357C35.1995 130.731 35.3973 130.107 35.6003 129.485L36.0692 129.638C37.6893 124.673 39.6464 119.829 41.926 115.143L41.4825 114.927C41.7689 114.338 42.0603 113.752 42.3568 113.168L42.7966 113.391C45.1562 108.746 47.8363 104.262 50.8224 99.9758L50.4177 99.6938C50.7919 99.1567 51.1709 98.6227 51.5547 98.0918L51.9544 98.3807C54.9984 94.1695 58.3431 90.1579 61.9739 86.3813L61.6184 86.0395C61.8454 85.8034 62.0734 85.5682 62.3026 85.334C62.5288 85.1029 62.7558 84.8728 62.9837 84.6439L63.3333 84.9919C66.9893 81.3195 70.8705 77.9336 74.9433 74.8483L74.6455 74.4551C75.1607 74.0648 75.679 73.6793 76.2004 73.2985L76.4912 73.6968C80.6634 70.6498 85.0277 67.9128 89.5494 65.5005L89.3173 65.0654C89.8872 64.7613 90.4596 64.4624 91.0345 64.1686L91.2589 64.6078C95.8461 62.2638 100.588 60.25 105.45 58.5816L105.29 58.115C105.9 57.9054 106.513 57.7012 107.128 57.5024L107.28 57.9717C112.166 56.3913 117.168 55.1574 122.249 54.2849L122.166 53.7988C122.802 53.6895 123.44 53.5859 124.079 53.4879L124.153 53.9755C129.213 53.1997 134.346 52.7814 139.52 52.7351L139.515 52.2419C139.838 52.239 140.162 52.2375 140.485 52.2375C140.808 52.2375 141.131 52.239 141.454 52.2419L141.45 52.7351C146.623 52.7814 151.757 53.1997 156.817 53.9755L156.891 53.4879C157.53 53.5859 158.168 53.6895 158.804 53.7988L158.721 54.2849C163.802 55.1574 168.804 56.3913 173.69 57.9717L173.842 57.5024C174.457 57.7012 175.069 57.9054 175.68 58.115L175.52 58.5816C180.382 60.25 185.124 62.2638 189.711 64.6078L189.935 64.1686C190.51 64.4624 191.083 64.7613 191.653 65.0654L191.42 65.5005C195.942 67.9128 200.306 70.6498 204.479 73.6969L204.769 73.2985C205.291 73.6793 205.809 74.0648 206.324 74.4551L206.027 74.8483C210.099 77.9336 213.98 81.3195 217.637 84.9919L217.986 84.6439C218.214 84.8728 218.441 85.1029 218.667 85.334C218.896 85.5683 219.124 85.8034 219.351 86.0395L218.996 86.3813C222.627 90.158 225.971 94.1695 229.015 98.3807L229.415 98.0918C229.799 98.6227 230.178 99.1567 230.552 99.6939L230.147 99.9758C233.134 104.262 235.814 108.746 238.173 113.392L238.613 113.168C238.909 113.752 239.201 114.338 239.487 114.927L239.044 115.143C241.323 119.829 243.281 124.673 244.901 129.638L245.369 129.485C245.573 130.107 245.77 130.731 245.963 131.357L245.491 131.502C247.019 136.472 248.212 141.558 249.055 146.724L249.542 146.644C249.647 147.29 249.747 147.938 249.841 148.586L249.353 148.657C250.101 153.79 250.504 158.997 250.549 164.244L251.042 164.24C251.045 164.568 251.046 164.895 251.046 165.223H251.954"
              stroke="#7A7A7A"
              strokeWidth="1"
              strokeDasharray="2 16"
              fill="none"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: percentage >= 25 ? 1 : percentage / 25 }}
              transition={{ duration: 1 }}
              d="M9.06231 172.148C4.71278 172.426 0.937839 169.123 0.905759 164.765C0.654042 130.567 12.9769 97.3567 35.6871 71.5432C58.3974 45.7298 89.7675 29.2769 123.719 25.1704C128.046 24.6471 131.802 27.9705 132.08 32.3201L132.1 32.6201C132.378 36.9696 129.071 40.6952 124.748 41.2504C95.056 45.0638 67.6549 59.5571 47.7628 82.1672C27.8708 104.777 16.986 133.801 16.9859 163.737C16.9859 168.096 13.7119 171.85 9.36234 172.128L9.06231 172.148Z"
              fill="#978FED"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: percentage >= 50 ? 1 : (percentage - 25) / 25,
              }}
              transition={{ duration: 1, delay: 0.2 }}
              d="M134.909 32.1701C134.724 27.8156 138.107 24.1125 142.465 24.1743C168.91 24.549 194.71 32.4322 216.849 46.9018C220.497 49.2863 221.233 54.2476 218.646 57.7554L218.467 57.9973C215.881 61.5051 210.953 62.2283 207.287 59.8707C188.126 47.5472 165.922 40.7632 143.145 40.2728C138.788 40.1789 135.106 36.8249 134.921 32.4704L134.909 32.1701Z"
              fill="#EE89DF"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: percentage >= 75 ? 1 : (percentage - 50) / 25,
              }}
              transition={{ duration: 1, delay: 0.4 }}
              d="M221.149 59.647C223.818 56.2019 228.792 55.5566 232.081 58.4166C244.582 69.2883 255.049 82.2997 262.99 96.8401C265.079 100.665 263.383 105.385 259.446 107.255L259.174 107.384C255.237 109.253 250.552 107.562 248.435 103.753C241.611 91.4738 232.742 80.4483 222.21 71.1524C218.943 68.2683 218.295 63.3298 220.965 59.8846L221.149 59.647Z"
              fill="#74B8EF"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: percentage >= 100 ? 1 : (percentage - 75) / 25,
              }}
              transition={{ duration: 1, delay: 0.6 }}
              d="M260.02 108.479C263.976 106.65 268.688 108.368 270.29 112.421C276.88 129.086 280.198 146.867 280.064 164.787C280.032 169.146 276.256 172.447 271.907 172.168L271.607 172.149C267.257 171.87 263.984 168.116 263.984 163.758C263.986 148.513 261.165 133.399 255.664 119.181C254.092 115.116 255.791 110.434 259.747 108.605L260.02 108.479Z"
              fill="#FBDE9D"
            />

            <motion.circle
              initial={{ cx: 245.542, cy: 84.3339 }}
              animate={{ cx: indicatorPos.x, cy: indicatorPos.y }}
              transition={{ duration: 1 }}
              r="9.86451"
              fill="#F9F9F9"
              stroke="#74B8EF"
              strokeWidth="7.89161"
            />

            <motion.text
              x="125"
              y="161"
              className="text-2xl ml-2 font-bold"
              fill="#242424"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {score}
            </motion.text>
          </svg>
        </div>

        <div className="text-center space-y-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-gray-600 font-semibold"
          >
            Your Quiz Score is {getScoreText(score)}
          </motion.p>
          {lastCheckDate && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-sm text-gray-400"
            >
              Last Check on {lastCheckDate}
            </motion.p>
          )}
        </div>

        <Button
          variant="secondary"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          What these stats mean?
        </Button>
      </div>
    </Card>
  );
};

export default CircularGauge;
