import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: {
    default: "May Blog",
    template: "May Blog | %s",
  },
  description: "MAY, A Programmer",
}

export default function HomePage() {
  return (
    <div className={styles.homePage}>
    </div>
  );
}
