import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav>
      <ul className="navigation-links">
        <li className="navigation-links__link--active">
          <a href="/listado">Listado</a>
        </li>
        <li>
          <a href="/crear-escape">Añadir</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
