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
  const activeBg = active ? "bg-charcoal" : "bg-lightPeriwinkle";

  const colorStyles = `${activeBg} active:bg-charcoal hover:bg-silverLakeBlue text-softWhite`;

  return (
    <Button
      text={text}
      classStyles={`${colorStyles} ${active && "bg-charcoal"}`}
      {...props}
    />
  );
};

export default ButtonMenuSelection;
