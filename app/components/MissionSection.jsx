"use client";
import React from "react";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="bg-white dark:bg-black relative overflow-hidden ">
      <div className="absolute w-full">
        <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden">
          <div draggable={false} className="transform-none select-none">
            <Image
              alt="world map"
              draggable={false}
              className="object-cover"
              fill
              src="/worldMap.svg"
              priority
            />
            <svg
              viewBox="0 0 800 400"
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
            >
              <defs>
                <linearGradient
                  id="path-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g opacity="1">
                <path
                  d="M 67.79 57.33 Q 102.51 7.33 137.23 124.32"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDasharray="1px 1px"
                />
                <circle cx="67.79" cy="57.33" r="2" fill="#0ea5e9" />
                <circle cx="137.23" cy="124.32" r="2" fill="#0ea5e9" />
                <text
                  x="142.23"
                  y="119.32"
                  fill="#000"
                  fontSize="8"
                  className="dark:fill-white"
                >
                  Los Angeles
                </text>
              </g>
              <g opacity="1">
                <path
                  d="M 67.79177777777781 57.33155555555555 Q 180.68366666666668 7.331555555555553 293.5755555555556 235.10555555555555"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </g>

              <g opacity="1">
                <path
                  d="M 293.5735555555556 235.10555555555555 Q 336.63200000000006 63.95044444444446 379.6904444444445 113.95044444444446"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </g>

              <g opacity="1">
                <path
                  d="M 399.716 85.53911111111113 Q 485.6457777777778 35.539111111111126 571.5755555555556 136.41355555555555"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </g>

              <g opacity="1">
                <path
                  d="M 571.5755555555556 136.41355555555555 Q 632.3558888888889 54.14844444444445 693.1362222222222 104.14844444444445"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </g>

              <g opacity="1">
                <path
                  d="M 571.5755555555556 136.41355555555555 Q 526.701 86.41355555555555 481.82644444444446 202.87133333333335"
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </g>

              <defs>
                <linearGradient
                  id="path-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g opacity="1">
                <circle
                  cx="67.79177777777781"
                  cy="57.33155555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="72.79177777777781"
                  y="52.33155555555555"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Alaska
                </text>
                <circle
                  cx="137.2362222222222"
                  cy="124.32844444444446"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="142.2362222222222"
                  y="119.32844444444446"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Los Angeles
                </text>
              </g>
              <g opacity="1">
                <circle
                  cx="67.79177777777781"
                  cy="57.33155555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="293.5755555555556"
                  cy="235.10555555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="298.5755555555556"
                  y="230.10555555555555"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Brazil
                </text>
              </g>
              <g opacity="1">
                <circle
                  cx="293.5735555555556"
                  cy="235.10555555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="293.5735555555556"
                  cy="235.10555555555555"
                  r="2"
                  fill="#a855f7"
                  opacity="0.19635746894346084"
                  style={{
                    transform: "scale(2.82186)",
                    transformOrigin: "293.574px 235.106px",
                  }}
                />
                <circle
                  cx="379.6904444444445"
                  cy="113.95044444444446"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="379.6904444444445"
                  cy="113.95044444444446"
                  r="2"
                  fill="#a855f7"
                  opacity="0.19635746894346084"
                  style={{
                    transform: "scale(2.82186)",
                    transformOrigin: "379.69px 113.95px",
                  }}
                />
                <text
                  x="384.6904444444445"
                  y="108.95044444444446"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Lisbon
                </text>
              </g>
              <g opacity="1">
                <circle
                  cx="399.716"
                  cy="85.53911111111113"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="571.5755555555556"
                  cy="136.41355555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="576.5755555555556"
                  y="131.41355555555555"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  New Delhi
                </text>
              </g>
              <g opacity="1">
                <circle
                  cx="571.5755555555556"
                  cy="136.41355555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="693.1362222222222"
                  cy="104.14844444444445"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="698.1362222222222"
                  y="99.14844444444445"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Vladivostok
                </text>
              </g>
              <g opacity="1">
                <circle
                  cx="571.5755555555556"
                  cy="136.41355555555555"
                  r="2"
                  fill="#0ea5e9"
                />
                <circle
                  cx="481.82644444444446"
                  cy="202.87133333333335"
                  r="2"
                  fill="#0ea5e9"
                />
                <text
                  x="486.82644444444446"
                  y="197.87133333333335"
                  fill="#000000"
                  fontSize="8"
                  textAnchor="start"
                >
                  Nairobi
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Mission Card Component */}
      <div className="flex justify-center items-center px-4 pb-10 lg:pb-32">
        {/* Gradient Border Wrapper */}
        <div
          className="
    w-full sm:w-3/4 md:w-2/3 lg:w-1/2
    max-w-5xl
    p-[2px] /* Border width */
    rounded-3xl
    mt-20 sm:mt-28 md:mt-40
    border-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B]
    group
  "
        >
          {/* Inner Card Container */}
          <div
            className="
      relative
      w-full
      h-[400px]
      rounded-3xl
      px-6 sm:px-10 md:px-12
      py-16 sm:py-20 md:py-24
      overflow-hidden
      flex justify-center items-center
      bg-gradient-to-r from-[#e9d5ff] to-[#bfdbfe] bg-opacity-60
      dark:bg-gradient-to-r dark:from-[#1e0e24] dark:to-[#26161b] dark:bg-opacity-60
      opacity-80 hover:opacity-100
      transition-all duration-700 ease-out
    "
          >
            {/* Content Container - Keep everything below exactly the same */}
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-5xl">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[40px] font-extrabold text-[#92a3b8] group-hover:text-white leading-tight">
                <span className="font-bold text-slate-900 dark:text-white dark:group-hover:text-slate-50">
                  Join Our
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] ml-2">
                  Mission
                </span>
              </h2>

              <p className="text-lg sm:text-xl md:text-xl text-slate-700 dark:text-[#92a3b8] dark:group-hover:text-gray-300 group-hover:text-gray-950">
                Help us reimagine the future of hiring in the tech industry.
              </p>

              <button className="relative inline-flex items-center justify-center h-11 px-8 rounded-md text-md font-medium text-white dark:text-black bg-black dark:bg-white border border-white transition-all duration-500 ease-in-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group/button">
                <span className="relative z-10">Start Here</span>
                <svg
                  className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover/button:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
