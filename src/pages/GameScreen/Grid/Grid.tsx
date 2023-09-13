import { useEffect, useState } from "react";

import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

import { MemoryItem } from "../../../interfaces/MemoryItem";
import { MemoryBoard } from "../../../types";
import { GameThemes, GridSizes, Modals } from "../../../enums";

import {
  checkHasPairClicked,
  checkHowManyClicks,
  getFoundedItem,
  getMemoryGame,
  handleItemsMatched,
  isGameFinish,
} from "../../../helpers";

import GridItem from "./GridItem";

const Grid = () => {
  const sizeSelected = useMemoryGameStore((state) => state.gridSelected);
  const addMoves = useMemoryGameStore((state) => state.addMoves);
  const showModal = useMemoryGameStore((state) => state.showModal);
  const stopTimer = useMemoryGameStore((state) => state.stopTimer);

  const [isPairHandled, setIsPairHandled] = useState(false);
  const [memoryGame, setMemoryGame] = useState<MemoryBoard>(
    getMemoryGame(sizeSelected, GameThemes.Numbers)
  );

  useEffect(() => {
    if (isPairHandled) {
      setMemoryGame((prevMemoryGame) => prevMemoryGame);
      setIsPairHandled(false);
    }
  }, [isPairHandled]);

  const handleClickItem = (memoryItemId: string) => {
    // Comprobamos que no clicka una 3a vez el jugador
    const clicks = checkHowManyClicks(memoryGame);
    if (clicks > 1) return;
    // Recuperamos el elemento clicado
    const foundedMemoryItem: MemoryItem = getFoundedItem(
      memoryGame,
      memoryItemId
    );

    // En caso de que el elemento ya haya sido clicado o ya esté emparejado
    // no hacemos nada
    if (foundedMemoryItem.isClicked || foundedMemoryItem.isPaired) return;

    foundedMemoryItem.isClicked = true;

    // Actualizamos el tablero con el nuevo elemento clicado
    const memoryGameUpdated = memoryGame.map((row) =>
      row.map((memoryItem) =>
        memoryItem.id === foundedMemoryItem?.id ? foundedMemoryItem : memoryItem
      )
    );

    // Comprobamos si 2 elementos han sido clicados
    if (checkHasPairClicked(memoryGame)) {
      setTimeout(() => {
        handleItemsMatched(memoryGame, memoryGameUpdated);
        addMoves();
        setIsPairHandled(true);
        if (isGameFinish(memoryGameUpdated)) {
          stopTimer();
          showModal(Modals.GameSolo);
        }
      }, 500);
    }

    setMemoryGame(memoryGameUpdated);
  };

  return (
    <main
      className={`grid grid-cols-${sizeSelected[0]} gap-2 w-full max-w-[440px]`}
    >
      {memoryGame.map((row) =>
        row.map(({ element, isClicked, isPaired, id }) => {
          const showChildren = isClicked || isPaired;
          return (
            <GridItem
              isClicked={isClicked}
              isPaired={isPaired}
              handleClickItem={() => handleClickItem(id)}
              key={id}
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
                {element}
              </span>
            </GridItem>
          );
        })
      )}
    </main>
  );
};

export default Grid;
