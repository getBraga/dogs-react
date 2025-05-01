import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
const UserHeader = () => {
  const [tittle, setTitle] = React.useState("");
  const { pathname } = useLocation();
  React.useEffect(() => {
    const titles = {
      "/conta/postar": "Poste Sua Foto",
      "/conta/estatistica": "Estatística",
    };

    setTitle(titles[pathname] || "Minha Conta");
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{tittle}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
