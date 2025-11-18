import { motion, stagger } from "framer-motion";
import { CalendarIcon } from "@radix-ui/react-icons";

const speakers = [
  {
    name: "Parag Agrawal",
    role: "Founder & CEO, Parallel Web Systems",
    background: "Former CEO of Twitter",
    date: new Date("2025-10-02 18:00:00"),
  },
  {
    name: "Ishan Mukherjee",
    role: "CEO, Rox",
    background: "Founder of Rox, building the AI native CRM.",
    date: new Date("2025-10-08 18:00:00"),
  },
  {
    name: "Dan Fu",
    role: "Professor, UCSD",
    background:
      "Creator of FlashAttention and ThunderKittens, foundational systems ML GPU kernels.",
    date: new Date("2025-10-13 17:00:00"),
  },
  {
    name: "Jason Wei",
    role: "Researcher, Meta Superintelligence Labs",
    background: "Co-developed Chain-of-Thought reasoning models at OpenAI - o1, o3.",
    date: new Date("2025-10-16 18:00:00"),
  },
  {
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    background: "Founder of Vercel and Next.js.",
    date: new Date("2025-11-04 15:00:00"),
  },
  {
    name: "Jeff Dean",
    role: "Chief Scientist, Google",
    background: "Leads all research at Google, Google DeepMind, Waymo, etc.",
    date: new Date("2025-11-18 17:00:00"),
  },
];

export default function SpeakerContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto p-6 flex flex-col gap-8"
    >
      {speakers
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              y: { duration: 0.2, delay: index * 0.05 },
            }}
            className="group relative rounded-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-2xl font-medium text-white transition-colors">
                    {speaker.name}
                  </h3>
                  <span className="text-white/60 text-lg font-medium">{speaker.role}</span>
                </div>
                <p className="text-white/40 text-md leading-relaxed truncate group-hover:whitespace-normal transition-all">
                  {speaker.background}
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-wider whitespace-nowrap shrink-0 px-3 py-1.5 rounded-sm">
                <CalendarIcon className="w-3 h-3" />
                <span>
                  {speaker.date.toLocaleDateString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
}
