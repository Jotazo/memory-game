import { StateCreator } from "zustand";
import { GameMultiSlice, StoreSlices } from "../interfaces/Store";
import getPlayers from "../helpers/getPlayers";

const initialState = {
  players: [],
};

const createGameMultiSlice: StateCreator<
  StoreSlices,
  [],
  [],
  GameMultiSlice
> = (set, get) => {
  return {
    ...initialState,
    addPlayers() {
      const playersGenerated = getPlayers(Number(get().playersSelected));
      set({ players: playersGenerated });
    },
  };
};

export default createGameMultiSlice;
