import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./NavMenu.css";
import { useState } from "react";

const NavMenu = () => {
  const [isHamburger, setIsHamburger] = useState(true);

  const toggleMenu = (): void => {
    setIsHamburger((currentValue): boolean => {
      return !currentValue;
    });
  };

  return (
    <nav>
      {isHamburger ? (
        <button aria-label="Show navigation links" onClick={toggleMenu}>
          <RxHamburgerMenu className="hamburger" />
        </button>
      ) : (
        <ul className="navigation-links">
          <li className="navigation-links__link--active">
            <a href="/listado">Listado</a>
          </li>
          <li>
            <a href="/crear-escape">Añadir</a>
          </li>
          <button className="navigation-links__button" onClick={toggleMenu}>
            <IoCloseOutline />
          </button>
        </ul>
      )}
    </nav>
  );
};

export default NavMenu;
