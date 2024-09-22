import { render, screen } from "@testing-library/react";
import EscapeRoomForm from "./EscapeRoomForm";
import userEvent from "@testing-library/user-event";

describe("Given the component EscapeRoomForm", () => {
  describe("When it is rendered", () => {
    test("Then it should show the fields 'Nombre del escape room', 'Valoración' and 'Descripción'", () => {
      const nameFieldText = "Nombre del escape room";
      const nameFieldTextRegex = new RegExp(nameFieldText, "i");
      const ratingFieldText = "Valoración";
      const ratingFieldTextRegex = new RegExp(ratingFieldText, "i");
      const descriptionFieldText = "Descripción";
      const descriptionFieldTextRegex = new RegExp(descriptionFieldText, "i");
      const onSubmitEscapeRoomMock = vi.fn();

      render(<EscapeRoomForm onSubmitEscapeRoom={onSubmitEscapeRoomMock} />);

      const nameField = screen.getByLabelText(nameFieldTextRegex);
      const ratingField = screen.getByLabelText(ratingFieldTextRegex);
      const descriptionField = screen.getByLabelText(descriptionFieldTextRegex);

      expect(nameField).toBeInTheDocument();
      expect(ratingField).toBeInTheDocument();
      expect(descriptionField).toBeInTheDocument();
    });
  });

  describe("When the user enters 'Posesion' in 'Nombre del escape room' field", () => {
    test("Then it should show 'Posesion' inside the field", async () => {
      const user = userEvent.setup();
      const nameFieldText = "Nombre del escape room";
      const nameFieldTextRegex = new RegExp(nameFieldText, "i");
      const expectedNameFieldValue = "Posesion";
      const onSubmitEscapeRoomMock = vi.fn();

      render(<EscapeRoomForm onSubmitEscapeRoom={onSubmitEscapeRoomMock} />);

      const nameField = screen.getByLabelText(nameFieldTextRegex);

      await user.type(nameField, "Posesion");

      expect(nameField).toHaveValue(expectedNameFieldValue);
    });
  });

  describe("When te user enters '4' in 'Valoración' field", () => {
    test("Then it should show '4' inside the field", async () => {
      const user = userEvent.setup();
      const ratingFieldText = "Valoración";
      const ratingFieldTextRegex = new RegExp(ratingFieldText, "i");
      const expectedRatingFieldValue = 4;
      const onSubmitEscapeRoomMock = vi.fn();

      render(<EscapeRoomForm onSubmitEscapeRoom={onSubmitEscapeRoomMock} />);

      const ratingField = screen.getByLabelText(ratingFieldTextRegex);

      await user.type(ratingField, "4");

      expect(ratingField).toHaveValue(expectedRatingFieldValue);
    });
  });

  describe("When te user enters 'Un escape room muy bien ambientado' in 'Descripción' field", () => {
    test("Then it should show 'Un escape room muy bien ambiento' inside the field", async () => {
      const user = userEvent.setup();
      const descriptionFieldText = "Descripción";
      const descriptionFieldTextRegex = new RegExp(descriptionFieldText, "i");
      const expectedDescriptionFieldValue =
        "Un escape room muy bien ambientado";
      const onSubmitEscapeRoomMock = vi.fn();

      render(<EscapeRoomForm onSubmitEscapeRoom={onSubmitEscapeRoomMock} />);

      const descriptionField = screen.getByLabelText(descriptionFieldTextRegex);

      await user.type(descriptionField, "Un escape room muy bien ambientado");

      expect(descriptionField).toHaveValue(expectedDescriptionFieldValue);
    });
  });
});
