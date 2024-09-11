import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <span className="header__title">RE:Scape</span>
      <NavMenu />
    </div>
  );
};

export default Header;
