import { FaTrashCan } from "react-icons/fa6";
import { EscapeRoom } from "../../types";
import "./EscapeRoomCard.css";

interface EscapeRoomProps {
  escapeRoom: EscapeRoom;
}

const EscapeRoomCard = ({
  escapeRoom: { name, location, smallImageUrl, alternativeText, content },
}: EscapeRoomProps): React.ReactElement => {
  const maximumCharacters = 100;

  return (
    <article className="card">
      <img src={smallImageUrl} alt={alternativeText} height={125} width={125} />
      <div>
        <span>{location}</span>
        <h2>{name}</h2>
        <p>
          {content && content.length > maximumCharacters
            ? `${content.slice(0, 90)}...`
            : content}
        </p>
      </div>
      <button className="card__button">
        <FaTrashCan className="garbage-can" />
      </button>
    </article>
  );
};

export default EscapeRoomCard;
