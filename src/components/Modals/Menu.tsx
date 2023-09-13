import CardLayout from "../../layouts/CardLayout";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const Menu = () => {
  return (
    <CardLayout customClasses="z-10 flex flex-col gap-4">
      <ButtonPrimary text="Restart" />
      <ButtonSecondary text="New Game" />
      <ButtonSecondary text="Resume Game" />
    </CardLayout>
  );
};

export default Menu;
