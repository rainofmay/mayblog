import { Post } from "@/service/post";
import PostCard from "./PostCard";
//type Props = {posts: Post[]};
export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}> <PostCard post={post} /> </li>
      ))}
    </ul>
  ); 
}
