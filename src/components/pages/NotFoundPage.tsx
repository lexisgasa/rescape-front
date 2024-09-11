import "./NotFoundPage.css";

const NotFoundPage = (): React.ReactElement => {
  return (
    <main className="notfound-container">
      <img
        src="media/404-escape.webp"
        alt="Imagen 404 escape"
        width={200}
        height={192}
      />
      <h1 className="main-title notfound-container__subtitle">
        Oops.. la página a la que intentas acceder no existe
      </h1>
    </main>
  );
};

export default NotFoundPage;
