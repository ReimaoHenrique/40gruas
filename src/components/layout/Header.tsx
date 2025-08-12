"use client";

import { useState } from "react";
import Image from "next/image";
import { NavigationMenu } from "./NavigationMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/models", label: "MODELOS" },
    { href: "/about", label: "SOBRE NÓS" },
    { href: "/contact", label: "CONTATO" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-primary">
            <Image src="/logo.svg" alt="Lux Models" width={120} height={40} />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu items={navigationItems} className="hidden md:flex" />

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
          />
        )}
      </div>
    </header>
  );
}
