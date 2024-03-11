import styles from "./TransactionListItem.module.css";

export const TransactionListHeader = () => {
  return (
    <div className={styles.header}>
      <input type="checkbox" />
      <h5 className={styles.id}>id</h5>
      <h5 className={styles.name}>user</h5>
      <h5 className={styles.hotel}>hotel</h5>
      <h5 className={styles.room}>room</h5>
      <h5 className={styles.date}>date</h5>
      <h5 className={styles.price}>price</h5>
      <h5 className={styles.payment}>payment method</h5>
      <h5 className={styles.status}>status</h5>
    </div>
  );
};

export const TransactionListItem = ({
  transac: {
    _id,
    user,
    hotel,
    room,
    dateStart,
    dateEnd,
    payment,
    price,
    status,
  },
}) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <p className={styles.id}>{_id}</p>
      <p className={styles.name}>{user}</p>
      <p className={styles.hotel}>{hotel}</p>
      <p className={styles.room}>{room.toString()}</p>
      <p className={styles.date}>{dateStart + " - " + dateEnd}</p>
      <p className={styles.price}>${price}</p>
      <p className={styles.payment}>{payment}</p>
      <div className={styles.status}>
        <p className={styles[status.toLowerCase()]}>{status}</p>
      </div>
    </div>
  );
};
