import { allPosts } from "@/contentlayer/generated";



export function getNextPrevPost (category:any, title:any) {
  const classifiedPosts = allPosts.filter((post)=> post.category === category)
  const post = allPosts.find((post)=> post.title === title)

  if (!post) throw new Error(`${title}에 해당하는 포스트를 찾을 수 없음`);

  const index = classifiedPosts?.indexOf(post);
  const next = index > 0 ? classifiedPosts[index-1] : null
  const prev = index < classifiedPosts.length ? classifiedPosts[index + 1] : null 

  return { next, prev };
}

// export const getAllPosts = async () => {
//   const res = await fetch("http://localhost:3000/api/blogPost", {
//     cache: "no-store",
//   });
//   const posts = await res.json();
//   return posts;
// };

// export const getPostData = async (id:string) => {
//   const res = await fetch("http://localhost:3000/api/blogPost", {
//     cache: "no-store",
//   });
//   const posts = await res.json();
//   const post = posts.find((post:any) => post.id === id)
//   return post;
// };

// export const addPost = async (sentData: any) => {
//   const res = await fetch("api/blogPost", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(sentData),
//   });
// };

