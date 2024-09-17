import { EscapeRoom, EscapeRoomApi } from "../types";
import { EscapeRoomClientStructure } from "./types";

export class EscapeRoomClient implements EscapeRoomClientStructure {
  getEscapeRooms = async (): Promise<EscapeRoom[]> => {
    const apiResponse = await fetch(
      `${import.meta.env.VITE_API_URL}escaperooms`,
    );

    if (!apiResponse.ok) {
      throw new Error(`Response status: ${apiResponse}`);
    }

    const escapeRoomsApiResponse = (await apiResponse.json()) as {
      escapeRooms: EscapeRoomApi[];
    };

    const { escapeRooms: escapeRoomsApi } = escapeRoomsApiResponse;

    const escapeRooms = escapeRoomsApi.map<EscapeRoom>((escapeRoom) => {
      return {
        ...escapeRoom,
        id: escapeRoom._id,
      };
    });

    return escapeRooms;
  };
}
