import { StateCreator } from "zustand";

import { GameSoloSlice, StoreSlices } from "../interfaces/Store";

const initialState = {
  gameStarted: false,
  moves: 0,
  timer: { seconds: 0, minutes: 0 },
  timerId: null,
  stringTimer: "00:00",
};

const createGameSoloSlice: StateCreator<StoreSlices, [], [], GameSoloSlice> = (
  set,
  get
) => {
  return {
    ...initialState,
    addMoves() {
      set({ moves: get().moves + 1 });
    },
    startTimer() {
      setInterval(() => {
        const { seconds, minutes } = get().timer;
        if (seconds < 59) {
          set({ timer: { seconds: seconds + 1, minutes } });
        } else {
          // Resetear los segundos y aumentar los minutos cuando llegamos a 59 segundos
          set({ timer: { seconds: 0, minutes: minutes + 1 } });
        }
        get().setStringTimer();
      }, 1000);
      set({ timerId: 69 });
    },
    stopTimer() {
      const timerId = get().timerId;
      if (timerId) {
        clearInterval(timerId);
        set({ timerId: null });
      }
    },
    setStringTimer() {
      const { minutes, seconds } = get().timer;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      set({ stringTimer: `${formattedMinutes}:${formattedSeconds}` });
    },
    startGame() {
      const startTimer = get().startTimer;
      set({ gameStarted: true });
      startTimer();
    },
  };
};

export default createGameSoloSlice;
