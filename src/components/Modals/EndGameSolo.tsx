import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import CardLayout from "../../layouts/CardLayout";

import Box from "../Box";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const EndGameSolo = () => {
  const moves = useMemoryGameStore((state) => state.moves);
  const stringTimer = useMemoryGameStore((state) => state.stringTimer);
  const onReturnToMainMenu = useMemoryGameStore(
    (state) => state.onReturnToMainMenu
  );
  const onRestartGame = useMemoryGameStore((state) => state.onRestartGame);

  return (
    <CardLayout customClasses="flex flex-col gap-3 z-10">
      <h3 className="text-center">You did it!</h3>
      <p className="text-center text-sm text-shadowBlue">
        Game over! Here’s how you got on…
      </p>
      <Box direction="row" title="Time Elapsed">
        {stringTimer}
      </Box>
      <Box direction="row" title="Moves Taken">
        {moves} Moves
      </Box>
      <ButtonPrimary onClick={onRestartGame} text="Restart" />
      <ButtonSecondary onClick={onReturnToMainMenu} text="Back to Main Menu" />
    </CardLayout>
  );
};

export default EndGameSolo;
