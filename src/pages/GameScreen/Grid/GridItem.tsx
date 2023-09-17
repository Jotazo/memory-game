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

  const mdMinHeight =
    gridSelected === GridSizes.Small
      ? "md:min-h-[128px] lg:min-w-[111px] lg:min-h-[111px] lg:max-w-[118px]"
      : "md:min-h-[86px] lg:w-[75px] lg:min-h-0 lg:h-[75px]";

  return (
    <span
      onClick={handleClickItem}
      className={`${circleBg} transition duration-300 cursor-pointer text-center rounded-full lg:mx-auto ${mdMinHeight} ${customPadding}`}
    >
      {children}
    </span>
  );
};

export default GridItem;
