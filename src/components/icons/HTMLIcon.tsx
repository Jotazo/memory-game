import { SVGProps } from "../../interfaces/SVGProps";

const HTMLIcon: React.FC<SVGProps> = ({ customClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-html md:w-[99px] ${customClasses}`}
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
      <path d="M13 16v-8l2 5l2 -5v8"></path>
      <path d="M1 16v-8"></path>
      <path d="M5 8v8"></path>
      <path d="M1 12h4"></path>
      <path d="M7 8h4"></path>
      <path d="M9 8v8"></path>
      <path d="M20 8v8h3"></path>
    </svg>
  );
};

export default HTMLIcon;
