"use client";
import { motion } from "framer-motion";
import { ImageDithering } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

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
        "relative rounded-2xl transition-all duration-200 p-6 group will-change-auto active:scale-95",
        !isBanner && "hover:bg-white/5 cursor-pointer",
        className
      )}
    >
      {isBanner && (
        <div
          className="absolute top-4 left-2 z-10 text-white/60 cursor-pointer px-4 py-2 text-lg group-hover:bg-white/5 rounded-md transition-colors duration-100 flex items-center gap-2"
          onClick={onClick}
        >
          <ArrowLeftIcon className="w-4 h-4 text-white/60" /> Back
        </div>
      )}
      <motion.h3
        layoutId={`${layoutId}-title`}
        className={cn(
          "text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center z-10",
          isBanner && "text-7xl"
        )}
      >
        {title}
      </motion.h3>
      <motion.div
        className={cn("absolute will-change-transform z-0 aspect-square top-0 right-0")}
        initial={false}
        animate={{
          width: isBanner ? "auto" : "100%",
          height: isBanner ? "18rem" : "100%",
          left: isBanner ? "auto" : "0%",
        }}
        layoutId={`${layoutId}-image`}
      >
        <ImageDithering
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            !isBanner && "group-hover:scale-105"
          )}
          width="100%"
          height="100%"
          image={image}
          colorBack="#00000000"
          colorFront="#ffffff"
          colorHighlight="#ffffff"
          originalColors={false}
          type="2x2"
          size={1}
          colorSteps={4}
          fit={isBanner ? "contain" : "cover"}
        />
      </motion.div>
    </motion.div>
  );
}
