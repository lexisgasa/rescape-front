import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <h1 className="header__title">RE:Scape</h1>
      <NavMenu />
    </div>
  );
};

export default Header;
