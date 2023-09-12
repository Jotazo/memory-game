import { useMemoryGameStore } from "../../store/useMemoryGameStore";

const Timer = () => {
  const stringTimer = useMemoryGameStore((state) => state.stringTimer);

  return <>{stringTimer}</>;
};

export default Timer;
