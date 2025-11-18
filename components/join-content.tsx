import { motion } from "framer-motion";

export default function JoinContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto p-8 flex flex-col gap-6"
    >
      <div className="bg-white/5 rounded-2xl p-8 h-32 w-full animate-pulse" />
      <div className="bg-white/5 rounded-2xl p-8 h-32 w-full animate-pulse" />
      <div className="bg-white/5 rounded-2xl p-8 h-32 w-full animate-pulse" />
    </motion.div>
  );
}

