import PostCard from "./PostCard";
import styles from "../FeaturedPosts/FeaturedPosts.module.css";
import { v4 as uuidv4 } from "uuid";

export default function PostsGrid({ posts }: any) {

  return (
    <ul className={styles.lists}>
      {posts.map(
        (post:any) => (
          <li className={styles.list} key={uuidv4()}>
            <PostCard post={post} />
          </li>
        )
      )}
    </ul>
  );
}
