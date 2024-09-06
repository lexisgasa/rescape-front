import "./NotFoundPage.css";

const NotFoundPage = (): React.ReactElement => {
  return (
    <div className="notfound-container">
      <img
        src="media/404-escape.webp"
        alt="Imagen mostrando 404 escape"
        width={200}
        height={192}
      />
      <h2 className="subtitle">
        Oops.. la página a la que intentas acceder no existe
      </h2>
      ;
    </div>
  );
};

export default NotFoundPage;
