import { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({ text, ...props }) => {
  const secondaryStyles =
    "bg-[#DFE7EC] hover:bg-silverLakeBlue text-charcoal hover:text-softWhite";
  return <Button text={text} classStyles={secondaryStyles} {...props} />;
};

export default ButtonSecondary;
