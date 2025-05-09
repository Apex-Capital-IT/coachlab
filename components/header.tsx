"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-3xl shadow-md rounded-b-2xl"
          : "bg-transparent"
      }`}
      style={{
        opacity: headerOpacity,
        width: headerWidth,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-xl">CoachLab Mongolia</span>
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-8">
            <NavLinks />
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-[white] shadow-lg rounded-b-2xl py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <nav className="flex flex-col space-y-4 px-6">
            <NavLinks mobile onClick={toggleMobileMenu} />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

// Navigation Links Component
function NavLinks({ mobile = false, onClick = () => {} }) {
  const linkClasses = mobile
    ? "flex items-center py-2 text-foreground hover:text-[#2a7d5f] transition-colors"
    : "hover:text-foreground text-blacks font-bold";

  return (
    <>
      <Link href="/teachers" className={linkClasses} onClick={onClick}>
        Teachers
      </Link>
      <Link href="/classes" className={linkClasses} onClick={onClick}>
        Classes
      </Link>
      <Link href="/about" className={linkClasses} onClick={onClick}>
        About Us
      </Link>
    </>
  );
}
