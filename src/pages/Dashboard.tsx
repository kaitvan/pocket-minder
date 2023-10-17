import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faGraduationCap,
  faUmbrellaBeach,
  faUtensils,
  faShieldHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.general}>
        <div className={`${styles.total} ${styles.card}`}>
          <p>You've saved $156.05 this month.</p>
        </div>
        <div className={`${styles.calendar} ${styles.card}`}>Calendar</div>
      </div>
      <div className={styles.categories}>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faCar} className={styles.icon} />
            </div>
            <div>
              <p className={styles.bold}>Auto & Transport</p>
              <p className={styles.muted}>$160 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$18.80</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <div>
              <p className={styles.bold}>Food & Drinks</p>
              <p className={styles.muted}>$200 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$41.50</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faUmbrellaBeach} />
            </div>
            <div>
              <p className={styles.bold}>Fun & Recreation</p>
              <p className={styles.muted}>$100 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$12.79</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div>
              <p className={styles.bold}>Education</p>
              <p className={styles.muted}>$150 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$19.08</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faShieldHeart} />
            </div>
            <div>
              <p className={styles.bold}>Personal Care</p>
              <p className={styles.muted}>$80 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$46.41</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
        <div className={`${styles.category} ${styles.card}`}>
          <div className={styles["category-label"]}>
            <div className={styles["icon-circle"]}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div>
              <p className={styles.bold}>Household Goods</p>
              <p className={styles.muted}>$60 total</p>
            </div>
          </div>
          <div className={styles.available}>
            <p className={styles.bold}>$17.47</p>
            <p className={styles.muted}>available</p>
          </div>
        </div>
      </div>
      <button className={styles["add-category-btn"]}>Add Category</button>
    </div>
  );
};

export default Dashboard;
