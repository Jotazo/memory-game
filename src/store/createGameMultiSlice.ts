import { StateCreator } from "zustand";

import { GameMultiSlice, StoreSlices } from "../interfaces/Store";
import { Player } from "../interfaces/Player";
import { MemoryBoard } from "../types";

import { Modals } from "../enums";
import { isGameFinish, getPlayers } from "../helpers";

const initialState = {
  players: [],
};

const createGameMultiSlice: StateCreator<
  StoreSlices,
  [],
  [],
  GameMultiSlice
> = (set, get) => {
  return {
    ...initialState,
    addPlayers() {
      const playersGenerated = getPlayers(Number(get().playersSelected));
      set({ players: playersGenerated });
    },
    handleMultiClickItem(updatedBoard: MemoryBoard, isPair: boolean) {
      const actualPlayer = get().players.find((player) => player.isMyTurn);
      if (!actualPlayer) throw new Error("No se ha encontrado jugador!!!");
      const updatedPlayers = get().players.map((player) =>
        get().updatePlayers(player, actualPlayer, isPair)
      );
      set({ players: updatedPlayers });
      if (isGameFinish(updatedBoard)) {
        get().showModal(Modals.GameMulti);
      }
    },
    updatePlayers(player: Player, actualPlayer: Player, isPair: boolean) {
      const isActualPlayer = player.id === actualPlayer.id;
      const isLastPlayer = actualPlayer.numPlayer === Number(get().playersSelected);
      return isActualPlayer
        ? {
            ...actualPlayer,
            pairs: isPair ? actualPlayer.pairs + 1 : actualPlayer.pairs,
            isMyTurn: isPair,
          }
        : {
            ...player,
            isMyTurn: isPair
              ? !isPair
              : isLastPlayer
              ? player.numPlayer === 1
              : actualPlayer!.numPlayer + 1 === player.numPlayer,
          };
    },
  };
};

export default createGameMultiSlice;
