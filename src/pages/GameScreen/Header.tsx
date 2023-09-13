import { ButtonPrimary } from "../../components/Buttons";
import { Modals } from "../../enums";
import { useMemoryGameStore } from "../../store/useMemoryGameStore";

const Header = () => {
  const showModal = useMemoryGameStore((state) => state.showModal);
  return (
    <header className="flex justify-between items-center">
      <h3 className="text-2xl">memory</h3>
      <ButtonPrimary
        onClick={() => showModal(Modals.Menu)}
        fit
        text="Menu"
        classStyles="ml-auto w-fit"
      />
    </header>
  );
};

export default Header;
