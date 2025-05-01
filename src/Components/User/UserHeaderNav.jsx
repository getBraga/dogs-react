import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Estatistica from "../../Assets/estatisticas.svg?react";
import AdicionnarFoto from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleClickLogout() {
    userLogout();
    navigate("/login");
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatistica">
        {" "}
        <Estatistica />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        {mobile && "Adicionar Fotos"} <AdicionnarFoto />
      </NavLink>
      <button onClick={handleClickLogout}>
        {""}
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
