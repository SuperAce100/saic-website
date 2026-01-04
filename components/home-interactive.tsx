"use client";

import { useQueryState } from "nuqs";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import MenuCard from "@/components/menu-card";
import SpeakerContent from "@/components/speaker-content";
import BoardContent from "@/components/board-content";
import JoinContent from "@/components/join-content";

export default function HomeInteractive() {
  const [view, setView] = useQueryState("view");

  const clearView = () => setView(null);

  return (
    <LayoutGroup>
      <div className="flex flex-col items-center w-full h-full relative z-10">
        <AnimatePresence mode="popLayout">
          {!view ? (
            <motion.div
              key="home"
              className="flex flex-col items-center justify-end w-full p-6 md:p-16 pb-24 md:pb-24 flex-1 gap-8 md:gap-16 h-full overflow-y-auto md:overflow-hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex flex-col w-full gap-4 mt-auto"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <motion.h1
                  layoutId="main-title"
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white max-w-2xl text-left"
                >
                  Stanford&apos;s home for students in AI
                </motion.h1>
                <p className="text-base md:text-lg text-white/60 max-w-xl">
                  Stanford AI Club is where students that shape the future of AI at Stanford come
                  together. From research to industry, the AI Club offers opportunities to connect
                  with titans of industry, learn from the best in the field, and find a place in the
                  AI native future.
                </p>
              </motion.div>
              <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 pb-4 md:pb-0">
                <motion.div
                  className="w-full h-40 sm:h-48 md:h-auto md:flex-1 md:aspect-square"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <MenuCard
                    layoutId="card-speakers"
                    title="Speakers"
                    image="/sam.png"
                    onClick={() => setView("speakers")}
                    className="w-full h-full"
                  />
                </motion.div>
                <motion.div
                  className="w-full h-40 sm:h-48 md:h-auto md:flex-1 md:aspect-square"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <MenuCard
                    layoutId="card-board"
                    title="Team"
                    image="/stanny.png"
                    onClick={() => setView("board")}
                    className="w-full h-full"
                  />
                </motion.div>
                <motion.div
                  className="w-full h-40 sm:h-48 md:h-auto md:flex-1 md:aspect-square"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <MenuCard
                    layoutId="card-join"
                    title="Get involved"
                    image="/mail.png"
                    onClick={() => setView("join")}
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              className="w-full flex flex-col h-full overflow-y-auto scrollbar-hide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full flex flex-col items-center p-4 pt-24">
                {/* Banner Area - constrained to max-w-4xl to match content */}
                {view === "speakers" && (
                  <div className="w-full max-w-4xl mx-auto">
                    <MenuCard
                      layoutId="card-speakers"
                      title="Speakers"
                      image="/sam.png"
                      onClick={clearView}
                      className="w-full h-64 mb-8"
                      isBanner={true}
                    />
                  </div>
                )}
                {view === "board" && (
                  <div className="w-full max-w-4xl mx-auto">
                    <MenuCard
                      layoutId="card-board"
                      title="Team"
                      image="/stanny.png"
                      onClick={clearView}
                      className="w-full h-64 mb-8"
                      isBanner={true}
                    />
                  </div>
                )}
                {view === "join" && (
                  <div className="w-full max-w-4xl mx-auto">
                    <MenuCard
                      layoutId="card-join"
                      title="Get involved"
                      image="/mail.png"
                      onClick={clearView}
                      className="w-full h-64 mb-8"
                      isBanner={true}
                    />
                  </div>
                )}

                {/* Content Area */}
                {view === "speakers" && <SpeakerContent />}
                {view === "board" && <BoardContent />}
                {view === "join" && <JoinContent />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
