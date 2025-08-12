"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NavigationItem {
  href: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { href: "/", label: "INÍCIO" },
  { href: "/models", label: "MODELOS" },
  { href: "/workshops", label: "WORKSHOPS" },
  { href: "/about", label: "SOBRE" },
  { href: "/contact", label: "CONTATO" },
];

export function AnimatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.header
      className={`fixed-header border-b transition-all duration-300 ${
        scrolled ? "border-white/20" : "border-yellow-800/30"
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.25)" : "rgb(212, 175, 55)",
        backdropFilter: scrolled ? "blur(25px) saturate(180%)" : "none",
        border: scrolled
          ? "1px solid rgba(255, 255, 255, 0.18)"
          : "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        position: "relative",
      }}
    >
      {/* Efeito de brilho no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: scrolled
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />
      <div className="container mx-auto px-4 py-4 relative">
        {/* Borda interna sutil para profundidade */}
        <div
          className="absolute inset-0 rounded-b-lg opacity-30"
          style={{
            boxShadow: scrolled
              ? "inset 0 1px 0 rgba(255,255,255,0.1)"
              : "inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        />
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-2xl font-serif font-bold"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/40graus_Logo.jpg"
                alt="40grausbahia"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span
                className={`font-bold ${
                  scrolled ? "text-white" : "text-gray-800"
                }`}
              >
                40grausbahia
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navigationItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`font-medium relative group transition-colors ${
                    item.label === "SOBRE"
                      ? "text-yellow-400 hover:text-yellow-300"
                      : scrolled
                      ? "text-white hover:text-yellow-400"
                      : "text-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      item.label === "SOBRE"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                        : scrolled
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                        : "bg-gradient-to-r from-white to-gray-100"
                    }`}
                    initial={{ width: item.label === "SOBRE" ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 relative z-50 rounded-lg transition-colors ${
              scrolled ? "hover:bg-white/20" : "hover:bg-white/30"
            }`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`w-6 h-0.5 block mb-1 rounded-full ${
                  scrolled ? "bg-white" : "bg-gray-900"
                }`}
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className={`w-6 h-0.5 block mb-1 rounded-full ${
                  scrolled ? "bg-white" : "bg-gray-900"
                }`}
                animate={
                  isMenuOpen
                    ? { opacity: 0, scale: 0 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className={`w-6 h-0.5 block rounded-full ${
                  scrolled ? "bg-white" : "bg-gray-900"
                }`}
                animate={
                  isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full border-t border-white/20"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                backgroundColor: scrolled
                  ? "rgba(0, 0, 0, 0.9)"
                  : "rgb(212, 175, 55)",
                backdropFilter: scrolled ? "blur(25px) saturate(180%)" : "none",
                border: scrolled
                  ? "1px solid rgba(255, 255, 255, 0.15)"
                  : "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: scrolled
                  ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
                  : "0 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="container mx-auto px-4 py-8">
                <motion.nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl md:text-2xl font-semibold transition-all duration-300 block py-3 px-4 rounded-lg ${
                          item.label === "SOBRE"
                            ? "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                            : scrolled
                            ? "text-white hover:text-yellow-400 hover:bg-white/10"
                            : "text-white hover:text-gray-900 hover:bg-white/20"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
