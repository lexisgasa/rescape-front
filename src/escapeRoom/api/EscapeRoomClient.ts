import { EscapeRoom, EscapeRoomDto } from "../types";
import { EscapeRoomClientStructure } from "./types";

export class EscapeRoomClient implements EscapeRoomClientStructure {
  getEscapeRooms = async (): Promise<EscapeRoom[]> => {
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}list`);

    if (!apiResponse.ok) {
      throw new Error(`Response status: ${apiResponse}`);
    }

    const escapeRoomDto = (await apiResponse.json()) as {
      escapeRooms: EscapeRoomDto[];
    };

    const { escapeRooms: escapeRoomsDto } = escapeRoomDto;

    const escapeRooms = escapeRoomsDto.map<EscapeRoom>((escapeRoom) => ({
      ...escapeRoom,
      id: escapeRoom._id,
    }));

    return escapeRooms;
  };
}
