import React from "react";
import styles from "./Header.module.css";
import coderlogo from "../../assets/logo.png";

const Header = ({
  title = "Soy una prop por defecto",
  subtitle = "Soy un sub por defecto",
  children,
}) => {
  return (
    <div className={styles.header}>
      <img src={coderlogo} alt="logo coderhouse" width={150} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Header;
