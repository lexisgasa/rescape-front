import { FaTrashCan } from "react-icons/fa6";
import { EscapeRoom } from "../../types";

interface EscapeRoomProps {
  escapeRoom: EscapeRoom;
}

const EscapeRoomCard = ({
  escapeRoom: { title, place, smallImage, alternativeText, description },
}: EscapeRoomProps): React.ReactElement => {
  return (
    <article className="card">
      <img src={smallImage} alt={alternativeText} height={125} width={125} />
      <div>
        <span>{place}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className="card__button">
        <FaTrashCan className="garbage-can" />
      </button>
    </article>
  );
};

export default EscapeRoomCard;
