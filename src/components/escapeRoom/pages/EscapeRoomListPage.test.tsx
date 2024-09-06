import { render, screen } from "@testing-library/react";
import EscapeRoomListPage from "./EscapeRoomListPage";

describe("Given the component EscapeRoomListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listado de escape rooms' inside a heading", () => {
      const escapeRoomListPageTitleText = "Listado de escape rooms";
      const escapeRoomListPageTitleTextRegex = new RegExp(
        escapeRoomListPageTitleText,
        "i",
      );

      render(<EscapeRoomListPage />);

      const escapeRoomListPageTitle = screen.getByRole("heading", {
        name: escapeRoomListPageTitleTextRegex,
      });

      expect(escapeRoomListPageTitle).toBeInTheDocument();
    });
  });
});
