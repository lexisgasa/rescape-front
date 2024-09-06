import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button that has the accessible name 'Show navigation links' ", () => {
      const buttonAccessibleName = "Show navigation links";
      const buttonAccesibleNameRegex = new RegExp(buttonAccessibleName, "i");

      render(<NavMenu />);

      const NavMenuButton = screen.getByRole("button", {
        name: buttonAccesibleNameRegex,
      });

      expect(NavMenuButton).toBeInTheDocument();
    });
  });

  describe("When it receives an action and it's clicked", () => {
    test("Then it should show the texts 'Listado' and 'Añadir' within a container", async () => {
      const buttonAccessibleName = "Show navigation links";
      const buttonAccesibleNameRegex = new RegExp(buttonAccessibleName, "i");
      const listLinkText = "Listado";
      const createLinkTest = "Añadir";

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const NavMenuButton = screen.getByRole("button", {
        name: buttonAccesibleNameRegex,
      });

      const user = userEvent.setup();
      await user.click(NavMenuButton);

      screen.debug();

      const listLink = screen.getByRole("link", { name: listLinkText });
      const createLink = screen.getByRole("link", { name: createLinkTest });

      expect(listLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
