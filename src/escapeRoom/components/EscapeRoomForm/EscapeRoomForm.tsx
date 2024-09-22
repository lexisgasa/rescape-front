import { useState } from "react";
import { EscapeRoomData } from "../../types";
import "./EscapeRoomForm.css";

interface EscapeRoomFormProps {
  onSubmitEscapeRoom: (escapeRoomFormData: EscapeRoomData) => void;
}

const EscapeRoomForm = ({
  onSubmitEscapeRoom,
}: EscapeRoomFormProps): React.ReactElement => {
  const [escapeRoomData, setEscapeRoomData] = useState<EscapeRoomData>({
    name: "",
    location: "",
    smallImageUrl: "",
    detailImageUrl: "",
    alternativeText: "",
    rating: "",
    content: "",
  });

  const getEscapeRoomFormData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { id, value } = event.target;
    setEscapeRoomData((currentEscapeRoom) => ({
      ...currentEscapeRoom,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmitEscapeRoom(escapeRoomData);
  };

  return (
    <form className="escape-room-form" onSubmit={handleSubmit}>
      <div className="escape-room-form__form-group">
        <label htmlFor="name">Nombre del escape room</label>
        <input
          type="text"
          id="name"
          className="escape-room-form__text"
          value={escapeRoomData.name}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="location">Lugar de realización</label>
        <input
          type="text"
          id="location"
          className="escape-room-form__text"
          value={escapeRoomData.location}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="smallImageUrl">URL de la imagen</label>
        <input
          type="text"
          id="smallImageUrl"
          className="escape-room-form__text"
          value={escapeRoomData.smallImageUrl}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="detailImageUrl">URL de la imagen en detalles</label>
        <input
          type="text"
          id="detailImageUrl"
          className="escape-room-form__text"
          value={escapeRoomData.detailImageUrl}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="alternativeText">Texto alternativo de la imagen</label>
        <input
          type="text"
          id="alternativeText"
          className="escape-room-form__text"
          value={escapeRoomData.alternativeText}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="rating">Valoración</label>
        <input
          type="number"
          id="rating"
          placeholder="Número entero del 1 al 5"
          className="escape-room-form__text"
          min={1}
          max={5}
          value={escapeRoomData.rating}
          onChange={getEscapeRoomFormData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="content">Descripción</label>
        <textarea
          id="content"
          className="escape-room-form__text escape-room-form__textarea"
          value={escapeRoomData.content}
          onChange={getEscapeRoomFormData}
          required
        ></textarea>
      </div>
      <button type="submit" className="escape-room-form__button">
        Crear
      </button>
    </form>
  );
};

export default EscapeRoomForm;
