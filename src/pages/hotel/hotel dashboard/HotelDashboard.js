import { Link } from "react-router-dom";
import HotelList from "../../../components/hotel/HotelList/HotelList";
import styles from "./HotelDashboard.module.css";

const HotelDashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className="d-flex justify-content-between my-2">
        <h2>Hotels List</h2>
        <Link to="add-new">Add New</Link>
      </div>
      <HotelList />
    </div>
  );
};

export default HotelDashboardPage;
