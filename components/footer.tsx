"use client";

import { TwitterLogoIcon, VideoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="absolute bottom-4 w-full flex justify-center items-center z-50 pointer-events-auto">
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/60">
        <span className="text-sm font-medium">Stanford AI Club</span>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/stanfordaiclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <TwitterLogoIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@StanfordAIClub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <VideoIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

