import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
