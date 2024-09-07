import { render, screen } from "@testing-library/react";
import EscapeRoomFormPage from "./EscapeRoomFormPage";

describe("Given the component EscapeRoomFormPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Crear escape room' inside a heading", () => {
      const EscapeRoomFormPageTitleText = "Crear escape room";
      const EscapeRoomFormPageTitleTextRegex = new RegExp(
        EscapeRoomFormPageTitleText,
        "i",
      );

      render(<EscapeRoomFormPage />);

      const EscapeRoomFormPageTitle = screen.getByRole("heading", {
        name: EscapeRoomFormPageTitleTextRegex,
      });

      expect(EscapeRoomFormPageTitle).toBeInTheDocument();
    });
  });
});
