import { ButtonPrimary } from "../../components/Buttons";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h3 className="text-2xl">memory</h3>
      <ButtonPrimary fit text="Menu" classStyles="ml-auto w-fit" />
    </header>
  );
};

export default Header;
