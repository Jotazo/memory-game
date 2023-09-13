import { GameTheme, NumPlayers, GridSizes, Modals } from "../types";

export interface GameConfigSlice {
  themeSelected: GameTheme;
  playersSelected: NumPlayers;
  gridSelected: GridSizes;
  handleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePlayers: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleGrid: (e: React.MouseEvent<HTMLButtonElement>) => void;
  resetConfig: () => void;
}

export interface GameSoloSlice {
  gameStarted: boolean;
  startGame: () => void;
  moves: number;
  addMoves: () => void;
  returnToMainMenu: () => void;
}

export interface ShowModalsSlice {
  modalToShow: Modals;
  showModal: (modal: Modals) => void;
  hideModal: () => void;
}

export interface TimerSlice {
  timer: { seconds: number; minutes: number };
  timerId: number | null;
  stringTimer: string;
  startTimer: () => void;
  stopTimer: () => void;
  setStringTimer: () => void;
  resetTimer: () => void;
}

export type StoreSlices = GameConfigSlice &
  GameSoloSlice &
  ShowModalsSlice &
  TimerSlice;
