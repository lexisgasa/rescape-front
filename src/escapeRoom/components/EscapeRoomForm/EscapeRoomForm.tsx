import { useState } from "react";
import { EscapeRoomData } from "../../types";
import "./EscapeRoomForm.css";

const EscapeRoomForm = (): React.ReactElement => {
  const [escapeRoomData, setEscapeRoomData] = useState<EscapeRoomData>({
    name: "",
    location: "",
    smallImageUrl: "",
    detailImageUrl: "",
    alternativeText: "",
    rating: NaN,
    content: "",
    date: new Date(),
  });

  const handleEscapeRoomData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setEscapeRoomData((currentEscapeRoom) => ({
      ...currentEscapeRoom,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form className="escape-room-form">
      <div className="escape-room-form__form-group">
        <label htmlFor="name">Nombre del escape room</label>
        <input
          type="text"
          id="name"
          className="escape-room-form__text"
          value={escapeRoomData.name}
          onChange={handleEscapeRoomData}
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
          onChange={handleEscapeRoomData}
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
          onChange={handleEscapeRoomData}
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
          onChange={handleEscapeRoomData}
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
          onChange={handleEscapeRoomData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="rating">Valoración</label>
        <input
          type="number"
          id="rating"
          placeholder="Número entero del 1 al 5"
          min={1}
          max={5}
          className="escape-room-form__text"
          value={escapeRoomData.rating}
          onChange={handleEscapeRoomData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="content">Descripción</label>
        <textarea
          id="content"
          className="escape-room-form__text escape-room-form__textarea"
          value={escapeRoomData.content}
          onChange={handleEscapeRoomData}
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
