import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import CardLayout from "../../layouts/CardLayout";

import Box from "../Box";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const EndGameSolo = () => {
  const moves = useMemoryGameStore((state) => state.moves);
  const stringTimer = useMemoryGameStore((state) => state.stringTimer);
  const hideModal = useMemoryGameStore((state) => state.hideModal);
  const returnToMainMenu = useMemoryGameStore(
    (state) => state.returnToMainMenu
  );
  const resetConfig = useMemoryGameStore((state) => state.resetConfig);
  const resetTimer = useMemoryGameStore((state) => state.resetTimer);

  const onBackToMainMenu = () => {
    hideModal();
    returnToMainMenu();
    resetConfig();
    resetTimer();
  };

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
      <ButtonPrimary text="Restart" />
      <ButtonSecondary onClick={onBackToMainMenu} text="Back to Main Menu" />
    </CardLayout>
  );
};

export default EndGameSolo;
