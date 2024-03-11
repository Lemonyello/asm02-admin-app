import TransactionList from "../../components/transaction/TransactionList/TransactionList";
import styles from "./TransactionDashboard.module.css";

const TransactionDashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Transactions List</h2>
      <TransactionList />
    </div>
  );
};

export default TransactionDashboardPage;
