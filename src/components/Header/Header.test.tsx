import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'RE:Scape' inside a heading", () => {
      const appTitleText = "RE:Scape";
      const appTitleTextRegex = new RegExp(appTitleText, "i");

      render(<Header />);

      screen.debug();

      const appTitle = screen.getByText(appTitleTextRegex);

      expect(appTitle).toBeInTheDocument();
    });
  });
});
