import { render, screen } from "@testing-library/react";
import EscapeRoomList from "./EscapeRoomList";
import { EscapeRoom } from "../../types";

describe("Given the component EscapeRoomList", () => {
  describe("When it receives two escape rooms with the title 'Profana' and 'Blasphemia'", () => {
    test("Then it should sow 'Profana' and 'Blasphemia' inside headings", () => {
      const escapeRooms: EscapeRoom[] = [
        {
          id: "",
          date: new Date(),
          rating: 5,
          alternativeText: "",
          title: "Profana",
          smallImage: "",
          bigImage: "",
          place: "",
          description: "",
        },
        {
          id: "",
          date: new Date(),
          rating: 5,
          alternativeText: "",
          title: "Blasphemia",
          smallImage: "",
          bigImage: "",
          place: "",
          description: "",
        },
      ];
      const firstEscapeRoomTitleText = "Profana";
      const firstEscapeRoomTitleTextRegex = new RegExp(
        firstEscapeRoomTitleText,
        "i",
      );
      const secondEscapeRoomTitleText = "Blasphemia";
      const secondEscapeRoomTitleTextRegex = new RegExp(
        secondEscapeRoomTitleText,
        "i",
      );

      render(<EscapeRoomList escapeRooms={escapeRooms} />);

      const firstEscapeRoomTitle = screen.getByRole("heading", {
        name: firstEscapeRoomTitleTextRegex,
      });
      const secondEscapeRoomTitle = screen.getByRole("heading", {
        name: secondEscapeRoomTitleTextRegex,
      });

      expect(firstEscapeRoomTitle).toBeInTheDocument();
      expect(secondEscapeRoomTitle).toBeInTheDocument();
    });
  });
});
