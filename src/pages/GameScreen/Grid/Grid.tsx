import { useEffect } from "react";
import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import { GameThemes, GridSizes } from "../../../enums";
import iconsArr from "../../../components/icons/iconsArr";

import GridItem from "./GridItem";

const Grid = () => {
  const memoryGame = useMemoryGameStore((state) => state.board);
  const pairHandled = useMemoryGameStore((state) => state.pairHandled);
  const sizeSelected = useMemoryGameStore((state) => state.gridSelected);
  const themeSelected = useMemoryGameStore((state) => state.themeSelected);
  const onItemClicked = useMemoryGameStore((state) => state.onItemClicked);
  const refreshBoard = useMemoryGameStore((state) => state.refreshBoard);

  const isIcons = themeSelected === GameThemes.Icons;

  useEffect(() => {
    if (pairHandled) refreshBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairHandled]);

  const gridCols =
    sizeSelected === GridSizes.Small ? "grid-cols-4" : "grid-cols-6"; // Fix 6x6 grid

  return (
    <main
      className={`grid ${gridCols} gap-1 w-full max-w-[440px] md:self-center md:max-w-xl md:gap-4 lg:gap-1 lg:gap-x-0`}
    >
      {memoryGame.map((row) => {
        return row.map((item) => {
          const showChildren = item.isClicked || item.isPaired;
          const Component = isIcons ? iconsArr[item.pairedValue] : null;
          return (
            <GridItem
              isClicked={item.isClicked}
              isPaired={item.isPaired}
              handleClickItem={() => onItemClicked(item)}
              key={item.id}
            >
              <span
                className={`${
                  showChildren ? "opacity-1" : "opacity-0"
                } text-softWhite ${
                  sizeSelected === GridSizes.Small
                    ? "text-[42px] md:text-[75px] lg:text-[62px]"
                    : "text-[24px] md:text-[45px] lg:text-[40px]"
                } flex justify-center items-center`}
              >
                {isIcons && Component ? <Component /> : item.pairedValue}
              </span>
            </GridItem>
          );
        });
      })}
    </main>
  );
};

export default Grid;
