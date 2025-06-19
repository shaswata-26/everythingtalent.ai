"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ValuesSection() {
  return (
    <div className="relative h-full w-full bg-gradient-to-tr from-[#fff9fd] via-[#fff6fc] to-[#ffedfa] dark:bg-gradient-to-bl dark:from-[#0e1628] dark:via-[#0a1121] dark:to-[#0e1628] py-10 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8 !pt-0">
      {/* Decorative line */}
      <div className="flex justify-end items-center max-w-3xl mx-auto">
        <Image
          alt="decorative line"
          width={718}
          height={272}
          className="mb-9 mr-7"
          style={{ color: "transparent", zIndex: 44 }}
          src="/curve-line3.png"
          priority={false}
        />
      </div>

      {/* Centered icon */}
      <div className="relative bottom-[1rem]">
        <div className="flex mt-0 relative bottom-[1rem] mx-auto items-center border rounded-full w-fit justify-center">
          <div
            style={{ zIndex: 45 }}
            className="relative group transition-transform duration-300 cursor-pointer"
          >
            <div className="flex mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit justify-center">
              <div className="relative w-14 h-14 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B8BFA] to-[#fed91e9d] via-[#da16c6a3]" />
                <SlackIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col items-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center w-full">
            <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
              <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Values
              </small>
            </div>
          </div>
          <h2 className="mt-5 mb-5 text-5xl leading-[44px] md:text-center font-bold text-gray-900 dark:text-white">
            Our Philosophy in{" "}
            <span className="bg-gradient-to-r from-[#ec0bc8] via-[#5bb2f6] to-[#f6c436] bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-gray-600 sm:text-xl sm:leading-[30px] dark:text-slate-400 text-center">
            At Everything Talent, Bringing Our Values to Life Through Meaningful
            Actions
          </p>
        </div>

        {/* Values grid */}
        <div className="storybook-fix w-full">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-3">
            <ValueCard
              number="01"
              title="With us, there are no surprises—just straight talk and genuine commitment."
              tag="#HONESTY"
              bgColor="bg-yellow-300"
              fontWeight="black"
              textColor="text-black/30"
            />

            <ValueCard
              number="03"
              title="We act with urgency to ensure progress and deliver results efficiently. Every moment matters."
              tag="#URGENCY"
              bgColor="bg-violet-500"
              textColor="text-[#4f357d]"
              isWide
              hasAvatars
            />

            <ValueCard
              number="02"
              title="Embrace hard work"
              tag="#HARDWORK"
              bgColor="bg-orange-300"
              textColor="text-black"
              icon={<BotIcon />}
            />

            <ValueCard
              number="05"
              title="We're here to help you aim higher, break limits, and achieve what others might think impossible."
              tag="#ASPIRATION"
              bgColor="bg-lime-300"
              textColor="text-lime-600"
              isWide
            />

            <ValueCard
              number="06"
              title="Do hard things"
              tag="#RESILIENT"
              bgColor="bg-zinc-300"
              textColor="text-neutral-800"
              isWide
              hasHoverEffect
            />

            <ValueCard
              number="04"
              title="Grow 1% every day"
              tag="#GROWTHMINDSET"
              bgColor="bg-green-200"
              textColor="text-neutral-800"
            />

            <ValueCard
              number="07"
              title="We value fresh ideas, bold solutions, and the freedom to imagine what's next."
              tag="#CREATIVITY"
              bgColor="bg-rose-300"
              textColor="text-neutral-800"
            />

            <ValueCard
              number="08"
              title="Commit to continuous learning and improvement"
              tag="#LEARNING"
              bgColor="bg-blue-200"
              textColor="text-blue-800"
              isWide
            />

            <ValueCard
              number="10"
              title="Every project, every solution we create is aimed at contributing to something greater."
              tag="#CONTRIBUTION"
              bgColor="bg-[#F5E660]"
              textColor="text-[#6C1717]"
              isWide
            />

            <ValueCard
              number="09"
              title="Build trust through actions, not just words."
              tag="#TRUST"
              bgColor="bg-[#F77C73]"
              textColor="text-[#4E1B26]"
              isWide
            />
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div
        style={{ zIndex: 40 }}
        className="absolute !z-40 w-[100%] -bottom-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"
      />
      <div
        style={{ zIndex: 40 }}
        className="absolute !z-40 w-[100%] -top-[41px] left-0 h-[100px] bg-gradient-to-br from-[#FCECF9] via-[#F7E6FA] to-[#EFE2FD] dark:from-black dark:via-slate-900 dark:to-slate-950 blur-[40px]"
      />
    </div>
  );
}

