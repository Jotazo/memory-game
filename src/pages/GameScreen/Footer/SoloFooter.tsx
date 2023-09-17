import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import CardFooter from "./CardFooter";
import Timer from "../Timer";

const SoloFooter = () => {
  const moves = useMemoryGameStore((state) => state.moves);
  return (
    <footer className="grid grid-cols-2 gap-4 md:self-center md:max-w-xl md:w-full">
      <CardFooter title="Time" customClasses="md:justify-between md:flex-row lg:p-5">
        <Timer />
      </CardFooter>
      <CardFooter title="Moves" customClasses="md:justify-between md:flex-row lg:p-5">
        {moves}
      </CardFooter>
    </footer>
  );
};

export default SoloFooter;
