import { GameThemes, NumPlayers, GridSizes } from "./enums";

/* GAME CONFIG */
export type GameTheme = GameThemes.Numbers | GameThemes.Icons;

export type NumPlayers =
  | NumPlayers.One
  | NumPlayers.Two
  | NumPlayers.Three
  | NumPlayers.Four;

export type GridSizes = GridSizes.Small | GridSizes.Big;
