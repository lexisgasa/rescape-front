import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the component NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading that contains 'la página a la que intentas acceder no existe'", () => {
      const NotFoundPageHeadingText =
        "la página a la que intentas acceder no existe";
      const NotFoundPageHeadingTextRegex = new RegExp(
        NotFoundPageHeadingText,
        "i",
      );

      render(<NotFoundPage />);

      const NotFoundPageHeading = screen.getByRole("heading", {
        name: NotFoundPageHeadingTextRegex,
      });

      expect(NotFoundPageHeading).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'Imagen 404 escape'", () => {
      const notFoundPage404ImageAlternativeText = "Imagen 404 escape";
      const notFoundPage404ImageAlternativeTextRegex = new RegExp(
        notFoundPage404ImageAlternativeText,
        "i",
      );

      render(<NotFoundPage />);

      const NotFoundPage404Image = screen.getByAltText(
        notFoundPage404ImageAlternativeTextRegex,
      );

      expect(NotFoundPage404Image).toBeInTheDocument();
    });
  });
});
