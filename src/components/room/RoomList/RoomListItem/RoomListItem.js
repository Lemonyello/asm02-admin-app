import styles from "./RoomListItem.module.css";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { url_rooms_admin_delete } from "../../../../store/local-storage";

export const RoomListHeader = () => {
  return (
    <div className={styles.header}>
      <input type="checkbox" />
      <h5 className={styles.id}>id</h5>
      <h5 className={styles.title}>title</h5>
      <h5 className={styles.description}>description</h5>
      <h5 className={styles.price}>price</h5>
      <h5 className={styles["max-people"]}>max people</h5>
      <h5 className={styles.action}>action</h5>
    </div>
  );
};

export const RoomListItem = (
  { room: { _id, title, desc, price, maxPeople } },
  onDeleteHandler
) => {
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
              const res = await fetch(url_rooms_admin_delete, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ roomId: _id }),
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
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{desc.slice(0, 55) + "..."}</p>
      <p className={styles.price}>{price}</p>
      <p className={styles["max-people"]}>{maxPeople}</p>
      <div className={styles.action}>
        <button onClick={onDelete}>Delete</button>
        <button onClick={navigate.bind(null, "edit/" + _id + "?edit=true")}>
          Edit
        </button>
      </div>
    </div>
  );
};
