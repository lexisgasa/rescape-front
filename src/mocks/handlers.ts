import { http, HttpResponse } from "msw";
import { EscapeRoom } from "../escapeRoom/types";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}list`, () => {
    return HttpResponse.json<{ escapeRooms: EscapeRoom[] }>({
      escapeRooms: [
        {
          id: "1",
          title: "",
          date: new Date(),
          rating: 1,
          smallImage: "",
          bigImage: "",
          alternativeText: "",
          place: "",
          description: "",
        },
        {
          id: "2",
          title: "",
          date: new Date(),
          rating: 1,
          smallImage: "",
          bigImage: "",
          alternativeText: "",
          place: "",
          description: "",
        },
        {
          id: "3",
          title: "",
          date: new Date(),
          rating: 1,
          smallImage: "",
          bigImage: "",
          alternativeText: "",
          place: "",
          description: "",
        },
      ],
    });
  }),
];
