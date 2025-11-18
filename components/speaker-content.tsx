import { motion } from "framer-motion";

export default function SpeakerContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 rounded-2xl p-6 h-64 animate-pulse" />
        <div className="bg-white/5 rounded-2xl p-6 h-64 animate-pulse" />
        <div className="bg-white/5 rounded-2xl p-6 h-64 animate-pulse" />
        <div className="bg-white/5 rounded-2xl p-6 h-64 animate-pulse" />
      </div>
    </motion.div>
  );
}

