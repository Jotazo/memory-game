import { StateCreator } from "zustand";
import { ShowModalsSlice, StoreSlices } from "../interfaces/Store";
import { Modals } from "../types";

const initialState = {
  modalToShow: null,
};

const createShowModalsSlice: StateCreator<
  StoreSlices,
  [],
  [],
  ShowModalsSlice
> = (set) => {
  return {
    ...initialState,
    showModal(modal: Modals) {
      set({ modalToShow: modal });
    },
    hideModal() {
      set({ modalToShow: null });
    },
  };
};

export default createShowModalsSlice;
