import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import { Modals } from "../../enums";

import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons";

const Header = () => {
  const showModal = useMemoryGameStore((state) => state.showModal);
  const stopTimer = useMemoryGameStore((state) => state.stopTimer);

  const onPausedGame = () => {
    stopTimer();
    showModal(Modals.Menu);
  };

  return (
    <header className="flex justify-between items-center">
      <h3 className="text-2xl md:text-[40px]">memory</h3>
      <ButtonPrimary
        onClick={onPausedGame}
        fit
        text="Menu"
        classStyles="ml-auto w-fit md:hidden"
      />
      <div className="hidden ml-auto md:flex gap-4">
        <ButtonPrimary onClick={() => {}} fit text="Restart" />
        <ButtonSecondary onClick={() => {}} text="Back to Menu" />
      </div>
    </header>
  );
};

export default Header;
