import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import CardLayout from "../../layouts/CardLayout";

import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const Menu = () => {
  const onResumeGame = useMemoryGameStore((state) => state.onResumeGame);
  const onRestartGame = useMemoryGameStore((state) => state.onRestartGame);
  const onReturnToMainMenu = useMemoryGameStore(
    (state) => state.onReturnToMainMenu
  );

  return (
    <CardLayout customClasses="z-10 flex flex-col gap-4">
      <ButtonPrimary onClick={onRestartGame} text="Restart" />
      <ButtonSecondary onClick={onReturnToMainMenu} text="New Game" />
      <ButtonSecondary onClick={onResumeGame} text="Resume Game" />
    </CardLayout>
  );
};

export default Menu;
