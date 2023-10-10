import styles from "./Log.module.css";

const Log = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Expense Log</h1>
        <button className={styles["add-expense-btn"]}>Add Expense</button>
      </div>
      <div className={styles.log}>
        <div>
          <div className={styles.filter}></div>
          <div className={styles.search}></div>
        </div>
        <hr></hr>
        <div>
          <table>
            <tr>
              <th>Date</th>
              <th>Payee</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>09-23-23</td>
              <td>Home Depot</td>
              <td>Household Goods</td>
              <td>$28.53</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Log;
