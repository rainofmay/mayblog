import { Post } from "@/service/post";
import PostCard from "./PostCard";
import styles from "../FeaturedPosts/FeaturedPosts.module.css";


export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className={styles.lists}> 
      {posts.map((post) => (
        <li className={styles.list} key={post.id}> <PostCard post={post} /> </li>
      ))}
    </ul>
  ); 
}
