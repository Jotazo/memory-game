import { AnimatePresence } from "framer-motion";

import { useMemoryGameStore } from "./store/useMemoryGameStore";

import useMobile from "./hooks/useMobile";

import { Modals } from "./enums";

import { MainScreen, GameScreen, OnlyMobile } from "./pages";

import EndGameSolo from "./components/Modals/EndGameSolo";
import Modal from "./components/Modal";
import Menu from "./components/Modals/Menu";

function App() {
  const isMobile = useMobile();
  const gameStarted = useMemoryGameStore((state) => state.gameStarted);
  const modalToShow = useMemoryGameStore((state) => state.modalToShow);

  return (
    <div className="font-atkinson h-screen">
      {!isMobile ? (
        <OnlyMobile />
      ) : (
        <AnimatePresence>
          {gameStarted ? (
            <GameScreen key="gameScreen" />
          ) : (
            <MainScreen key="mainScreen" />
          )}
          {modalToShow && (
            <Modal>
              {modalToShow === Modals.Menu && <Menu key={Modals.Menu} />}
              {modalToShow === Modals.GameSolo && (
                <EndGameSolo key={Modals.GameSolo} />
              )}
              {modalToShow === Modals.GameMulti && (
                <span>UNDER CONSTRUCTION</span>
              )}
            </Modal>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
