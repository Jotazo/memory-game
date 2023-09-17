import useScreenWidth from "../../../hooks/useScreenWidth";
import { Player } from "../../../interfaces/Player";
import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import CardFooter from "./CardFooter";

const MIN_TABLET_WIDTH = 768;

const MultiFooter = () => {
  const players = useMemoryGameStore((state) => state.players);

  const displayWidth = useScreenWidth();

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

  const getCardFooterTitle = (player: Player) => {
    const isMobile = displayWidth < MIN_TABLET_WIDTH;
    const { numPlayer } = player;
    return isMobile ? `P${numPlayer}` : `Player ${numPlayer}`;
  };

  return (
    <footer
      className={`grid ${gridCols} gap-4 md:self-center md:max-w-2xl md:w-full`}
    >
      {players.map((player) => (
        <CardFooter
          isSelected={player.isMyTurn}
          key={player.id}
          title={getCardFooterTitle(player)}
          customClasses="md:items-start md:gap-2"
        >
          {player.pairs}
        </CardFooter>
      ))}
    </footer>
  );
};

export default MultiFooter;
