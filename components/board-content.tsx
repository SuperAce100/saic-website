import { motion } from "framer-motion";
import BoardMemberCard, { BoardMember } from "@/components/board-member-card";

const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Jason Zhang",
    title: "Speaker Series",
    image: "/board/jason.png",
    links: {
      linkedin: "https://www.linkedin.com/in/jason-zhang-6860361b8/",
      twitter: "https://x.com/minisounds",
      website: "https://jasonzhang.info",
      googleScholar: "https://scholar.google.com/citations?user=LY1rce8AAAAJ&hl=en&authuser=1",
    },
  },
  {
    name: "Board Member",
    title: "Role TBD",
  },
  {
    name: "Board Member",
    title: "Role TBD",
  },
  {
    name: "Board Member",
    title: "Role TBD",
  },
  {
    name: "Board Member",
    title: "Role TBD",
  },
  {
    name: "Board Member",
    title: "Role TBD",
  },
];

export default function BoardContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-start items-start ">
        {BOARD_MEMBERS.map((member, index) => (
          <BoardMemberCard key={index} {...member} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
