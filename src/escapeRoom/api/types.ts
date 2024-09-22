import { EscapeRoomData } from "../types";

export interface EscapeRoomClientStructure {
  getEscapeRooms: () => void;
  createEscapeRoom: (escapeRoom: EscapeRoomData) => void;
}
