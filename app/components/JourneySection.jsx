"use client";
import { ReactLenis } from "@studio-freight/react-lenis";  // <-- fixed import here
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const timelineData = [
  {
    year: "2024",
    title: "Everything AI 2.0",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    stats: [
      { value: "50K+", label: "users" },
      { value: "98%", label: "accuracy" },
      { value: "2x faster", label: "processing" },
    ],
    imageSrc: "/2024.webp",
  },
  {
    year: "2023",
    title: "ML Integration",
    description:
      "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%.",
    stats: [
      { value: "+30%", label: "accuracy" },
      { value: "15+", label: "integrations" },
      { value: "25K+", label: "users" },
    ],
    imageSrc: "/2023.webp",
  },
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Everything AI was officially launched! Released initial AI-powered automation features.",
    stats: [
      { value: "10+", label: "features" },
      { value: "1M+", label: "data processed" },
      { value: "1K+", label: "clients" },
    ],
    imageSrc: "/2022.webp",
  },
];

export default function JourneySection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cardHeight = 450; // px height of each card
  const overlap = 150; // px overlap between cards
  const totalHeight = cardHeight + (timelineData.length - 1) * overlap;

  return (
    <ReactLenis root>
      <section
        className="relative pb-28 bg-gradient-to-tr from-[#ffeffa] via-[#fff5fc] to-[#fcf4f9] dark:from-[#0a1020] dark:via-[#05080e] dark:to-[#0e1526]"
        style={{ height: "600px" }}
      >
        {/* Header Section */}
        <div className="w-full max-w-7xl mx-auto text-center px-4 mb-8">
          <h1 className="text-5xl text-black font-bold tracking-tight dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ec0bc8] via-[#5bb2f6] to-[#f6c436] bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore the milestones that have shaped our path to innovation, where
            every step brings us closer to transforming the future.
          </p>
        </div>

        {/* Scroll container */}
        <div
          ref={container}
          className="relative overflow-y-scroll mx-auto max-w-7xl"
          style={{ height: "450px", position: "relative" }}
        >
          {/* Tall inner container to enable scrolling */}
          <div style={{ height: totalHeight, position: "relative" }}>
            {timelineData.map((item, i) => {
              const topPos = i * overlap;

              const start = i / timelineData.length;
              const end = (i + 1) / timelineData.length;
              const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);
              const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
              const zIndex = timelineData.length - i;

              return (
                <motion.div
                  key={i}
                  style={{ top: topPos, scale, opacity, zIndex }}
                  className="absolute left-0 right-0 mx-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
                >
                  <Card {...item} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}

function Card({ year, title, description, stats, imageSrc }) {
  return (
    <div className="flex flex-col md:flex-row h-[450px] p-6 gap-10 md:gap-12">
      {/* Text content */}
      <div className="w-full md:w-[45%] space-y-6">
        <div>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {title}
          </span>
          <h2 className="text-3xl font-bold mt-1 dark:text-amber-100">{year}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image content */}
      <div className="relative w-full md:w-[85%] aspect-[16/9] rounded-xl overflow-hidden hidden md:block">
        <Image
          alt={`${year} illustration`}
          src={imageSrc}
          fill
          className="object-cover rounded-md"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
}
