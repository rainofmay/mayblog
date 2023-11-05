"use client";

import styles from "./page.module.css";
import { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "May Blog",
    template: "May Blog | %s",
  },
  description: "MAY, A Programmer",
};

export default function HomePage() {
  // const pathName = usePathname();
  return (
    <div className={styles.homePage}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/backgroundVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
