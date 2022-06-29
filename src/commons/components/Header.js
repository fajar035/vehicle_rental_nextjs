import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered
} from "@fortawesome/free-solid-svg-icons";
import photoDefault from "../assets/images/default-img.png";
import iconMessage from "../assets/icons/mail-icon.png";

function Header() {
  const [isActivebar, setIsActiveBar] = useState(false);

  const handleClickBar = () => {
    setIsActiveBar((isActivebar) => !isActivebar);
  };

  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles.logo}>
        <Image src='/logo.svg' alt='Logo' width={50} height={50} />
      </div>
      <ul
        className={isActivebar ? styles["menu-show"] : styles["menu"]}
      >
        <li>Home</li>
        <li>Vehicle Type</li>
        <li>History</li>
        <li>About</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
      <div className={styles["icon-bar"]} onClick={handleClickBar}>
        {!isActivebar ? (
          <FontAwesomeIcon icon={faBars} width={40} />
        ) : (
          <FontAwesomeIcon icon={faBarsStaggered} width={40} />
        )}
      </div>
    </nav>
  );
}

export default Header;
