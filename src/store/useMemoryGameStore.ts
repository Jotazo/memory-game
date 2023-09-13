import { create } from "zustand";

import { StoreSlices } from "../interfaces/Store";

import createGameConfigSlice from "./createGameConfigSlice";
import createGameSoloSlice from "./createGameSoloSlice";
import createShowModalsSlice from "./createShowModalsSlice";

export const useMemoryGameStore = create<StoreSlices>()((...a) => ({
  ...createGameConfigSlice(...a),
  ...createGameSoloSlice(...a),
  ...createShowModalsSlice(...a),
}));
