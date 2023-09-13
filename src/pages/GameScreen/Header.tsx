import { useMemoryGameStore } from "../../store/useMemoryGameStore";

import { Modals } from "../../enums";

import { ButtonPrimary } from "../../components/Buttons";

const Header = () => {
  const showModal = useMemoryGameStore((state) => state.showModal);
  const stopTimer = useMemoryGameStore((state) => state.stopTimer);

  const onPausedGame = () => {
    stopTimer();
    showModal(Modals.Menu);
  };

  return (
    <header className="flex justify-between items-center">
      <h3 className="text-2xl">memory</h3>
      <ButtonPrimary
        onClick={onPausedGame}
        fit
        text="Menu"
        classStyles="ml-auto w-fit"
      />
    </header>
  );
};

export default Header;
