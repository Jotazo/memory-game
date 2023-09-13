import { AnimatePresence } from "framer-motion";

import { useMemoryGameStore } from "./store/useMemoryGameStore";

import { Modals } from "./enums";

import { MainScreen, GameScreen } from "./pages";

import EndGameSolo from "./components/Modals/EndGameSolo";
import Modal from "./components/Modal";
import Menu from "./components/Modals/Menu";

function App() {
  const gameStarted = useMemoryGameStore((state) => state.gameStarted);
  const modalToShow = useMemoryGameStore((state) => state.modalToShow);

  return (
    <div className="font-atkinson h-screen">
      <AnimatePresence>
        {gameStarted ? (
          <GameScreen key="gameScreen" />
        ) : (
          <MainScreen key="mainScreen" />
        )}
        {modalToShow && (
          <Modal>
            {modalToShow === Modals.Menu && <Menu />}
            {modalToShow === Modals.GameSolo && <EndGameSolo />}
            {modalToShow === Modals.GameMulti && (
              <span>UNDER CONSTRUCTION</span>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
