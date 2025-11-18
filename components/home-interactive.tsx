"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import MenuCard from "@/components/menu-card";
import SpeakerContent from "@/components/speaker-content";
import BoardContent from "@/components/board-content";
import JoinContent from "@/components/join-content";

export default function HomeInteractive() {
  const [view, setView] = useQueryState("view");
  const [isHovered, setIsHovered] = useState(false);

  const clearView = () => setView(null);

  return (
    <LayoutGroup>
      <div className="flex flex-col items-center w-full h-full relative z-10">
        <AnimatePresence mode="popLayout">
          {!view ? (
            <motion.div
              key="home"
              className="flex flex-col items-center justify-end w-full p-16 flex-1 gap-16 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-row items-center w-full gap-8">
                <motion.h1
                  layoutId="main-title"
                  className="text-8xl font-medium tracking-tight text-white max-w-2xl text-left cursor-default"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  Stanford&apos;s home for students in AI
                </motion.h1>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="text-xl text-white/60 max-w-sm"
                    >
                      Stanford AI Club is where students that shape the future of AI at Stanford
                      come together. From research to industry, the AI Club offers opportunities to
                      connect with titans of industry, learn from the best in the field, and find a
                      place in the AI native future.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-row items-center justify-center w-full gap-4">
                <MenuCard
                  layoutId="card-speakers"
                  title="Speakers"
                  image="/sam.png"
                  onClick={() => setView("speakers")}
                  className="flex-1 aspect-square"
                />
                <MenuCard
                  layoutId="card-board"
                  title="Board"
                  image="/stanny.png"
                  onClick={() => setView("board")}
                  className="flex-1 aspect-square"
                />
                <MenuCard
                  layoutId="card-join"
                  title="Join"
                  image="/mail.png"
                  onClick={() => setView("join")}
                  className="flex-1 aspect-square"
                />
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
                      title="Board"
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
                      title="Join"
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
