export type Post = {
  id: string;
  title: string;
  date: string;
  content: any;
  category: string;
  privacy: string;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export const getAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blogPost", {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};

export const getPostData = async (id:string) => {
  const res = await fetch("http://localhost:3000/api/blogPost", {
    cache: "no-store",
  });
  const posts = await res.json();
  const post = posts.find((post:any) => post.id === id)
  return post;
};

export const addPost = async (sentData: any) => {
  const res = await fetch("api/blogPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sentData),
  });
  // console.log(sentData);
};

export const editTodo = async (newTodo:any) => {
  await fetch("api/todo", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

export const deleteTodo = async (id: string) => {
  await fetch("api/todo", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
};
