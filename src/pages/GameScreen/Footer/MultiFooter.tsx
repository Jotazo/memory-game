import { useMemoryGameStore } from "../../../store/useMemoryGameStore";
import CardFooter from "./CardFooter";

const MultiFooter = () => {
  const players = useMemoryGameStore((state) => state.players);

  const getPlayersGrid = (numPlayer: number) => {
    switch (numPlayer) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      default:
        throw new Error("No es posible?!");
    }
  };

  const gridCols = getPlayersGrid(players.length);

  return (
    <footer className={`grid ${gridCols} gap-4`}>
      {players.map((player) => (
        <CardFooter
          isSelected={player.isMyTurn}
          key={player.id}
          title={`P${player.numPlayer}`}
        >
          {player.pairs}
        </CardFooter>
      ))}
    </footer>
  );
};

export default MultiFooter;
