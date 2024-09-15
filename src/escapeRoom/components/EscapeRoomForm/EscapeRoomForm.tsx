import "./EscapeRoomForm.css";

const EscapeRoomForm = (): React.ReactElement => {
  return (
    <form className="escape-room-form">
      <div className="escape-room-form__form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          className="escape-room-form__text"
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="place">Lugar de realización</label>
        <input
          type="text"
          id="place"
          className="escape-room-form__text"
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="smallImage">URL de la imagen</label>
        <input
          type="text"
          id="smallImage"
          className="escape-room-form__text"
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="bigImage">URL de la imagen en detalles</label>
        <input
          type="text"
          id="bigImage"
          className="escape-room-form__text"
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="alternativeText">Texto alternativo</label>
        <input
          type="text"
          id="alternativeText"
          className="escape-room-form__text"
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
          required
        />
      </div>
      <div className="escape-room-form__form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          className="escape-room-form__text escape-room-form__textarea"
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
