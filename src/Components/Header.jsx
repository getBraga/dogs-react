import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg?react";
import { UserContext } from "../UserContext";
const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
