import CardLayout from "../../layouts/CardLayout";
import { useMemoryGameStore } from "../../store/useMemoryGameStore";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const Menu = () => {
  const hideModal = useMemoryGameStore((state) => state.hideModal);
  const startTimer = useMemoryGameStore((state) => state.startTimer);
  const resetTimer = useMemoryGameStore((state) => state.resetTimer);
  const returnToMainMenu = useMemoryGameStore(
    (state) => state.returnToMainMenu
  );

  const onRestartGame = () => {};

  const onResumeGame = () => {
    hideModal();
    startTimer();
  };

  const onReturnToMainMenu = () => {
    hideModal();
    returnToMainMenu();
    resetTimer();
  };

  return (
    <CardLayout customClasses="z-10 flex flex-col gap-4">
      <ButtonPrimary onClick={onRestartGame} text="Restart" />
      <ButtonSecondary onClick={onReturnToMainMenu} text="New Game" />
      <ButtonSecondary onClick={onResumeGame} text="Resume Game" />
    </CardLayout>
  );
};

export default Menu;
