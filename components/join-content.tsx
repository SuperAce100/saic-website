"use client";
import { motion } from "framer-motion";
import { TwitterLogoIcon, VideoIcon } from "@radix-ui/react-icons";

export default function JoinContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full h-full space-y-8 p-6 py-0 max-w-4xl mx-auto flex flex-col justify-center"
    >
      <div className="space-y-4">
        <h5 className="text-lg md:text-xl text-white/60 max-w-2xl">
          Subscribe to our mailing list and follow us on social media to keep up with the latest
          events, workshops, and exclusive opportunities in AI at Stanford.
        </h5>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <motion.a
          className="group block w-fit"
          href="https://mailman.stanford.edu/mailman/listinfo/saic-members"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-transparent bg-linear-to-b from-[#ac1515]/60 to-[#ac1515]/10 flex items-center justify-center rounded-full group-hover:-translate-y-px transition-all duration-200 shadow-lg hover:shadow-2xl py-3 px-8 inset-shadow-sm inset-shadow-white/30 font-medium tracking-tight text-white text-lg active:scale-95 hover:bg-[#ac1515]/30 border border-white/10">
            Join Mailing List
          </div>
        </motion.a>

        <div className="flex gap-4">
          <motion.a
            className="group block w-fit"
            href="https://twitter.com/stanfordaiclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white/5 flex items-center justify-center rounded-full group-hover:-translate-y-px transition-all duration-200 shadow-lg hover:shadow-2xl p-3 inset-shadow-sm inset-shadow-white/10 text-white active:scale-95 hover:bg-white/10 border border-white/10">
              <TwitterLogoIcon className="w-6 h-6" />
            </div>
          </motion.a>

          <motion.a
            className="group block w-fit"
            href="https://www.youtube.com/@StanfordAIClub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white/5 flex items-center justify-center rounded-full group-hover:-translate-y-px transition-all duration-200 shadow-lg hover:shadow-2xl p-3 inset-shadow-sm inset-shadow-white/10 text-white active:scale-95 hover:bg-white/10 border border-white/10">
              <VideoIcon className="w-6 h-6" />
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
