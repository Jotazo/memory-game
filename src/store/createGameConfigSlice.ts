import { StateCreator } from "zustand";

import { GameConfigSlice, StoreSlices } from "../interfaces/Store";

import {
  GameTheme,
  NumPlayers as TNumPlayers,
  GridSizes as TGridSizes,
} from "../types";

import { GameThemes, GridSizes, NumPlayers } from "../enums";

const initialState = {
  themeSelected: GameThemes.Numbers,
  playersSelected: NumPlayers.One,
  gridSelected: GridSizes.Small,
};

const createGameConfigSlice: StateCreator<
  StoreSlices,
  [],
  [],
  GameConfigSlice
> = (set) => ({
  ...initialState,
  handleTheme(e) {
    set({ themeSelected: e.currentTarget.value as GameTheme });
  },
  handlePlayers(e) {
    set({ playersSelected: e.currentTarget.value as TNumPlayers });
  },
  handleGrid(e) {
    set({ gridSelected: e.currentTarget.value as TGridSizes });
  },
});

export default createGameConfigSlice;
