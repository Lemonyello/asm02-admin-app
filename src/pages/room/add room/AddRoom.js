import EditRoomForm from "../../../components/room/EditRoomForm/EditRoomForm";
import styles from "./AddRoom.module.css";

const AddRoomPage = () => {
  return (
    <div className={styles["add-room"]}>
      <h1>Add New Room</h1>
      <EditRoomForm />
    </div>
  );
};

export default AddRoomPage;
