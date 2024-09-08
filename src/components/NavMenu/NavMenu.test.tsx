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
      const user = userEvent.setup();

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const NavMenuButton = screen.getByRole("button", {
        name: buttonAccesibleNameRegex,
      });

      await user.click(NavMenuButton);

      const listLink = screen.getByRole("link", { name: listLinkText });
      const createLink = screen.getByRole("link", { name: createLinkTest });

      expect(listLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
