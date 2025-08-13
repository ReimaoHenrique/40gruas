"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { NavigationMenu } from "./NavigationMenu";

interface NavigationItem {
  href: string;
  label: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigationItems: NavigationItem[] = [
    { href: "/models", label: "MODELOS" },
    { href: isHomePage ? "#about" : "/", label: "SOBRE NÓS" },
    { href: "/contact", label: "CONTATO" },
  ];

  const handleNavigation = (item: NavigationItem) => {
    if (item.href.startsWith("#")) {
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-primary">
            <Image
              src="/datasynk.svg"
              alt="Datasynk - Desenvolvimento Web"
              width={120}
              height={40}
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu
            items={navigationItems}
            className="hidden md:flex"
            onNavigation={handleNavigation}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <NavigationMenu
            items={navigationItems}
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
            mobile
            onNavigation={handleNavigation}
          />
        )}
      </div>
    </header>
  );
}
