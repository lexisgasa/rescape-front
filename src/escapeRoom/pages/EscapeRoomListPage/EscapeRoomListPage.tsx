import { EscapeRoomClient } from "../../api/EscapeRoomClient";
import { FaTrashCan } from "react-icons/fa6";
import "./EscapeRoomListPage.css";

const EscapeRoomListPage = (): React.ReactElement => {
  const escapeRoomClient = new EscapeRoomClient();

  escapeRoomClient.getEscapeRooms();

  return (
    <main>
      <h1 className="main-title">Listado de escape rooms</h1>
      <article className="card">
        <img src="" alt="" height={125} width={125} />
        <div>
          <span></span>
          <h2></h2>
          <p></p>
        </div>
        <button className="card__button">
          <FaTrashCan className="garbage-can" />
        </button>
      </article>
    </main>
  );
};

export default EscapeRoomListPage;
