import { EscapeRoomClient } from "../../api/escapeRoomClient";

const EscapeRoomListPage = (): React.ReactElement => {
  const escapeRoomClient = new EscapeRoomClient();

  escapeRoomClient.getEscapeRooms();

  return (
    <main>
      <h1 className="main-title">Listado de escape rooms</h1>;
    </main>
  );
};

export default EscapeRoomListPage;
