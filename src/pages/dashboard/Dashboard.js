import styleLatest from "../../components/transaction/TransactionList/TransactionList.module.css";
import InfoBoard from "../../components/dashboard/InfoBoard/InfoBoard";
import styles from "./Dashboard.module.css";
import {
  url_transactions_admin,
  url_users_all,
} from "../../store/local-storage";
import { useLoaderData } from "react-router-dom";
import {
  TransactionListHeader,
  TransactionListItem,
} from "../../components/transaction/TransactionList/TransactionListItem/TransactionListItem";
import PaginationButtons from "../../components/layout/PaginationButtons/PaginationButtons";

const LatestTransaction = ({ transactions }) => {
  return (
    <div className={styles["latest-transaction"]}>
      <h2>Latest Transactions</h2>
      <div className={styleLatest.list}>
        <TransactionListHeader />
        {transactions.slice(0, 8).map((transac, i) => (
          <TransactionListItem key={i} transac={transac} />
        ))}
        <PaginationButtons totalPages={1} page={1} />
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const loaderData = useLoaderData() ?? [];

  return (
    <div className={styles.dashboard}>
      <InfoBoard transactions={loaderData[0]} users={loaderData[1]} />
      <LatestTransaction transactions={loaderData[0]} />
    </div>
  );
};

export default DashboardPage;

export const loader = async () => {
  try {
    const res = await Promise.all([
      fetch(url_transactions_admin),
      fetch(url_users_all),
    ]);

    const data = await Promise.all([res[0].json(), res[1].json()]);

    return data;
  } catch (error) {
    console.log(error);
  }
};
