import { useEffect } from "react";
import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

// import { GameThemes, GridSizes } from "../../../enums"; // Build fix
import { GridSizes } from "../../../enums";

import GridItem from "./GridItem";

const Grid = () => {
  const sizeSelected = useMemoryGameStore((state) => state.gridSelected);
  const onItemClicked = useMemoryGameStore((state) => state.onItemClicked);
  const memoryGame = useMemoryGameStore((state) => state.board);
  const pairHandled = useMemoryGameStore((state) => state.pairHandled);
  const refreshBoard = useMemoryGameStore((state) => state.refreshBoard);

  useEffect(() => {
    if (pairHandled) refreshBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairHandled]);

  const gridCols = sizeSelected[0] === "4" ? "grid-cols-4" : "grid-cols-6"; // Fix 6x6 grid

  return (
    <main className={`grid ${gridCols} gap-2 w-full max-w-[440px]`}>
      {memoryGame.map((row) => {
        return row.map((item) => {
          const showChildren = item.isClicked || item.isPaired;
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
                    ? "text-[42px] md:text-[56px]"
                    : "text-[24px]"
                } flex justify-center items-center`}
              >
                {item.element}
              </span>
            </GridItem>
          );
        });
      })}
    </main>
  );
};

export default Grid;
