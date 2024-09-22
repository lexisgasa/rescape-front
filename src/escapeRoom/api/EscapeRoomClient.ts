import { EscapeRoom, EscapeRoomApi, EscapeRoomData } from "../types";
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
        date: escapeRoom.createdAt,
      };
    });

    return escapeRooms;
  };

  createEscapeRoom = async (
    escapeRoom: EscapeRoomData,
  ): Promise<EscapeRoomData> => {
    const request = await fetch(`${import.meta.env.VITE_API_URL}escaperooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(escapeRoom),
    });

    if (!request.ok) {
      throw new Error("There was an error sending the post");
    }

    const newEscapeRoom = (await request.json()) as EscapeRoomData;

    return newEscapeRoom;
  };
}
