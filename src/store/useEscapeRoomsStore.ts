import { create } from "zustand";
import { EscapeRoom } from "../escapeRoom/types";

interface StoreStructure {
  escapeRooms: EscapeRoom[];
  loadEscapeRoom: (escapeRooms: EscapeRoom[]) => void;
}

const useEscapeRoomsStore = create<StoreStructure>((set) => ({
  escapeRooms: [],
  loadEscapeRoom: (escapeRooms: EscapeRoom[]) =>
    set((state) => ({
      ...state,
      escapeRooms,
    })),
}));

export default useEscapeRoomsStore;
