import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";

const NavMenu = (): React.ReactElement => {
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
        <nav className="navigation-links">
          <NavLink
            to={"/listado"}
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Listado
          </NavLink>
          <NavLink
            to={"/crear-escape"}
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Añadir
          </NavLink>
          <button className="navigation-links__button" onClick={toggleMenu}>
            <IoCloseOutline />
          </button>
        </nav>
      )}
    </nav>
  );
};

export default NavMenu;
