import React from "react";
import Image from "next/image";
import Searching from "../searching/searching";
import styles from "./header.module.css";
import logo from "../../../../public/images/logo.png";
import HomeButton from "../homeButton/homeButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image src={logo} alt="logo" width="110" height="80" />
        <h3>Nemo's Blog</h3>
        <HomeButton />
        <Searching />
      </div>
    </header>
  );
}
