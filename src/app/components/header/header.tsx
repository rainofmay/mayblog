"use client";

import React from "react";
import Image from "next/image";
import Searching from "../searching/searchingBtn";
import styles from "./header.module.css";
import logo from "../../../../public/images/logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header} style={{ fontFamily: "SoraMedium" }}>
      <div className={styles.title}>
        <Image
          src={logo}
          alt="logo"
          width="240"
          height="95"
          priority={true}
          onClick={() => {
            router.push("/");
          }}
        />
        {/* <h2 style={{fontSize:22}}>Night in May</h2> */}
      </div>
      <div className={styles.searching}>
        <Searching /> 
      </div>
    </header>
  );
}
