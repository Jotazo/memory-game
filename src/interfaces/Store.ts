import { GameTheme, NumPlayers, GridSizes } from "../types";

export interface GameConfigSlice {
  themeSelected: GameTheme;
  playersSelected: NumPlayers;
  gridSelected: GridSizes;
  handleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePlayers: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleGrid: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface GameSoloSlice {
  gameStarted: boolean;
  startGame: () => void;
  moves: number;
  addMoves: () => void;
  timer: { seconds: number; minutes: number };
  timerId: number | null;
  stringTimer: string;
  startTimer: () => void;
  stopTimer: () => void;
  setStringTimer: () => void;
}

export type StoreSlices = GameConfigSlice & GameSoloSlice;
