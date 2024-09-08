import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import router from "../router/router";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then the user should be redirected to the path '/listado' and show 'Listado de escape rooms' in a heading", async () => {
      render(<RouterProvider router={router} />);

      const title = screen.getByRole("heading", {
        name: "Listado de escape rooms",
      });

      expect(title).toBeInTheDocument();
    });

    describe("When the user clicks the hamburger menu and then clicks in 'Añadir'", () => {
      test("Then it should be redirected to the path 'crear-escape' and show 'Crear escape room' in a heading", async () => {
        const buttonAccessibleName = "Show navigation links";
        const buttonAccesibleNameRegex = new RegExp(buttonAccessibleName, "i");
        const createLinkTest = "Añadir";
        const EscapeRoomFormPageTitleText = "Crear escape room";
        const EscapeRoomFormPageTitleTextRegex = new RegExp(
          EscapeRoomFormPageTitleText,
          "i",
        );
        const user = userEvent.setup();

        render(<RouterProvider router={router} />);

        const NavMenuButton = screen.getByRole("button", {
          name: buttonAccesibleNameRegex,
        });

        await user.click(NavMenuButton);

        const createLink = screen.getByRole("link", {
          name: createLinkTest,
        });

        await user.click(createLink);

        const EscapeRoomFormPageTitle = screen.getByRole("heading", {
          name: EscapeRoomFormPageTitleTextRegex,
        });

        expect(EscapeRoomFormPageTitle).toBeInTheDocument();
      });
    });
  });
});
