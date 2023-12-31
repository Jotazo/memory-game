import { SVGProps } from "../../interfaces/SVGProps";

const GeminiIcon: React.FC<SVGProps> = ({ customClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-zodiac-gemini ${customClasses}`}
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
      <path d="M3 3a21 21 0 0 0 18 0"></path>
      <path d="M3 21a21 21 0 0 1 18 0"></path>
      <path d="M7 4.5l0 15"></path>
      <path d="M17 4.5l0 15"></path>
    </svg>
  );
};

export default GeminiIcon;
