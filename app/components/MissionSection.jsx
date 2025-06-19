"use client"
import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <div className="gradient-border group relative mt-20 h-[400px] w-full max-w-5xl overflow-hidden rounded-3xl border-2 px-6 py-16 transition-all duration-700 ease-out sm:mt-28 sm:w-3/4 sm:px-10 sm:py-20 md:mt-40 md:w-2/3 md:px-12 md:py-24 lg:w-1/2 dark:bg-gradient-to-r dark:from-[#1e0e24] dark:to-[#26161b] dark:bg-opacity-60 bg-gradient-to-r from-[#e9d5ff] to-[#bfdbfe] bg-opacity-60 transform scale-100 opacity-80">
      
      {/* Gradient border effect - you might need to implement this with a pseudo-element */}
      <style jsx>{`
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(121.31deg, #8B5CF6 -12.16%, #EC4899 48.37%, #F59E0B 112.89%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
      
      <div className="flex max-w-5xl flex-col items-center gap-4 text-center sm:gap-6">
        <h2 className="text-[32px] font-extrabold leading-tight text-[#92a3b8] group-hover:text-white sm:text-[40px] md:text-[48px] lg:text-[40px]">
          <span className="font-bold text-slate-900 dark:text-white dark:group-hover:text-slate-50">Join Our</span>
          <span className="gradient-text-new ml-2 bg-clip-text text-transparent">Mission</span>
        </h2>
        
        <p className="text-lg text-slate-700 group-hover:text-gray-950 dark:text-[#92a3b8] dark:group-hover:text-gray-300 sm:text-xl md:text-xl">
          Help us reimagine the future of hiring in the tech industry.
        </p>
        
        <button className="animate-rainbow group relative inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-black px-8 text-md font-medium text-white ring-offset-background transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 hover:scale-[1.02] hover:border-none border-white before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-75 before:transition-opacity before:duration-1000 before:[filter:blur(calc(0.8*1rem))] hover:before:opacity-100 after:absolute after:inset-0 after:rounded-md after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:p-[2px] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude]">
          Start Here
          <svg
            className="ml-2 -mr-1 h-5 w-5 transition group-hover:translate-x-1"
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
  );
};

export default MissionSection;