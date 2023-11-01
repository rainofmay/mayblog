"use client";

import { allPosts } from "@/contentlayer/generated";
import styles from "./searching.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; //Next.js13 버전부터 경로 얻는 방법

export default function Searching() {
  const [inputText, setInputText] = useState("");
  const router = useSearchParams();
  const HandleSearching = (e: any) => {
    e.preventDefault();
    // setInputText("");
  };

  useEffect(() => {
    setInputText("");
  }, [router.toString]);
  const filtered = allPosts.filter((post) => {
    if (inputText !== "") {
      return post.title.toUpperCase().includes(inputText.toUpperCase());
    } else {
      return null;
    }
  });

  return (
    <>
      <form onSubmit={HandleSearching}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles.searchText}
          placeholder="Search"
        />
      </form>
      {filtered.length ? (
        <section
          className={styles.section}
          style={{ backgroundColor: "rgba(51, 51, 51, 0.9)" }}
        >
          <header className={styles.header}>🔍 검색 결과 ...</header>
          <ul className={styles.searchedLists}>
            {filtered.map((list) => (
              <Link href={`/posts/${list.description}`} className={styles.link}>
                <li className={styles.searchedList} key={list._id}>
                  <div className={styles.subContainer}>
                    <img
                      className={styles.image}
                      src={list.thumbnail}
                      alt="thumbnail"
                    />
                    <div>
                      <h3 className={styles.title}>{list.title}</h3>
                      <p className={styles.subtitle}>{list.subtitle}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
