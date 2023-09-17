import { SVGProps } from "../../interfaces/SVGProps";

const LetterJIcon: React.FC<SVGProps> = ({ customClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-letter-j md:w-[99px] ${customClasses}`}
      width="58"
      height="58"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4"></path>
    </svg>
  );
};

export default LetterJIcon;
