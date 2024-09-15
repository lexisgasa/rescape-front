import { render, screen } from "@testing-library/react";
import EscapeRoomCard from "./EscapeRoomCard";
import { EscapeRoom } from "../../types";

describe("Given the component EscapeRoomCard", () => {
  describe("When it receives an escape room with the title 'Outline'", () => {
    test("Then it should the escape room's title 'Outline' inside a heading", () => {
      const escapeRoom: EscapeRoom = {
        id: "",
        title: "Outline",
        alternativeText: "",
        smallImage: "",
        bigImage: "",
        date: new Date(),
        description: "",
        place: "",
        rating: 5,
      };
      const escapeRoomHeadingText = "Outline";
      const escapeRoomHeadingTextRegex = new RegExp(escapeRoomHeadingText, "i");

      render(<EscapeRoomCard escapeRoom={escapeRoom} />);

      const escapeRoomHeading = screen.getByRole("heading", {
        name: escapeRoomHeadingTextRegex,
      });

      expect(escapeRoomHeading).toBeInTheDocument();
    });
  });
});
