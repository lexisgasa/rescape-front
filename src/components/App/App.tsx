import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
