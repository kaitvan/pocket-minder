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

  const fullNavBar = (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/log">Log</Link>
      <Link to="/progress">Progress</Link>
      <button onClick={signOutHandler}>Sign Out</button>
    </>
  );

  return (
    <header>
      <img src={Logo} alt="Pocket minder logo" />
      <Link to="/" className={styles["pocket-minder"]}>
        Pocket Minder
      </Link>
      {isAuthenticated && fullNavBar}
      {!isAuthenticated && <button onClick={signInHandler}>Sign In</button>}
    </header>
  );
};

export default Navigation;
