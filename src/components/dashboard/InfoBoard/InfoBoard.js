import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InfoBoard.module.css";
import {
  faCartShopping,
  faDollar,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const InfoBoard = ({ transactions, users }) => {
  const earnings = transactions.reduce(
    (sum, transac) => transac.price + sum,
    0
  );

  return (
    <div className="d-flex justify-content-between mb-4">
      <div className={styles["info-board"]}>
        <h5>users</h5>
        <p>{users.length}</p>
        <FontAwesomeIcon icon={faUser} className={styles["icon-user"]} />
      </div>
      <div className={styles["info-board"]}>
        <h5>orders</h5>
        <p>{transactions.length}</p>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={styles["icon-cart"]}
        />
      </div>
      <div className={styles["info-board"]}>
        <h5>earnings</h5>
        <p>${earnings}</p>
        <FontAwesomeIcon icon={faDollar} className={styles["icon-dollar"]} />
      </div>
      <div className={styles["info-board"]}>
        <h5>balance</h5>
        <p>${earnings / transactions.length}</p>
        <FontAwesomeIcon icon={faWallet} className={styles["icon-wallet"]} />
      </div>
    </div>
  );
};

export default InfoBoard;
