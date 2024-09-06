import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";

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
});
