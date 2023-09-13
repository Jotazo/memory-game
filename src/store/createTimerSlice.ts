import { StateCreator } from "zustand";

import { TimerSlice, StoreSlices } from "../interfaces/Store";

const initialState = {
  timer: { seconds: 0, minutes: 0 },
  timerId: null,
  stringTimer: "00:00",
};

const createTimerSlice: StateCreator<StoreSlices, [], [], TimerSlice> = (
  set,
  get
) => {
  return {
    ...initialState,
    startTimer() {
      const timerInterval = setInterval(() => {
        const { seconds, minutes } = get().timer;
        if (seconds < 59) {
          set({ timer: { seconds: seconds + 1, minutes } });
        } else {
          // Resetear los segundos y aumentar los minutos cuando llegamos a 59 segundos
          set({ timer: { seconds: 0, minutes: minutes + 1 } });
        }
        get().setStringTimer();
      }, 1000);
      set({ timerId: timerInterval });
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
  };
};

export default createTimerSlice;
