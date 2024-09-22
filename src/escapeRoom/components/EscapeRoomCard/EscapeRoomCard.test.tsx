import { render, screen } from "@testing-library/react";
import EscapeRoomCard from "./EscapeRoomCard";
import { EscapeRoom } from "../../types";

describe("Given the component EscapeRoomCard", () => {
  const escapeRoom: EscapeRoom = {
    id: "",
    name: "White chapel",
    alternativeText: "",
    smallImageUrl: "",
    detailImageUrl: "",
    date: new Date(),
    content:
      "En 1888, Jack el Destripador sembró el terror en el barrio londinense de Whitechapel, dejando tras de sí una estela de misterio y miedo.",
    location: "",
    rating: "5",
  };

  describe("When it receives an escape room with the title 'White chapel'", () => {
    test("Then it should show the escape room's title 'White chapel' inside a heading", () => {
      const escapeRoomHeadingText = "White chapel";
      const escapeRoomHeadingTextRegex = new RegExp(escapeRoomHeadingText, "i");

      render(<EscapeRoomCard escapeRoom={escapeRoom} />);

      const escapeRoomHeading = screen.getByRole("heading", {
        name: escapeRoomHeadingTextRegex,
      });

      expect(escapeRoomHeading).toBeInTheDocument();
    });
  });

  describe("When it receives an escape room with the description 'En 1888, Jack el Destripador sembró el terror en el barrio londinense de Whitechapel, dejando tras de sí una estela de misterio y miedo.' ", () => {
    test("Then it should show the escape room's description 'En 1888, Jack el Destripador sembró el terror en el barrio londinense de Whitechapel, deja...'", () => {
      const escapeRoomDescriptionText =
        "En 1888, Jack el Destripador sembró el terror en el barrio londinense de Whitechapel, deja...";
      const escapeRoomDescriptionTextRegex = new RegExp(
        escapeRoomDescriptionText,
        "i",
      );

      render(<EscapeRoomCard escapeRoom={escapeRoom} />);

      const escapeRoomDescription = screen.getByText(
        escapeRoomDescriptionTextRegex,
      );

      expect(escapeRoomDescription).toBeInTheDocument();
    });
  });
});
