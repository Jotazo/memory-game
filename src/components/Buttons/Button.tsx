import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  classStyles,
  ...props
}) => {
  return (
    <button
      className={`w-full transition text-lg sm:text-xl px-7 py-[10px] rounded-full tracking-wide ${classStyles}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
