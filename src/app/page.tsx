import styles from "./page.module.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
config.autoAddCss = false

export default function HomePage() {
  return (
    <FeaturedPosts />  
  ) 
}
