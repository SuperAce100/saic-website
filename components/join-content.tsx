"use client";
import { motion } from "framer-motion";

export default function JoinContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full h-full space-y-8 p-6 py-0 max-w-4xl mx-auto"
    >
      <h5 className="text-2xl text-white/60 max-w-2xl ">
        Stay updated with the latest events, workshops, and exclusive opportunities in AI at
        Stanford with the AI Club mailing list.
      </h5>

      <motion.a
        className="group block p-2 w-fit "
        href={"https://mailman.stanford.edu/mailman/listinfo/saic-members"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className=" bg-transparent bg-linear-to-b from-[#ac1515]/60 to-[#ac1515]/10 flex items-center justify-center rounded-full group-hover:-translate-y-px transition-all duration-200 shadow-lg hover:shadow-2xl py-4 px-16 inset-shadow-sm inset-shadow-white/30 font-medium tracking-tight text-white text-4xl active:scale-95 hover:bg-[#ac1515]/30">
          Get on the list
        </div>
      </motion.a>
    </motion.div>
  );
}
// "https://mailman.stanford.edu/mailman/listinfo/saic-members"
