import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import CardLayout from "../../layouts/CardLayout";

import Box from "../Box";

import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const EndGameMulti = () => {
  const players = useMemoryGameStore((state) => state.players);
  const onRestartGame = useMemoryGameStore((state) => state.onRestartGame);
  const onReturnToMainMenu = useMemoryGameStore(
    (state) => state.onReturnToMainMenu
  );

  const isTie = players.filter((player) => player.isWinner).length > 1;
  const winnerPlayer = !isTie
    ? players.find((player) => player.isWinner)
    : null;

  const playersSorted = [...players];

  playersSorted.sort((playA, playB) => {
    if (playA.pairs > playB.pairs) return -1;
    if (playA.pairs < playB.pairs) return 1;
    else {
      if (playA.numPlayer > playB.numPlayer) return -1;
      return 1;
    }
  });

  return (
    <CardLayout customClasses="flex flex-col gap-3 z-10">
      <h3 className="text-center">
        {isTie ? "It's a tie" : `Player ${winnerPlayer?.numPlayer} Wins!`}
      </h3>
      <p className="text-center text-sm text-shadowBlue">
        Game over! Here are the results...
      </p>
      {playersSorted.map((player) => (
        <Box
          key={player.id}
          direction="row"
          isWinner={player.isWinner}
          title={`Player ${player.numPlayer} ${
            player.isWinner ? "(Winner!)" : ""
          }`}
        >
          {player.pairs} Pairs
        </Box>
      ))}
      <ButtonPrimary onClick={onRestartGame} text="Restart" />
      <ButtonSecondary onClick={onReturnToMainMenu} text="Back to Main Menu" />
    </CardLayout>
  );
};

export default EndGameMulti;
