import { useState } from "react";
import { EscapeRoom } from "../../types";
import "./EscapeRoomForm.css";

const EscapeRoomForm = (): React.ReactElement => {
  const [escapeRoomData, setEscapeRoomData] = useState<Omit<EscapeRoom, "id">>({
    title: "",
    place: "",
    smallImage: "",
    bigImage: "",
    alternativeText: "",
    rating: NaN,
    description: "",
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
        <label htmlFor="title">Nombre del escape room</label>
        <input
          type="text"
          id="title"
          className="escape-room-form__text"
          value={escapeRoomData.title}
          onChange={handleEscapeRoomData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="place">Lugar de realización</label>
        <input
          type="text"
          id="place"
          className="escape-room-form__text"
          value={escapeRoomData.place}
          onChange={handleEscapeRoomData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="smallImage">URL de la imagen</label>
        <input
          type="text"
          id="smallImage"
          className="escape-room-form__text"
          value={escapeRoomData.smallImage}
          onChange={handleEscapeRoomData}
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="bigImage">URL de la imagen en detalles</label>
        <input
          type="text"
          id="bigImage"
          className="escape-room-form__text"
          value={escapeRoomData.bigImage}
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
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          className="escape-room-form__text escape-room-form__textarea"
          value={escapeRoomData.description}
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
