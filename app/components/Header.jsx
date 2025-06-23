"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, Moon, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-100 dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent mt-3">
      <nav className="flex h-14 items-center justify-between px-4 md:container md:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Logo */}
          <div className="block lg:hidden border rounded-lg shadow-lg dark:border-slate-300/30 border-slate-700/30">
            <Link href="/">
              <div className="flex items-center gap-2 px-4 py-1 backdrop-blur bg-slate-200/20 rounded-lg">
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
                <span className="font-bold text-black dark:text-white">
                  Everything Talent
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex rounded-lg border border-slate-700/30 dark:border-slate-300/30 shadow-lg backdrop-blur bg-slate-200/40 dark:bg-black/40 px-4 py-1">
            <NavigationMenuList className="flex items-center gap-8">
              <NavigationMenuItem>
                <Link href="/" className="flex items-center gap-2">
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
                </Link>
              </NavigationMenuItem>
              <div className="h-[30px] w-px bg-slate-700/30 dark:bg-slate-300/30" />
              <NavigationMenuItem>
                <Link href="/" className="text-sm text-slate-950 dark:text-slate-50">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/products"
                  className="text-sm text-slate-950 dark:text-slate-50"
                >
                  Products
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button className="flex items-center text-sm text-slate-950 dark:text-slate-50">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className="text-sm text-slate-950 dark:text-slate-50"
                >
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className="text-sm text-slate-950 dark:text-slate-50"
                >
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/support"
                  className="text-sm text-slate-950 dark:text-slate-50"
                >
                  Support
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="text-sm font-bold text-customPurple hover:text-customPurple"
                >
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button className="text-sm flex items-center gap-1 animate-rainbow">
              Request a Demo <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-1">
            <ModeToggle />
          </div>

          <div className="hidden lg:block">
            <Button variant="ghost" className="text-sm animate-rainbow">
              Login
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
