"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TwitterLogoIcon, VideoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1f0000] to-transparent"
    >
      <div className="container mx-auto px-4 py-1.5 md:py-3 relative">
        <Link href="/">
          <h1 className="text-xs md:text-base text-white font-mono tracking-[0.4em] md:tracking-[1.2em] uppercase text-center">
            Stanford AI Club
          </h1>
        </Link>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <a
            href="https://twitter.com/stanfordaiclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-white/80"
            aria-label="Twitter"
          >
            <TwitterLogoIcon className="size-5" />
          </a>
          <a
            href="https://www.youtube.com/@OfficialStanfordAIClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-white/80"
            aria-label="YouTube"
          >
            <VideoIcon className="size-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
