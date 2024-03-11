import { memo } from "react";
import styles from "./PaginationButtons.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginationButtons = ({ onChangePage, totalPages, page: curPage }) => {
  let page = curPage;
  return (
    <div className={styles.pagin}>
      <p>
        {(page - 1) * 9}-{page * 9} of {totalPages * 9}
      </p>
      <div className={styles.buttons}>
        <button
          disabled={curPage === 1}
          onClick={() => {
            page--;
            onChangePage(page);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          disabled={curPage === totalPages}
          onClick={() => {
            page++;
            onChangePage(page);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};
export default PaginationButtons;
