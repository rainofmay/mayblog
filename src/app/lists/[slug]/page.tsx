"use client";
//하위항목(Subcategory)별 리스트 페이지
import Image from "next/image";
import styles from "./page.module.css";
import { categories } from "@/components/sidemenu/sidemenu";
import PostsGrid from "@/components/FeaturedPosts/PostsGrid";
import { getAllPosts } from "@/service/post";
import { useState, useEffect, } from "react";
import { Post } from "@/service/post";

type categoryProps = {
  params: { slug: string };
};

const lists = categories.map((category) =>
  category.subcategories.map((subcategory) => subcategory.name)
);

//1차원 배열로 변환
const newLists = lists.reduce((acc, currentArray) => {
  return acc.concat(currentArray);
}, []);

// const lowerLists = newLists.map((item) => item.toLowerCase());
// console.log(lowerLists);

export default function Lists({ params: { slug } }: categoryProps) {
  const [selectedPosts, setSelectedPosts] = useState<[]>([]);

  // const fetchedData = async () => {
  //   const fetchedPosts = await getAllPosts();
  //   setPosts(fetchedPosts);
  //   const filteredPosts = posts.filter((post:Post) => post.id === slug);
  //   setSelectedPosts(filteredPosts);
  // }
  // const {id, title, date, content, category, privacy } = fetchedPosts;

  useEffect(() => {
    async function fetchData() {
      await getAllPosts();
      try {
        const fetchedPosts = await getAllPosts();
        const filteredPosts = fetchedPosts.filter(
          (post: Post) => post.category === slug
        );
        setSelectedPosts(filteredPosts);
        console.log(filteredPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, [slug]);
  //포스트 카드 component 로 이루어진 Grid 불러오기
  //단, 조건은 params.slug(만들어진것) === category
    return (
      <div className={styles.container}>
        <h2 className="">카테고리</h2>
        {selectedPosts.map((selectedPost: { category: string, id:string }) => (
          <li key={selectedPost.id}>{selectedPost.category}</li>
        ))}
        <PostsGrid posts = {selectedPosts}/> 
        {/* //GETPOST를 요청해서 DB의 category 와 list가 같은 것을 배열 []로 만들어 POSTGrid에 파라미터로 전달
        예를 들어, params.slug = 'React' 면 DB의 category가 'React'인 것을 찾아 배열로 전달 */}
      </div>
    );
}



// 정해진 규격. 특정한 경로에 한해 미리 만들어놓고 싶은 페이지
export function generateStaticParams() {
  return newLists.map((list) => ({ slug: list }));
}
