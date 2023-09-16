import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import MultiFooter from "./MultiFooter";
import SoloFooter from "./SoloFooter";

const Footer = () => {
  const playersSelected = useMemoryGameStore((state) =>
    Number(state.playersSelected)
  );

  if (playersSelected === 1) return <SoloFooter />;

  return <MultiFooter />;
};

export default Footer;
