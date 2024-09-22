import EscapeRoomForm from "../../components/EscapeRoomForm/EscapeRoomForm";
import { EscapeRoomClient } from "../../api/EscapeRoomClient";
import { EscapeRoomData } from "../../types";

const EscapeRoomFormPage = (): React.ReactElement => {
  const createEscapeRoom = async (escapeRoomFormData: EscapeRoomData) => {
    const escapeRoomClient = new EscapeRoomClient();

    await escapeRoomClient.createEscapeRoom(escapeRoomFormData);
  };

  return (
    <>
      <h1 className="main-title">Crear escape room</h1>
      <EscapeRoomForm onSubmitEscapeRoom={createEscapeRoom} />
    </>
  );
};

export default EscapeRoomFormPage;
