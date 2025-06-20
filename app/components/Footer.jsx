"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import FloatingText from "./FloatingText";

export default function Footer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const dragRef = useRef(null);
  const animationRef = useRef(null);

  const layers = [
    { opacity: 1, zIndex: 7 },
    { opacity: 0.4, zIndex: 6 },
    { opacity: 0.2, zIndex: 5 },
    { opacity: 0.15, zIndex: 4 },
    { opacity: 0.1, zIndex: 3 },
    { opacity: 0.05, zIndex: 2 },
    { opacity: 0.02, zIndex: 1 },
  ];

  const applyTransform = (x, y) => {
    if (dragRef.current) {
      dragRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    dragRef.current.style.willChange = "transform";
    dragRef.current.style.cursor = "grabbing";
    cancelAnimationFrame(animationRef.current);
  };

  const handleMouseMove = (e) => {
    const layers = [1, 0.4, 0.2, 0.15, 0.1, 0.05, 0.02];

    if (!isDragging) return;

    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;

    // Use requestAnimationFrame for smooth movement
    animationRef.current = requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY });
      applyTransform(newX, newY);
    });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    dragRef.current.style.willChange = "auto";
    dragRef.current.style.cursor = "grab";
    cancelAnimationFrame(animationRef.current);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <footer>
      <section className="mx-auto">
        <div className="md:flex md:justify-between container px-4 md:px-24 md:pt-16 p-0 flex-row md:flex-col md:gap-[15px] gap-[10px] pb-10 ">
          <div className="lg:flex md:gap-48">
            <div className="max-w-72">
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                  <Image
                    alt="Everything Talent Logo"
                    loading="lazy"
                    width="160"
                    height="160"
                    data-nimg="1"
                    className="-ml-1 h-40 w-40"
                    style="color: transparent"
                    src="/acme-logo-dark.webp"
                  />
                </a>
              </div>

              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                Everything Talent
              </span>
              <h2 className="mb-6 text-sm font-semibold text-gray-400">
                Enhancing Hiring with AI-powered assessment and tracking for
                accurate recruitment
              </h2>

              <div className="flex items-center space-x-6">
                <a
                  className="text-white hover:text-gray-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  href="https://twitter.com/EVRYTNGTALENT"
                >
                  <svg
                    className="w-7 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 
          11.675-11.675 0-.178 0-.355-.012-.53A8.348 
          8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 
          4.118 4.118 0 001.804-2.27 8.224 8.224 
          0 01-2.605.996 4.107 4.107 0 00-6.993 
          3.743 11.65 11.65 0 01-8.457-4.287 
          4.106 4.106 0 001.27 5.477A4.072 4.072 
          0 012.8 9.713v.052a4.105 4.105 0 
          003.292 4.022 4.095 4.095 0 
          01-1.853.07 4.108 4.108 0 
          003.834 2.85A8.233 8.233 0 
          012 18.407a11.616 11.616 0 
          006.29 1.84"
                    ></path>
                  </svg>
                </a>

                <a
                  className="text-white hover:text-gray-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                  href="https://www.linkedin.com/company/everything-talent-ai/"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
          0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
          1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
          4.267 5.455v6.286zM5.337 7.433c-1.144 
          0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
          2.063-2.063 1.14 0 2.064.925 2.064 
          2.063 0 1.139-.925 2.065-2.064 
          2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                    ></path>
                  </svg>
                </a>

                <a
                  className="text-white hover:text-gray-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  href="https://www.youtube.com/channel/UCK5H3HNz_5gtZkFDBG2ar1A"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 
          3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 
          3.017 0 0 0 .502 6.186C0 8.07 0 12 0 
          12s0 3.93.502 5.814a3.016 3.016 0 0 0 
          2.122 2.136c1.871.505 9.376.505 
          9.376.505s7.505 0 9.377-.505a3.015 
          3.015 0 0 0 2.122-2.136C24 15.93 24 
          12 24 12s0-3.93-.502-5.814zM9.545 
          15.568V8.432L15.818 12l-6.273 
          3.568z"
                    ></path>
                  </svg>
                </a>

                <a
                  className="text-white hover:text-gray-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  href="https://www.facebook.com/EVRYTNGTALENT"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 
          5.373-12 12c0 5.99 4.388 10.954 10.125 
          11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
          1.792-4.669 4.533-4.669 1.312 0 2.686.235 
          2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
          1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
          23.027 24 18.062 24 12.073z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:gap-28 sm:grid-cols-3 mt-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="/blog" className="hover:underline">
                      Blogs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/about/#story" className="hover:underline">
                      Success Stories
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Case Studies
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Whitepapers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/faqs" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/solution/hiring-solutions#explore"
                      className="hover:underline"
                    >
                      Hiring Guides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/support" className="hover:underline">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Get Started
                </h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="/pricing" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/solution/hiring-solutions"
                      className="hover:underline"
                    >
                      Hiring Solutions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/solution/funded-startups"
                      className="hover:underline"
                    >
                      Funded Startups
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://app.everythingtalent.ai/login"
                      className="hover:underline"
                    >
                      Free Trial
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/support" className="hover:underline">
                      Contact Support
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Request Demo
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Trust
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/terms" className="hover:underline">
                      Terms of Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/terms" className="hover:underline">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/terms" className="hover:underline">
                      CCPA Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="relative">
          <Image
            alt="san fransisco skyline top hiring"
            loading="lazy"
            width="5503"
            height="1907"
            decoding="async"
            data-nimg="1"
            className="max-h-[26rem] h-full w-full mt-0 opacity-50"
            style="color:transparent"
            src="/bottom_san_fransisco_skyline.webp"
          />

          <div className="pointer-events-none absolute h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-[#000000]"></div>

          <div className="pointer-events-none absolute h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-[#000000]"></div>
        </section>
      </section>
      <section className="mx-auto md:container px-4 sm:px-6 ">
      {/* <FloatingText /> */}

        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm sm:text-center text-gray-400">
            © 2025
            <a href="https://usenextbase.com" className="hover:underline">
              Everything Talent Labs, LLC
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </section>
    </footer>
  );
}
