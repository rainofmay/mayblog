"use client";

import { allPosts } from "@/contentlayer/generated";
import styles from "./searching.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; //Next.js13 버전부터 경로 얻는 방법
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

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
          style={{ backgroundColor: "rgba(51, 51, 51, 0.7)" }}
        >
          <header className={styles.header}>🔍 검색 결과 ...</header>
          <ul className={styles.searchedLists}>
            {filtered.map((list) => (
              <Link href={`/posts/${list.description}`} className={styles.link} key={uuidv4()}>
                <li className={styles.searchedList}>
                  <div className={styles.subContainer}>
                    <Image
                      className={styles.image}
                      src={`${list.thumbnail}`}  //절대경로는 문자열로 인식
                      alt="thumbnail"
                      width={50}
                      height={50}
                      priority={true}
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
