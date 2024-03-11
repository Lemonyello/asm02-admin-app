import EditHotelForm from "../../../components/hotel/EditHotelForm/EditHotelForm";
import styles from "./AddHotel.module.css";

const AddHotelPage = () => {
  return (
    <div className={styles["add-hotel"]}>
      <h1>Add New Hotel</h1>
      <EditHotelForm />
    </div>
  );
};

export default AddHotelPage;
