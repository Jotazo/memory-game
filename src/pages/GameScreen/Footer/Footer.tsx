import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import Timer from "../Timer";

const Footer = () => {
  const moves = useMemoryGameStore((state) => state.moves);
  return (
    <footer className="grid grid-cols-2 gap-4">
      <article className="bg-[#DFE7EC] py-2">
        <p className="text-center text-sm text-shadowBlue">Time</p>
        <p className="text-center text-2xl text-charcoal">
          <Timer />
        </p>
      </article>
      <article className="bg-[#DFE7EC] py-2">
        <p className="text-center text-sm text-shadowBlue">Moves</p>
        <p className="text-center text-2xl text-charcoal">{moves}</p>
      </article>
    </footer>
  );
};

export default Footer;
