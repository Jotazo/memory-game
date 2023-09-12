import { AnimatePresence } from "framer-motion";
import { MainScreen, GameScreen } from "./pages";
import { useMemoryGameStore } from "./store/useMemoryGameStore";

function App() {
  const gameStarted = useMemoryGameStore((state) => state.gameStarted);
  return (
    <div className="font-atkinson h-screen">
      <AnimatePresence>
        {/* {gameStarted ? <GameScreen key="gameScreen" /> : <MainScreen key="mainScreen" />} */}
        {/* <MainScreen /> */}
        <GameScreen />
      </AnimatePresence>
    </div>
  );
}

export default App;

