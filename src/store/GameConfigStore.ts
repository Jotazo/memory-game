import { create } from "zustand";

import {
  GameTheme,
  GridSizes as TGridSizes,
  NumPlayers as TNumPlayers,
} from "../types";

import { GameThemes, NumPlayers, GridSizes } from "../enums";

interface GameConfigStore {
  themeSelected: GameTheme;
  playersSelected: TNumPlayers;
  gridSelected: TGridSizes;
  handleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePlayers: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleGrid: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const initialState = {
  themeSelected: GameThemes.Numbers,
  playersSelected: NumPlayers.One,
  gridSelected: GridSizes.Small,
};

export const useGameConfigStore = create<GameConfigStore>((set) => {
  return {
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
  };
});
