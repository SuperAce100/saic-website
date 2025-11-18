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
              className="flex flex-col items-center justify-end w-full p-16 flex-1 gap-16 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h1
                layoutId="main-title"
                className="text-8xl font-medium tracking-tight text-white max-w-2xl text-left mr-auto"
              >
                Stanford&apos;s home for students in AI
              </motion.h1>
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
              <div className="w-full p-4 pt-24">
                 {/* Banner Area */}
                {view === "speakers" && (
                  <MenuCard
                    layoutId="card-speakers"
                    title="Speakers"
                    image="/sam.png"
                    onClick={clearView}
                    className="w-full h-64 mb-8"
                    isBanner={true}
                  />
                )}
                {view === "board" && (
                  <MenuCard
                    layoutId="card-board"
                    title="Board"
                    image="/stanny.png"
                    onClick={clearView}
                    className="w-full h-64 mb-8"
                    isBanner={true}
                  />
                )}
                {view === "join" && (
                  <MenuCard
                    layoutId="card-join"
                    title="Join"
                    image="/mail.png"
                    onClick={clearView}
                    className="w-full h-64 mb-8"
                    isBanner={true}
                  />
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
