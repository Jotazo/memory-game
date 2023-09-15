import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import { GameThemes, GridSizes } from "../../../enums";

interface Props {
  children: React.ReactNode;
  handleClickItem: () => void;
  isClicked: boolean;
  isPaired: boolean;
}

const GridItem: React.FC<Props> = ({
  children,
  handleClickItem,
  isClicked,
  isPaired,
}) => {
  const themeSelected = useMemoryGameStore((state) => state.themeSelected);
  const gridSelected = useMemoryGameStore((state) => state.gridSelected);

  const isSmallIcons =
    themeSelected === GameThemes.Icons && gridSelected === GridSizes.Small;

  const customPadding =
    themeSelected === GameThemes.Numbers
      ? "p-2"
      : isSmallIcons
      ? "p-3"
      : "px-3";

  const circleBg = isClicked
    ? "bg-orange"
    : isPaired
    ? "bg-lightPeriwinkle"
    : "bg-charcoal";

  return (
    <span
      onClick={handleClickItem}
      className={`${circleBg} transition duration-300 text-center rounded-full ${customPadding}`}
    >
      {children}
    </span>
  );
};

export default GridItem;
