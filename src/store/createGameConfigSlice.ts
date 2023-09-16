import { StateCreator } from "zustand";

import { GameConfigSlice, StoreSlices } from "../interfaces/Store";

import {
  GameTheme,
  NumPlayers as TNumPlayers,
  GridSizes as TGridSizes,
} from "../types";

import { GameThemes, GridSizes, NumPlayers } from "../enums";

const initialState = {
  gameStarted: false,
  themeSelected: GameThemes.Numbers,
  playersSelected: NumPlayers.One,
  gridSelected: GridSizes.Small,
};

const createGameConfigSlice: StateCreator<
  StoreSlices,
  [],
  [],
  GameConfigSlice
> = (set, get) => ({
  ...initialState,
  onStartNewGame() {
    const numPlayers = Number(get().playersSelected);
    get().getNewMemoryGame();
    if (numPlayers === 1) {
      // Solo Game
      get().startSoloGame();
    } else {
      // Multi Game
      get().addPlayers();
    }
    set({ gameStarted: true });
  },
  onRestartGame() {
    const numPlayers = Number(get().playersSelected);
    if (numPlayers === 1) {
      // Solo Game
      get().resetSoloGame();
    } else {
      // Multi Game
    }
    get().onStartNewGame();
    get().hideModal();
  },
  onResumeGame() {
    const numPlayers = Number(get().playersSelected);
    if (numPlayers === 1) {
      // Solo Game
      get().resumeSoloGame();
    } else {
      // Multi Game
    }
    get().hideModal();
  },
  onReturnToMainMenu() {
    const numPlayers = Number(get().playersSelected);
    if (numPlayers === 1) {
      // Solo Game
      get().returnToMainMenuSolo();
    } else {
      // Multi Game
    }
    get().resetConfig();
    get().hideModal();
  },
  handleTheme(e) {
    set({ themeSelected: e.currentTarget.value as GameTheme });
  },
  handlePlayers(e) {
    set({ playersSelected: e.currentTarget.value as TNumPlayers });
  },
  handleGrid(e) {
    set({ gridSelected: e.currentTarget.value as TGridSizes });
  },
  resetConfig() {
    set(initialState);
  },
});

export default createGameConfigSlice;
