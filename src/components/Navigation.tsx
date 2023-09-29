import { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signInHandler = () => {
    setIsAuthenticated(true);
  };

  const signOutHandler = () => {
    setIsAuthenticated(false);
  };

  const isAuthenticatedNav = (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/log">Log</Link>
        </li>
        <li>
          <Link to="/progress">Progress</Link>
        </li>
        <li>
          <button onClick={signOutHandler} className={styles["auth-button"]}>
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );

  const isNotAuthenticatedNav = (
    <nav>
      <ul className={styles.list}>
        <li>
          <button onClick={signInHandler} className={styles["auth-button"]}>
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Pocket minder logo" />
        <Link to="/" className={styles["pocket-minder"]}>
          Pocket Minder
        </Link>
      </div>
      <div className={styles.list}>
        {isAuthenticated && isAuthenticatedNav}
        {!isAuthenticated && isNotAuthenticatedNav}
      </div>
    </header>
  );
};

export default Navigation;
