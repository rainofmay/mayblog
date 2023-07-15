"use client";

import styles from "./searching.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Searching() {
  return (
    <form>
      <input type="text" className={styles.searchText} placeholder="Search" />
    </form>
  );
}
