"use client";
import { motion } from "framer-motion";
import { ImageDithering } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  title: string;
  image: string;
  onClick?: () => void;
  layoutId: string;
  className?: string;
  isBanner?: boolean;
}

export default function MenuCard({
  title,
  image,
  onClick,
  layoutId,
  className,
  isBanner = false,
}: MenuCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-transparent hover:bg-white/5 transition-colors duration-100 p-6 group cursor-pointer",
        className
      )}
    >
      <motion.h3
        layoutId={`${layoutId}-title`}
        className="text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center z-10"
      >
        {title}
      </motion.h3>
      <div
        className={cn(
          "absolute inset-0 w-full h-full z-0 pointer-events-none",
          isBanner ? "flex justify-end items-center" : ""
        )}
      >
        <div
          className={cn(
            "w-full h-full transition-all duration-300",
            isBanner ? "w-1/2 h-full mix-blend-screen" : "group-hover:scale-105"
          )}
        >
          <ImageDithering
            className="w-full h-full object-cover mix-blend-screen"
            width="100%"
            height="100%"
            image={image}
            colorBack="#000000"
            colorFront="#ffffff"
            colorHighlight="#ffffff"
            originalColors={false}
            type="2x2"
            size={1}
            colorSteps={4}
            fit={isBanner ? "contain" : "cover"}
          />
        </div>
      </div>
    </motion.div>
  );
}
