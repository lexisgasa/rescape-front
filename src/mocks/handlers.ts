import { http, HttpResponse } from "msw";
import { EscapeRoom } from "../escapeRoom/types";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}list`, () => {
    return HttpResponse.json<{ escapeRooms: EscapeRoom[] }>({
      escapeRooms: [
        {
          id: "1",
          name: "",
          date: new Date(),
          rating: 1,
          smallImageUrl: "",
          detailImageUrl: "",
          alternativeText: "",
          location: "",
          content: "",
        },
        {
          id: "2",
          name: "",
          date: new Date(),
          rating: 1,
          smallImageUrl: "",
          detailImageUrl: "",
          alternativeText: "",
          location: "",
          content: "",
        },
        {
          id: "3",
          name: "",
          date: new Date(),
          rating: 1,
          smallImageUrl: "",
          detailImageUrl: "",
          alternativeText: "",
          location: "",
          content: "",
        },
      ],
    });
  }),
];
