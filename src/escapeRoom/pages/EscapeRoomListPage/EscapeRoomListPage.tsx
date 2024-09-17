import { EscapeRoomClient } from "../../api/EscapeRoomClient";
import { useEffect, useMemo } from "react";
import EscapeRoomList from "../../components/EscapeRoomList/EscapeRoomList";
import Spinner from "../../../components/Spinner/Spinner";
import useEscapeRoomsStore from "../../../store/useEscapeRoomsStore";
import useIsLoadingStore from "../../../store/useIsLoadingStore";
import "./EscapeRoomListPage.css";

const EscapeRoomListPage = (): React.ReactElement => {
  const { escapeRooms, loadEscapeRoom } = useEscapeRoomsStore();

  const { isLoading, setIsLoading } = useIsLoadingStore();

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
    <>
      <h1 className="main-title">Listado de escape rooms</h1>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        escapeRooms.length > 0 && <EscapeRoomList escapeRooms={escapeRooms} />
      )}
    </>
  );
};

export default EscapeRoomListPage;
