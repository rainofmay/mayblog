"use client";

import React, { useState } from "react";
import styles from "./sidemenu.module.css";
import Profile from "../profile/profile";

export default function Sidemenu() {
  const categories = ["About me", "Programming", "Business", "Daily life"];
  const [category, setCategory] = useState(categories);

  return (
    <>
      <nav className={styles.sideMenu}>
        <Profile />
        <ul>
          {category.map((value, index) => (
            <li key={index} className={styles.lists}>
              {value}
              <a href=""></a>
            </li>  //li 안에 div 안에 a
          ))}
        </ul>
      </nav>
    </>
  );
}
