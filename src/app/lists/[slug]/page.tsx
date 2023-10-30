"use client";
//하위항목(Subcategory)별 리스트 페이지
import Image from "next/image";
import { allPosts } from "@/contentlayer/generated";
import styles from "./page.module.css";
import PostsGrid from "@/components/FeaturedPosts/PostsGrid";
import { useState, useEffect } from "react";
import leaf from "@/../public/images/leaf.png";
import axios from "axios";
import Pagination from "../Pagination";

type categoryProps = {
  params: { slug: string };
};

export default function Lists({ params: { slug } }: categoryProps) {
  const classifiedPosts = allPosts.filter((post) => post.category === slug);
  const category = classifiedPosts[0]?.category;

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (classifiedPosts: any) => {
    let currentPosts = 0;
    currentPosts = classifiedPosts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  if (category)
    return (
      <>
        <div className={styles.container}>
          <h3 className={styles.title}>
            <span>✏️ {category}</span>
          </h3>
          <PostsGrid posts={classifiedPosts} />
        </div>
        <Pagination
          className={styles.pagination}
          postsPerPage={postsPerPage}
          totalPosts={classifiedPosts.length}
          paginate={setCurrentPage}
        />
      </>
    );
  else {
    return (
      <div className={styles.notice}>
        <Image src={leaf} alt="notice" width={300} height={300} />
        <p className={styles.noticeComment}>아직 게시물이 없습니다.</p>
      </div>
    );
  }
}

// 정해진 규격. 특정한 경로에 한해 미리 만들어놓고 싶은 페이지
export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.category,
  }));
}
