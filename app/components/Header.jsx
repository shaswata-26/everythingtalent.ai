"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";


export default function Header() {
  // const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="opacity-100 transform-none">
      <header className="fixed w-full top-0 z-50 bg-slate-100 dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent mt-3">
        <nav
          className="flex h-[54px] w-full items-center justify-between px-4 md:container md:px-8"
          aria-label="Global"
        >
          <div className="w-full">
            <div className="flex items-center justify-start gap-4 w-full">
              {/* Mobile Logo */}
              <div className="block lg:hidden shadow-lg hover:shadow-xl border-2 border-slate-700/30 dark:border-slate-300/30 rounded-lg">
                <div className="flex space-x-8 rounded-lg bg-slate-200/20 backdrop-blur py-1 px-4">
                  <Link href="/" className="font-bold text-xl">
                    <div className="relative flex space-x-2 h-10 items-center justify-center text-black dark:text-white">
                      <Image
                        alt="logo"
                        width={32}
                        height={32}
                        className="dark:hidden block h-8 w-8"
                        src="/logo.webp"
                      />
                      <Image
                        alt="logo"
                        width={32}
                        height={32}
                        className="hidden dark:block h-8 w-8"
                        src="/logo.webp"
                      />
                      <span className="font-bold">Everything Talent</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Desktop Navigation */}
              <section className="shadow-lg hover:shadow-xl border-2 border-slate-700/30 dark:border-slate-300/30 rounded-lg backdrop-blur hover:backdrop-blur-none">
                <ul className="hidden lg:flex gap-8 items-center rounded-lg dark:bg-black/40 bg-slate-200/40 backdrop-blur hover:backdrop-blur-none py-1 px-4 hover:bg-slate-200 dark:hover:bg-black transition-all duration-100">
                  <Link href="/" className="font-bold text-xl pl-3">
                    <div className="relative flex space-x-2 h-10 items-center justify-center text-black dark:text-white">
                      <Image
                        alt="logo"
                        width={32}
                        height={32}
                        className="dark:hidden block h-8 w-8"
                        src="/logo.webp"
                      />
                      <Image
                        alt="logo"
                        width={32}
                        height={32}
                        className="hidden dark:block h-8 w-8"
                        src="/logo.webp"
                      />
                    </div>
                  </Link>

                  <div className="border-none h-[30px] w-px -mx-3 bg-slate-700/30 dark:bg-slate-300/30"></div>

                  <li className="font-regular text-slate-950 dark:text-slate-50 text-sm">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="font-regular text-slate-950 dark:text-slate-50 text-sm">
                    <Link href="/products">Products</Link>
                  </li>

                  <nav
                    aria-label="Main"
                    className="relative z-10 flex max-w-max flex-1 items-center justify-center"
                  >
                    <div>
                      <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                        <li>
                          <button className="group inline-flex h-10 items-center justify-center rounded-md py-2 transition-colors hover:text-accent-foreground focus:outline-none font-regular text-sm text-slate-950 dark:text-slate-50">
                            Solutions
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
                              className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-100 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <li className="font-regular text-slate-950 dark:text-slate-50 text-sm">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="font-regular text-slate-950 dark:text-slate-50 text-sm">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="font-regular text-slate-950 dark:text-slate-50 text-sm">
                    <Link href="/support">Support</Link>
                  </li>
                  <li className="font-regular text-sm dark:text-[#c166ee] font-bold text-customPurple hover:text-customPurple">
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex gap-5 py-1">
            {/* Request Demo Button */}
            <div className="hidden md:flex animate-fade-in-right items-center rounded-lg">
              <div className="flex items-center space-x-4 rounded-lg px-2 bg-white/5 dark:bg-transparent">
                <div className="hidden md:flex animate-fade-in-right items-center rounded-lg border-2 shadow-lg backdrop-blur hover:shadow-xl dark:border-slate-300/30 hover:dark:bg-black">
                  <button className="whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group animate-rainbow cursor-pointer font-medium transition-all duration-500 ease-in-out h-full w-full rounded-md gradient-border-logo-color-btn text-center relative overflow-hidden flex items-center justify-center group/modal-btn dark:bg-black bg-white text-black dark:text-white border border-gray-100 dark:border-none py-2 px-4">
                    <span className="flex items-center text-center transition duration-500 group-hover/modal-btn:translate-x-0">
                      <p>Request a Demo</p>
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
                        className="lucide lucide-chevron-right translate-x-1 transition"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="mt-2">
              {" "}
              <ModeToggle />
            </div>

            {/* Login Button */}
            <div className="ml-4 hidden lg:block shadow-lg rounded-lg">
              <div className="p-0.5 dark:p-0 border dark:border-2 shadow-lg shadow-white/10 border-white/5 bg-white/5 dark:bg-black/20 backdrop-blur rounded-lg dark:border-slate-300/30">
                <button className="whitespace-nowrap text-sm focus-visible:outline-none group relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-md font-medium dark:text-black transition-all duration-500 ease-in-out h-10 px-4 py-2 group w-full bg-white text-black border-none">
                  Login
                  <svg
                    className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
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

          {/* Mobile Theme Toggle */}
          <div className="md:hidden px-4 pb-1 bg-white/5 dark:bg-black/20 backdrop-blur rounded-lg border-2 shadow-lg hover:shadow-xl border-slate-700/30 dark:border-slate-300/30">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none h-full w-5 px-0 pt-2 outline-none"
              type="button"
              aria-label="Toggle theme"
            >
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
                className="lucide lucide-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
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
                className="lucide lucide-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-slate-400"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden -mr-2" aria-label="Menu">
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
              className="lucide lucide-menu hover:cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
}
