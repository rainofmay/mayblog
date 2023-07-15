import styles from "./page.module.css";
import Image from "next/image"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function HomePage() {
  return <main className={styles.main}>Main</main>;
}
