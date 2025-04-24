import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dog />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;
