"use client";

import React, { useState } from "react";
import styles from "./sidemenu.module.css";
import Profile from "../profile/profile";
import Link from "next/link";

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
              <div>
                <Link href={value=== "About me" ? "/about" :`/${value}`}>{value}</Link>
              </div>
            </li> //li 안에 div 안에 a
          ))}
        </ul>
      </nav>
    </>
  );
}
