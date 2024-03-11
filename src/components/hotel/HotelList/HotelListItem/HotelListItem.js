import { url_hotels_admin_delete } from "../../../../store/local-storage";
import styles from "./HotelListItem.module.css";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const HotelListHeader = () => {
  return (
    <div className={styles.header}>
      <input type="checkbox" />
      <h5 className={styles.id}>id</h5>
      <h5 className={styles.name}>name</h5>
      <h5 className={styles.type}>type</h5>
      <h5 className={styles.title}>title</h5>
      <h5 className={styles.city}>city</h5>
      <h5 className={styles.action}>action</h5>
    </div>
  );
};

export const HotelListItem = ({
  hotel: { _id, city, title, name, type },
  onDeleteHandler,
}) => {
  const navigate = useNavigate();

  const onDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const res = await fetch(url_hotels_admin_delete, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ hotelId: _id, name }),
              });

              const data = await res.json();

              if (res.ok) onDeleteHandler(_id);

              alert(data.msg);
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          label: "No",
        },
      ],
      closeOnEscape: true,
    });
  };

  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <p className={styles.id}>{_id}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.type}>{type}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.city}>{city}</p>
      <p className={styles.action}>
        <button onClick={onDelete}>Delete</button>
        <button onClick={navigate.bind(null, "edit/" + _id + "?edit=true")}>
          Edit
        </button>
      </p>
    </div>
  );
};
