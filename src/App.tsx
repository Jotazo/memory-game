import { AnimatePresence } from "framer-motion";

import { useMemoryGameStore } from "./store/useMemoryGameStore";

import { Modals } from "./enums";

import { MainScreen, GameScreen } from "./pages";

import Modal from "./components/Modal";
import Menu from "./components/Modals/Menu";
import EndGameSolo from "./components/Modals/EndGameSolo";
import EndGameMulti from "./components/Modals/EndGameMulti";

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
            {modalToShow === Modals.Menu && <Menu key={Modals.Menu} />}
            {modalToShow === Modals.GameSolo && (
              <EndGameSolo key={Modals.GameSolo} />
            )}
            {modalToShow === Modals.GameMulti && (
              <EndGameMulti key={Modals.GameMulti} />
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
