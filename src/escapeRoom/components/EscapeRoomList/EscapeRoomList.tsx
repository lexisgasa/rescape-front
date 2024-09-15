import EscapeRoomCard from "../EscapeRoomCard/EscapeRoomCard";
import { EscapeRoom } from "../../types";
import "./EscapeRoomList.css";

interface EscapeRoomListProps {
  escapeRooms: EscapeRoom[];
}

const EscapeRoomList = ({
  escapeRooms,
}: EscapeRoomListProps): React.ReactElement => {
  return (
    <ul className="main-list">
      {escapeRooms.map((escapeRoom) => (
        <li key={escapeRoom.id}>
          <EscapeRoomCard escapeRoom={escapeRoom} />
        </li>
      ))}
    </ul>
  );
};

export default EscapeRoomList;
