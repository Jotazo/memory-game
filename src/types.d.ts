import { GameThemes, NumPlayers, GridSizes, Modals } from "./enums";
import { MemoryItem } from "./interfaces/MemoryItem";

/* GAME CONFIG */
export type GameTheme = GameThemes.Numbers | GameThemes.Icons;

export type NumPlayers =
  | NumPlayers.One
  | NumPlayers.Two
  | NumPlayers.Three
  | NumPlayers.Four;

export type GridSizes = GridSizes.Small | GridSizes.Big;

export type Modals = Modals.Menu | Modals.GameSolo | Modals.GameMulti | null;

/* GAMEBOARD */
export type MemoryBoard = MemoryItem[][];
