import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import CardFooter from "./CardFooter";
import Timer from "../Timer";

const SoloFooter = () => {
  const moves = useMemoryGameStore((state) => state.moves);
  return (
    <footer className="grid grid-cols-2 gap-4">
      <CardFooter title="Time">
        <Timer />
      </CardFooter>
      <CardFooter title="Moves">{moves}</CardFooter>
    </footer>
  );
};

export default SoloFooter;