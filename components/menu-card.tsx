"use client";
import Link from "next/link";
import { ImageDithering } from "@paper-design/shaders-react";
import { useState } from "react";

export default function MenuCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="flex-1 aspect-square rounded-2xl border border-transparent hover:border-white/30 hover:bg-white/5  transition-all duration-100 p-6 relative overflow-hidden"
    >
      <h3 className="text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center">
        {title}
      </h3>
      <ImageDithering
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
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
        fit="cover"
      />
    </Link>
  );
}
