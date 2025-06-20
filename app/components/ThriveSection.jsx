"use client";
import Image from "next/image";

export default function ThriveSection() {
  const values = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round mb-3 h-6 w-6 text-purple-400"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>`,
      title: "Community-Driven",
      description:
        "We build strong connections and foster collaboration within our team.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb mb-3 h-6 w-6 text-purple-400"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`,
      title: "Innovation First",
      description:
        "We encourage creative thinking and novel approaches to challenges.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket mb-3 h-6 w-6 text-purple-400"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
      title: "Action Oriented",
      description:
        "We transform ideas into tangible results through decisive action.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up mb-3 h-6 w-6 text-purple-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`,
      title: "Continuous Growth",
      description: "We embrace learning and development as core principles.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star mb-3 h-6 w-6 text-purple-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      title: "Excellence Pursuit",
      description: "We strive for exceptional quality in everything we do.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award mb-3 h-6 w-6 text-purple-400"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>',
      title: "Shared Success",
      description: "We celebrate achievements and grow together as one team.",
    },
  ];

  return (
    <section className="relative z-20 mx-auto overflow-hidden bg-gradient-to-tr from-[#fffefe] via-[#ffecf9] to-[#eee1fc] pb-20 dark:from-black dark:via-slate-900 dark:to-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px]"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px]"></div>
      <div className="absolute z-20 h-60 w-full bg-gradient-to-b from-[#f7e7fbd9] dark:from-[#020718d5] dark:via-[#080f21b7] dark:to-[#0207182e]"></div>

      {/* Center line and icon */}
      <div
        style={{ zIndex: "45 !important" }}
        className="relative mx-auto h-40 w-[1.5px] bg-gradient-to-t from-blue-500 via-purple-600 to-yellow-300/40 pt-1"
      ></div>
      <div
        className="relative z-30 mb-16 flex justify-center"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] p-[6px]">
          <div className="relative h-14 w-14 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B8BFA] via-[#da16c6a3] to-[#fed91e9d] backdrop-blur-sm"></div>
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
              className="lucide lucide-lightbulb relative z-10 h-[29px] w-[29px] rotate-180 text-white"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container relative z-40 mx-auto max-w-7xl px-4">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl"></div>
        <div className="pointer-events-none absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl"></div>
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white blur-3xl dark:from-black dark:via-slate-900 dark:to-slate-950"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white blur-3xl dark:from-black dark:via-slate-900 dark:to-slate-950"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white blur-3xl dark:from-black dark:via-slate-900 dark:to-slate-950"></div>

        {/* Content layout */}
        <div className="flex flex-row justify-center lg:flex-row-reverse lg:gap-20">
          {/* Text content */}
          <div
            className="lg:w-1/2 relative"
            // style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
              <span className="gradient-text-new">How We Thrive</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At Everything Talent, we break the norm. Driven by community, we
              empower individuals to innovate, learn, and push
              boundaries—fostering shared growth and a relentless pursuit of
              excellence.
            </p>

            {/* Value cards grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] p-4 shadow-xl transition-all duration-200 hover:scale-[101%] hover:border-none hover:bg-purple-600 hover:gradient-border dark:border-gray-700 dark:bg-gray-900/50 dark:from-black dark:via-slate-900 dark:to-slate-950 dark:hover:border-gray-700 md:p-6"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: value.icon }}
                    aria-hidden="true"
                  />{" "}
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image content */}
          <div
            className="relative lg:w-1/2"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-x-105">
              <Image
                src="/insight-image.webp"
                alt="Story section visual representation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blur effects */}
      <div
        style={{ zIndex: "40 !important" }}
        className="absolute -bottom-[41px] left-0 !z-40 h-[100px] w-[100%] bg-gradient-to-br from-[#FDF4FB] via-[#FDF4FB] to-[#FDF4FB] blur-[40px] dark:from-black dark:via-slate-900 dark:to-slate-950"
      ></div>
   
    </section>
  );
}
