import { SVGProps } from "../../interfaces/SVGProps";

const PillIcon: React.FC<SVGProps> = ({ customClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-pill ${customClasses}`}
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
      <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"></path>
      <path d="M8.5 8.5l7 7"></path>
    </svg>
  );
};

export default PillIcon;
