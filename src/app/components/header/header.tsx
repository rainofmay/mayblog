'use client'

import React from "react";
import Image from "next/image";
import Searching from "../searching/searching";
import styles from "./header.module.css";
import logo from "../../../../public/images/logo.png";
import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image src={logo} alt="logo" width="110" height="80" onClick={()=> {
          router.push('/')
        }} />
        <h3>Nemo's Blog</h3>
        <Searching />
      </div>
    </header>
  );
}
