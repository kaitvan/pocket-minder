import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.general}>
        <div className={`${styles.total} ${styles.card}`}>
          <p>You've saved $156.05 this month.</p>
        </div>
        <div className={`${styles.calendar} ${styles.card}`}></div>
      </div>
      <div className={`${styles.categories} ${styles.card}`}>
        <div className={`${styles.category} ${styles.card}`}></div>
      </div>
      <button className={styles["add-category-btn"]}>Add Category</button>
    </div>
  );
};

export default Dashboard;
