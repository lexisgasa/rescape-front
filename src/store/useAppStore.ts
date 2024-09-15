import { create } from "zustand";
import { EscapeRoom } from "../escapeRoom/types";

interface StoreStructure {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
  escapeRooms: EscapeRoom[];
  loadEscapeRoom: (escapeRooms: EscapeRoom[]) => void;
}

const useAppStore = create<StoreStructure>((set) => ({
  isLoading: false,
  setIsLoading: (load: boolean) =>
    set(() => ({
      isLoading: load,
    })),
  escapeRooms: [],
  loadEscapeRoom: (escapeRooms: EscapeRoom[]) =>
    set((state) => ({
      ...state,
      escapeRooms,
    })),
}));

export default useAppStore;
