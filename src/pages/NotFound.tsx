import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "./NotFound.module.css";
import Search from "../assets/search.png";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Oops!</h1>
          <p>We can't seem to find the page you're looking for.</p>
        </div>
        <img
          src={Search}
          alt="Illustrated person searching on a laptop"
          className={styles["search-img"]}
        />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
