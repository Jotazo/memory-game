import { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fit?: boolean;
  classStyles?: string;
  active?: boolean;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ text, fit, classStyles }) => {
  const primaryStyles = "bg-orange hover:bg-[#FFB84A] text-softWhite";
  return (
    <Button
      text={text}
      fit={fit}
      classStyles={`${primaryStyles} ${classStyles}`}
    />
  );
};

export default ButtonPrimary;
