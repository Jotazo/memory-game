import { SVGProps } from "../../interfaces/SVGProps";

const LibraIcon: React.FC<SVGProps> = ({ customClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-zodiac-libra ${customClasses}`}
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
      <path d="M5 20l14 0"></path>
      <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"></path>
    </svg>
  );
};

export default LibraIcon;
