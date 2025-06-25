"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useTransform, motion, useScroll } from "framer-motion";
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
    color: "#5196fd",
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
    color: "#8f89ff",
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
    color: "#13006c",
  },
];

export default function JourneySection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container}>
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto text-center px-4 mb-8 mt-3">
          <h1 className="text-5xl text-black font-bold tracking-tight dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ec0bc8] via-[#5bb2f6] to-[#f6c436] bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore the milestones that have shaped our path to innovation,
            where every step brings us closer to transforming the future.
          </p>
        </div>

        {/* Timeline Cards Section */}
        <section className=" w-full ">
          {timelineData.map((item, i) => {
            const targetScale = 1 - (timelineData.length - i) * 0.05;
            return (
              <TimelineCard
                key={`p_${i}`}
                i={i}
                src={item.imageSrc}
                title={item.title}
                year={item.year}
                description={item.description}
                stats={item.stats}
                color={item.color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

const TimelineCard = ({
  i,
  title,
  year,
  description,
  stats,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top"
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm font-medium">{title}</span>
            <h2 className="text-2xl font-bold mt-1">{year}</h2>
          </div>
        </div>

        <div className="flex h-full mt-5 gap-10">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-sm">{description}</p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
