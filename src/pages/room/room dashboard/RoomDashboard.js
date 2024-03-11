import styles from "./RoomDashboard.module.css";
import RoomList from "../../../components/room/RoomList/RoomList";
import { Link } from "react-router-dom";

const RoomDashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className="d-flex justify-content-between my-2">
        <h2>Rooms List</h2>
        <Link to="add-new">Add New</Link>
      </div>
      <RoomList />
    </div>
  );
};

export default RoomDashboardPage;
