'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function CoreValuesSection() {
  const [activeTab, setActiveTab] = useState('Ambition');

  const values = [
    {
      title: 'Ambition',
      heading: 'Connecting Talent and Opportunity',
      description:
        "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
      points: [
        'Connect skilled developers with ideal roles',
        'Streamline tech recruitment process',
        'Create optimal candidate-company matches',
      ],
      image: '/ambition.jpg',
    },
    {
      title: 'Satisfaction',
      heading: 'Partnering for Success',
      description:
        'Your success is our mission, and we\'re here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn\'t just a goal; it\'s the spark that drives the future of tech and innovation!',
      points: [
        'Dedicated partnership for hiring success',
        'Fuel company growth through talent',
        'Drive tech innovation through matching',
      ],
      image: '/some1.avif',
    },
    {
      title: 'Integrity',
      heading: 'Building Trust in Hiring',
      description:
        'We believe that trust is the foundation of every great hire. That\'s why we make it our mission to prioritize clarity and trust at every step of the journey.',
      points: [
        'Build hiring confidence through transparency',
        'Prioritize trust in recruitment process',
        'Foster honest candidate-employer relationships',
      ],
      image: '/integrity.webp',
    },
    {
      title: 'Vigilance',
      heading: 'Security-Driven Solutions',
      description:
        'Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.',
      points: [
        'Prioritize end-to-end platform security',
        'Ensure protected recruitment experience',
        'Build confidence through data protection',
      ],
      image: '/security.jpg',
    },
  ];

  const activeValue = values.find((value) => value.title === activeTab);

  return (
    <div className="relative overflow-hidden  ">
      {/* Background gradient with grid pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-[#fffefe] via-[#ffecf9] to-[#eee1fc] dark:from-black dark:via-slate-900 dark:to-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] before:absolute before:inset-0 before:from-[#1c153117] before:via-[#2d224f28] before:to-[#6151926c] before:z-10 after:absolute after:inset-0 after:via-black/10 after:to-black/30"
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-y-0 bottom-0 h-[100px] w-full bg-gradient-to-b from-white to-transparent dark:from-[#0A1224] dark:to-transparent md:h-[200px]"></div>

      {/* Telescope icon with gradient */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative mx-auto h-40 w-[1.5px] !z-20 bg-gradient-to-t from-emerald-500 via-indigo-600 to-amber-300/40 pt-1"></div>
        <div className="group relative mb-4 cursor-pointer transition-transform duration-300" style={{ opacity: 1, transform: 'none' }}>
          <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] p-[6px]">
            <div className="relative h-14 w-14 rounded-full p-4 shadow-lg">
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
                className="lucide lucide-telescope relative h-full w-full text-white"
              >
                <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
                <path d="m13.56 11.747 4.332-.924"></path>
                <path d="m16 21-3.105-6.21"></path>
                <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
                <path d="m6.158 8.633 1.114 4.456"></path>
                <path d="m8 21 3.105-6.21"></path>
                <circle cx="12" cy="13" r="2"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Header section */}
        <div className="mb-8 text-center">
          <div className="mb-8 flex flex-col items-center sm:mb-16">
            {/* Decorative SVG */}
            <div
              className="pointer-events-none absolute right-1/3 top-0 rotate-180 opacity-20 blur-2xl dark:opacity-40"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="650">
                <defs>
                  <linearGradient id="bs4-a" x1="14.609%" x2="50%" y1="44.544%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7"></stop>
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs4-a)"
                  fillRule="evenodd"
                  d="m0 0 461 369-284 58z"
                  transform="matrix(1 0 0 -1 0 427)"
                ></path>
              </svg>
            </div>

            {/* "Our Standards" badge */}
            <div className="flex w-full items-center justify-center">
              <div className="rounded-lg bg-gray-100 py-1 px-2 dark:bg-[#404040]">
                <small className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-center text-sm font-bold leading-none text-transparent dark:text-white">
                  Our Standards
                </small>
              </div>
            </div>

            <h2 className="mb-5 mt-5 text-5xl font-bold leading-[44px] text-gray-900 dark:text-white md:text-center">
              The Fuel for{' '}
              <span className="gradient-text-new bg-clip-text text-transparent">Our Vision</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-slate-400 sm:text-xl sm:leading-[30px]">
              Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
            </p>
          </div>

          {/* Tab navigation (desktop) */}
          <div className="max-sm:hidden">
            <div className="relative inline-flex rounded-full border bg-gradient-to-br from-[#f5f6f7] via-[#f5f3fc] to-white p-1 shadow-md hover:scale-[101%] dark:from-black dark:via-slate-900 dark:to-slate-950">
              {values.map((value) => (
                <button
                  key={value.title}
                  className={`relative z-10 rounded-full px-6 py-2 transition-colors duration-200 ${
                    activeTab === value.title
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-slate-300'
                  }`}
                  onClick={() => setActiveTab(value.title)}
                >
                  <span className="relative z-10">{value.title}</span>
                  {activeTab === value.title && (
                    <div className="absolute inset-0 rounded-full bg-[#ead4f9] shadow-md"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active tab content (desktop) */}
        <div className="max-sm:hidden">
          {activeValue && (
            <div
              className="relative z-[45] rounded-3xl border bg-gradient-to-br from-[#f5f6f7] via-[#f5f3fc] to-white p-8 transition-transform duration-200 dark:from-black dark:via-slate-900 dark:to-slate-950 md:p-16"
              style={{ opacity: 1, transform: 'none' }}
            >
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium">{activeValue.heading}</h2>
                  <p className="text-xl">{activeValue.title}</p>
                  <p className="text-gray-600">{activeValue.description}</p>
                  <ul className="list-none space-y-3 text-sm text-gray-800 dark:text-gray-200 sm:text-base">
                    {activeValue.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-lg text-purple-500">✧</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src={activeValue.image}
                    alt={`${activeValue.title} illustration`}
                    fill
                    className="absolute right-0 top-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile content (all tabs) */}
        <div className="mx-auto grid w-[calc(100%-1rem)] gap-8 sm:hidden">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative z-[45] rounded-3xl border bg-gradient-to-br from-[#f5f6f7] via-[#f5f3fc] to-white p-8 transition-transform duration-200 dark:from-black dark:via-slate-900 dark:to-slate-950 md:p-16"
            >
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium">{value.heading}</h2>
                  <p className="text-xl">{value.title}</p>
                  <p className="text-gray-600">{value.description}</p>
                  <ul className="list-none space-y-3 text-sm text-gray-800 dark:text-gray-200 sm:text-base">
                    {value.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-lg text-purple-500">✧</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src={value.image}
                    alt={`${value.title} illustration`}
                    fill
                    className="absolute right-0 top-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom blur effect */}
      <div
        style={{ zIndex: '40 !important' }}
        className="absolute !z-40 -bottom-[20px] left-0 h-[50px] w-[100%] bg-[#F8E6F9] blur-[40px] dark:bg-[#0C101F] sm:-bottom-[41px] sm:h-[100px]"
      ></div>
    </div>
  );
}