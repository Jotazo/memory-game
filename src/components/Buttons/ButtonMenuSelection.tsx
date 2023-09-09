import { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classStyles?: string;
  active?: boolean;
}

const ButtonMenuSelection: React.FC<ButtonProps> = ({
  text,
  active = false,
  ...props
}) => {
  const colorStyles =
    "active:bg-charcoal hover:bg-silverLakeBlue bg-lightPeriwinkle text-softWhite";

  return (
    <Button
      text={text}
      classStyles={`${colorStyles} ${active && "bg-charcoal"}`}
      {...props}
    />
  );
};

export default ButtonMenuSelection;
