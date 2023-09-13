import { AnimatePresence } from "framer-motion";
import { MainScreen, GameScreen } from "./pages";
import { useMemoryGameStore } from "./store/useMemoryGameStore";
import EndGameSolo from "./components/Modals/EndGameSolo";
import Modal from "./components/Modal";
import Menu from "./components/Modals/Menu";

function App() {
  const gameStarted = useMemoryGameStore((state) => state.gameStarted);
  return (
    <div className="font-atkinson h-screen">
      <AnimatePresence>
        {/* {gameStarted ? <GameScreen key="gameScreen" /> : <MainScreen key="mainScreen" />} */}
        {/* <MainScreen /> */}
        <GameScreen />
      </AnimatePresence>
      <Modal>
        {/* <EndGameSolo /> */}
        <Menu />
      </Modal>
    </div>
  );
}

export default App;
