import { StateCreator } from "zustand";

import { GameSoloSlice, StoreSlices } from "../interfaces/Store";

const initialState = {
  gameStarted: false,
  moves: 0,
};

const createGameSoloSlice: StateCreator<StoreSlices, [], [], GameSoloSlice> = (
  set,
  get
) => {
  return {
    ...initialState,
    addMoves() {
      set({ moves: get().moves + 1 });
    },
    startGame() {
      set({ gameStarted: true });
    },
  };
};

export default createGameSoloSlice;
