import { useLoaderData } from "react-router-dom";
import { url_rooms_admin_all } from "../../../store/local-storage";
import styles from "./RoomList.module.css";
import { RoomListHeader, RoomListItem } from "./RoomListItem/RoomListItem";
import { useState } from "react";
import PaginationButtons from "../../layout/PaginationButtons/PaginationButtons";

const RoomList = () => {
  const rooms = useLoaderData();
  const [roomList, setRoomList] = useState(JSON.parse(JSON.stringify(rooms)));

  const loadPage = async (page) => {
    try {
      const res = await fetch(url_rooms_admin_all + "?page=" + page);

      const data = await res.json();

      setRoomList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.list}>
      <RoomListHeader />
      {roomList.docs.map((room, i) => (
        <RoomListItem
          key={i}
          room={room}
          onDeleteHandler={loadPage.bind(null, 1)}
        />
      ))}

      <PaginationButtons
        onChangePage={loadPage}
        totalPages={roomList.totalPages}
        page={roomList.page}
      />
    </div>
  );
};

export default RoomList;

export const loader = async () => {
  try {
    const res = await fetch(url_rooms_admin_all + "?page=1");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
