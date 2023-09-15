import { StateCreator } from "zustand";

import { BoardGameSlice, StoreSlices } from "../interfaces/Store";
import { MemoryItem } from "../interfaces/MemoryItem";

import { getMemoryGame, handleItemsMatched, isGameFinish } from "../helpers";
import { Modals } from "../enums";

const initialState = {
  boardRestarted: false,
  board: [],
  itemsClicked: [],
  pairHandled: false,
};

const createBoardGameSlice: StateCreator<
  StoreSlices,
  [],
  [],
  BoardGameSlice
> = (set, get) => {
  return {
    ...initialState,
    getNewMemoryGame() {
      const gridSizeSelected = get().gridSelected;
      set({ board: getMemoryGame(gridSizeSelected) });
    },
    onItemClicked(itemClicked) {
      const itemsClicked = get().itemsClicked.length;
      const { isClicked, isPaired } = itemClicked;
      // Si hay mas de 2 elementos clickados
      // Si el elemento clickado ya habia sido clickado anteriormente o
      // ya está emparejado, retornamos
      if (itemsClicked > 1 || isClicked || isPaired) return;

      const board = get().board;
      const updatedBoard = [...board];

      const itemUpdated: MemoryItem = { ...itemClicked, isClicked: true };

      const itemsClickedUpdated = [...get().itemsClicked, itemUpdated];

      if (itemsClicked === 1) {
        setTimeout(() => {
          // Comprobar si son pareja
          const [itemOne, itemTwo] = itemsClickedUpdated;
          const isPair = itemOne.pairedValue === itemTwo.pairedValue;
          handleItemsMatched(updatedBoard, itemsClickedUpdated, isPair);
          if (isGameFinish(updatedBoard)) {
            get().stopTimer();
            get().showModal(Modals.GameSolo);
          }
          set({
            board: updatedBoard,
            itemsClicked: [],
            pairHandled: true,
            moves: get().moves + 1,
          });
        }, 500);
      }

      const [row, cell] = itemUpdated.position;
      updatedBoard[row][cell] = itemUpdated;

      set({ itemsClicked: itemsClickedUpdated, board: updatedBoard });
    },
    refreshBoard() {
      set({ board: get().board, pairHandled: false });
    },
  };
};

export default createBoardGameSlice;
