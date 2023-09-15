import { create } from "zustand";

import { StoreSlices } from "../interfaces/Store";

import createGameConfigSlice from "./createGameConfigSlice";
import createGameSoloSlice from "./createGameSoloSlice";
import createShowModalsSlice from "./createShowModalsSlice";
import createBoardGameSlice from "./createBoardGameSlice";

export const useMemoryGameStore = create<StoreSlices>()((...a) => ({
  ...createGameConfigSlice(...a),
  ...createGameSoloSlice(...a),
  ...createShowModalsSlice(...a),
  ...createBoardGameSlice(...a),
}));
