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
    <CardLayout customClasses="flex flex-col gap-6 md:gap-8 z-10">
      <header className="flex flex-col gap-4">
        <h3 className="text-center md:text-5xl">You did it!</h3>
        <p className="text-center text-sm md:text-lg text-shadowBlue">
          Game over! Here’s how you got on…
        </p>
      </header>
      <section className="flex flex-col gap-2 md:gap-4">
        <Box direction="row" title="Time Elapsed">
          {stringTimer}
        </Box>
        <Box direction="row" title="Moves Taken">
          {moves} Moves
        </Box>
      </section>
      <section className="flex flex-col gap-2 md:gap-4 md:flex-row">
        <ButtonPrimary onClick={onRestartGame} text="Restart" />
        <ButtonSecondary
        
          onClick={onReturnToMainMenu}
          text="Back to Menu"
        />
      </section>
    </CardLayout>
  );
};

export default EndGameSolo;