// Reusable Value Card Component
function ValueCard({
  number,
  title,
  tag,
  bgColor,
  textColor,
  icon,
  isWide = false,
  hasAvatars = false,
  hasHoverEffect = false,
}) {
  return (
    <div
      style={{ zIndex: 46 }}
      className={`relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col ${bgColor} ${
        isWide ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`text-sm font-medium ${textColor}`}>{number}</div>

      {icon && <div className="mt-2">{icon}</div>}

      {hasHoverEffect ? (
        <div className="group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4 bg-transparent">
          <div className="text-2xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-4xl">
            {title}
          </div>
          <div className="text-md absolute font-black uppercase transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-4xl text-zinc-800">
            {title}
          </div>
        </div>
      ) : (
        <strong
          className={`mt-2 inline-block font-bold ${
            hasAvatars ? "text-2xl text-white" : "text-xl"
          }`}
        >
          {title}
        </strong>
      )}

      {hasAvatars && <TeamAvatars />}
      {tag === "#HARDWORK" ? (
        <AnimatedTag tag={tag} textColor="text-black" />
      ) : (
        <sup className={`text-sm mt-4 ${textColor} font-bold`}>{tag}</sup>
      )}
    </div>
  );
}
// Team Avatars Component
function TeamAvatars() {
  const teamMembers = [
    { name: "John Doe", role: "Software Engineer", image: "/johndoe.avif" },
    { name: "Jane Smith", role: "Product Manager", image: "/jane.avif" },
    { name: "David Johnson", role: "UX Designer", image: "/david.avif" },
    { name: "Emily Davis", role: "Frontend Developer", image: "/emily.avif" },
    {
      name: "Michael Wilson",
      role: "Backend Developer",
      image: "/micheal.avif",
    },
    { name: "Sarah Thompson", role: "Data Scientist", image: "/sarah.avif" },
  ];

  return (
    <div className="ml-4 mt-auto">
      <div className="flex py-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
          >
            <div className="relative overflow-hidden rounded-full bg-white">
              <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
              <Image
                src={member.image}
                alt={member.name}
                width={32}
                height={32}
                className="rounded-full object-cover m-1 size-8"
                unoptimized={process.env.NODE_ENV !== "production"} // Only optimize in production
              />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">{member.name}</div>
              <div className="text-sm">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// SVG Icons
function SlackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-slack w-[29px] h-[29px] rotate-180 text-white"
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bot size-8 md:size-12"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function AnimatedTag({ tag, textColor = "text-white" }) {
  const [displayedTag, setDisplayedTag] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < tag.length) {
      const timer = setTimeout(() => {
        setDisplayedTag((prev) => prev + tag[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 200); // Adjust timing here (200ms per character for 2s total)

      return () => clearTimeout(timer);
    }

    // Reset animation after completion (optional)
    if (currentIndex === tag.length) {
      const resetTimer = setTimeout(() => {
        setDisplayedTag("");
        setCurrentIndex(0);
      }, 3000); // Wait 3 seconds before restarting

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, tag]);

  return (
    <sup className={`text-sm mt-4 ${textColor} font-bold`}>{displayedTag}</sup>
  );
}
