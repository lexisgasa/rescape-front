import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import router from "../router/router";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listado de escape rooms' in a heading", async () => {
      render(<RouterProvider router={router} />);

      const title = screen.getByRole("heading", {
        name: "Listado de escape rooms",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user clicks the hamburger menu and then clicks in 'Añadir'", () => {
    test("Then it should show 'Crear escape room' in a heading", async () => {
      const buttonAccessibleName = "Show navigation links";
      const buttonAccesibleNameRegex = new RegExp(buttonAccessibleName, "i");
      const createLinkTest = "Añadir";
      const escapeRoomFormPageTitleText = "Crear escape room";
      const escapeRoomFormPageTitleTextRegex = new RegExp(
        escapeRoomFormPageTitleText,
        "i",
      );
      const user = userEvent.setup();

      render(<RouterProvider router={router} />);

      const navMenuButton = screen.getByRole("button", {
        name: buttonAccesibleNameRegex,
      });

      await user.click(navMenuButton);

      const createLink = screen.getByRole("link", {
        name: createLinkTest,
      });

      await user.click(createLink);

      const escapeRoomFormPageTitle = screen.getByRole("heading", {
        name: escapeRoomFormPageTitleTextRegex,
      });

      expect(escapeRoomFormPageTitle).toBeInTheDocument();
    });
  });
});
