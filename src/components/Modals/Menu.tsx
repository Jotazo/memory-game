import CardLayout from "../../layouts/CardLayout";
import { useMemoryGameStore } from "../../store/useMemoryGameStore";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const Menu = () => {
  const hideModal = useMemoryGameStore((state) => state.hideModal);
  return (
    <CardLayout customClasses="z-10 flex flex-col gap-4">
      <ButtonPrimary text="Restart" />
      <ButtonSecondary text="New Game" />
      <ButtonSecondary onClick={() => hideModal()} text="Resume Game" />
    </CardLayout>
  );
};

export default Menu;
