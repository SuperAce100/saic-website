"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1f0000] to-transparent"
    >
      <div className="container mx-auto px-4 py-2 md:py-4">
        <Link href="/">
          <h1 className="text-sm md:text-lg text-white font-mono tracking-[0.5em] md:tracking-[1.5em] uppercase text-center">
            Stanford AI Club
          </h1>
        </Link>
      </div>
    </motion.nav>
  );
}
