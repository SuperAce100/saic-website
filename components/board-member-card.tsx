"use client";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { GraduationCapIcon } from "lucide-react";

export interface BoardMember {
  name: string;
  title: string;
  image?: string;
  links?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    googleScholar?: string;
    github?: string;
  };
}

export default function BoardMemberCard({
  name,
  title,
  image,
  links,
  index,
}: BoardMember & { index: number }) {
  return (
    <motion.div
      className="flex flex-col items-start text-left gap-3 transition-colors duration-200 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
    >
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white/10">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <div className="w-16 h-16 rounded-full bg-white/10" />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-medium text-white">{name}</h3>
        <p className="text-white/60 text-lg">{title}</p>
      </div>

      <div className="flex gap-4">
        {links?.linkedin && (
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
        )}
        {links?.twitter && (
          <Link
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <TwitterLogoIcon className="w-5 h-5" />
          </Link>
        )}
        {links?.website && (
          <Link
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <GlobeIcon className="w-5 h-5" />
          </Link>
        )}
        {links?.googleScholar && (
          <Link
            href={links.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <GraduationCapIcon className="w-5 h-5" />
          </Link>
        )}
        {links?.github && (
          <Link
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
