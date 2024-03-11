import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShapes,
  faUser,
  faHotel,
  faCreditCard,
  faTruck,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const navs = [
  {
    title: "main",
    subtitles: [
      {
        icon: faShapes,
        name: "dashboard",
        path: "/home",
      },
    ],
  },
  {
    title: "lists",
    subtitles: [
      {
        icon: faUser,
        name: "users",
        path: "/home",
      },
      {
        icon: faHotel,
        name: "hotels",
        path: "/hotels",
      },
      {
        icon: faCreditCard,
        name: "rooms",
        path: "/rooms",
      },
      {
        icon: faTruck,
        name: "transactions",
        path: "/transactions",
      },
    ],
  },
  {
    title: "new",
    subtitles: [
      {
        icon: faHotel,
        name: "new hotel",
        path: "/hotels/add-new",
      },
      {
        icon: faCreditCard,
        name: "new room",
        path: "/rooms/add-new",
      },
    ],
  },
  {
    title: "user",
    subtitles: [
      {
        icon: faArrowRightFromBracket,
        name: "Logout",
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className={styles["side-bar"]}>
      <h1>Admin Page</h1>
      <div>
        {navs.map((nav, i) => (
          <Fragment key={i}>
            <h3>{nav.title}</h3>
            {nav.subtitles.map((subtitle, j) => (
              <div
                key={j}
                className="d-flex flex-direction-column mb-1 align-items-center"
              >
                <FontAwesomeIcon icon={subtitle.icon} className={styles.icon} />
                <Link to={subtitle.path}>{subtitle.name}</Link>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
