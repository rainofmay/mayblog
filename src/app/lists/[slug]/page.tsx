"use client";
//하위항목(Subcategory)별 리스트 페이지
import Image from "next/image";
import { allPosts } from "@/contentlayer/generated";
import styles from "./page.module.css";
import PostsGrid from "@/components/FeaturedPosts/PostsGrid";
import { useState, useEffect } from "react";

type categoryProps = {
  params: { slug: string };
};

export default function Lists({ params: { slug } }: categoryProps) {
  // const [selectedPosts, setSelectedPosts] = useState<[]>([]);

  const classifiedPosts = allPosts.filter((post) => post.category === slug);
  const category = classifiedPosts[0]?.category;

  if (category) 
  return (
    <div className={styles.container}>
      <h3 className={styles.title}><span>✏️ {category}</span></h3>
      <PostsGrid posts={classifiedPosts} />
    </div>
  );
  else {
    return (
      <div>아직 게시물이 존재하지 않습니다.</div>
    )
  }
}

// 정해진 규격. 특정한 경로에 한해 미리 만들어놓고 싶은 페이지
export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.category,
  }));
}
