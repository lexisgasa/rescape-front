import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../App/App";
import EscapeRoomListPage from "../../escapeRoom/pages/EscapeRoomListPage/EscapeRoomListPage";
import NotFoundPage from "../pages/NotFoundPage";
import EscapeRoomFormPage from "../../escapeRoom/pages/EscapeRoomFormPage/EscapeRoomFormPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/listado" />} />
      <Route path="listado" element={<EscapeRoomListPage />} />
      <Route path="crear-escape" element={<EscapeRoomFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
