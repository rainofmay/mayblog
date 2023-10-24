
import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/post';
import styles from "./FeaturedPosts.module.css";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  );
}

