import Shopper from "../assets/shopper.png";
import Planner from "../assets/planner.png";
import Goals from "../assets/goals.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles["item-a"]}>
        <h1>A microbudgeting tool for overspenders.</h1>
        <p className={styles.details}>
          Take control of your spending and develop new saving habits.
        </p>
        <button className={styles["how-btn"]}>How does it work?</button>
      </div>
      <img
        src={Shopper}
        alt="Illustrated person with shopping cart"
        className={styles["item-b"]}
      />

      <img
        src={Planner}
        alt="Illustrated person planning with laptop"
        className={styles["item-c"]}
      />
      <div className={styles["item-d"]}>
        <h2>Build a personalized plan.</h2>
        <p className={styles.details}>
          Create categories for flexible spending that make sense for your
          lifestyle. Log your expenses by category and watch your savings grow.
        </p>
      </div>
      <img
        src={Goals}
        alt="Illustrated person with trophy"
        className={styles["item-e"]}
      />
      <div className={styles["item-f"]}>
        <h2>Reach your goals faster.</h2>
        <p className={styles.details}>
          Tracking your spending daily means you'll know exactly how you're
          doing compared to your goals.
        </p>
      </div>
      <div className={styles["item-g"]}>
        <div>
          <p className={styles["call-to-action"]}>Ready to get started?</p>
          <button className={styles["create-account-btn"]}>
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
