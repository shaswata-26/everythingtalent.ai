"use client";

import Image from "next/image";

export default function TimelineItem({ year, title, description, stats, imageSrc }) {
  return (
    <div className="p-6 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800 h-full flex flex-col md:flex-row gap-6">
      {/* Image */}
      <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h4 className="text-sm text-slate-500 dark:text-slate-400">{year}</h4>
          <h3 className="text-xl md:text-2xl font-semibold mt-1 text-black dark:text-white">{title}</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base">{description}</p>
        </div>

        {/* Stats */}
        <div className="mt-4 flex gap-4 flex-wrap">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
