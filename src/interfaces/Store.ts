import {
  GameTheme,
  NumPlayers,
  GridSizes,
  Modals,
  MemoryBoard,
} from "../types";

import { MemoryItem } from "./MemoryItem";

export interface BoardGameSlice {
  boardRestarted: boolean;
  board: MemoryBoard;
  itemsClicked: MemoryItem[];
  pairHandled: boolean;
  getNewMemoryGame: () => void;
  onItemClicked: (itemClicked: MemoryItem) => void;
  refreshBoard: () => void;
}

export interface GameConfigSlice {
  gameStarted: boolean;
  themeSelected: GameTheme;
  playersSelected: NumPlayers;
  gridSelected: GridSizes;
  onStartNewGame: () => void;
  onRestartGame: () => void;
  onResumeGame: () => void;
  onReturnToMainMenu: () => void;
  handleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePlayers: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleGrid: (e: React.MouseEvent<HTMLButtonElement>) => void;
  resetConfig: () => void;
}

export interface GameSoloSlice {
  moves: number;
  startSoloGame: () => void;
  resetSoloGame: () => void;
  resumeSoloGame: () => void;
  returnToMainMenuSolo: () => void;

  timer: { seconds: number; minutes: number };
  timerId: number | null;
  stringTimer: string;
  startTimer: () => void;
  stopTimer: () => void;
  setStringTimer: () => void;
  resetTimer: () => void;
}

export interface ShowModalsSlice {
  modalToShow: Modals;
  showModal: (modal: Modals) => void;
  hideModal: () => void;
}

export type StoreSlices = GameConfigSlice &
  GameSoloSlice &
  ShowModalsSlice &
  BoardGameSlice;
