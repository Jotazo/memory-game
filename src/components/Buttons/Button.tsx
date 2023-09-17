import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fit?: boolean;
  classStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  fit,
  classStyles,
  ...props
}) => {
  return (
    <button
      className={`${
        fit ? "w-fit" : "w-full"
      } transition text-lg sm:text-xl md:text-2xl px-7 py-[10px] rounded-full tracking-wide ${classStyles}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
