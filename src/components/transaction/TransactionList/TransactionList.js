import { useLoaderData } from "react-router-dom";
import styles from "./TransactionList.module.css";
import {
  TransactionListHeader,
  TransactionListItem,
} from "./TransactionListItem/TransactionListItem";
import { useCallback, useState } from "react";
import PaginationButtons from "../../layout/PaginationButtons/PaginationButtons";
import { url_transactions_admin } from "../../../store/local-storage";

const TransactionList = () => {
  const transactions = useLoaderData();

  const [transactionList, setTransactionList] = useState(
    JSON.parse(JSON.stringify(transactions))
  );

  const loadPage = useCallback(
    async (page) => {
      try {
        const res = await fetch(url_transactions_admin + "?page=" + page);

        const data = await res.json();

        setTransactionList(data);
      } catch (error) {
        console.log(error);
      }
    },
    [setTransactionList]
  );

  return (
    <div className={styles.list}>
      <TransactionListHeader />
      {transactionList.docs.map((transac, i) => (
        <TransactionListItem key={i} transac={transac} />
      ))}
      <PaginationButtons
        onChangePage={loadPage}
        totalPages={transactionList.totalPages}
        page={transactionList.page}
      />
    </div>
  );
};

export default TransactionList;

export const loader = async () => {
  try {
    const res = await fetch(url_transactions_admin + "?page=1");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
