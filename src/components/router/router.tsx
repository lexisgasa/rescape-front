import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../App/App";
import EscapeRoomListPage from "../escapeRoom/pages/EscapeRoomListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/listado" />} />
      <Route path="listado" element={<EscapeRoomListPage />} />
    </Route>,
  ),
);

export default router;
