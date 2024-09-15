import { EscapeRoomClient } from "../../api/EscapeRoomClient";
import useAppStore from "../../../store/useAppStore";
import { useEffect, useMemo } from "react";
import EscapeRoomCard from "../../components/EscapeRoomCard";
import "./EscapeRoomListPage.css";

const EscapeRoomListPage = (): React.ReactElement => {
  const { escapeRooms, loadEscapeRoom, isLoading, setIsLoading } =
    useAppStore();

  const escapeRoomClient = useMemo(() => new EscapeRoomClient(), []);

  useEffect(() => {
    setIsLoading(true);

    const fetchEscapeRooms = async () => {
      try {
        const apiEscapeRooms = await escapeRoomClient.getEscapeRooms();
        loadEscapeRoom(apiEscapeRooms);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(`No se han podido obtener los datos ${error}`);
      }
    };

    fetchEscapeRooms();
  }, [escapeRoomClient, loadEscapeRoom, setIsLoading]);

  return (
    <main>
      <h1 className="main-title">Listado de escape rooms</h1>
      {isLoading ? (
        <h2>Cargando contenido..</h2>
      ) : (
        escapeRooms.length > 0 && <EscapeRoomCard escapeRoom={escapeRooms[0]} />
      )}
    </main>
  );
};

export default EscapeRoomListPage;
