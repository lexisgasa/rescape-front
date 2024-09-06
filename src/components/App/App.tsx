import Header from "../Header/Header";
import EscapeRoomListPage from "../escapeRoom/pages/EscapeRoomListPage";

import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <EscapeRoomListPage />
    </div>
  );
};

export default App;
