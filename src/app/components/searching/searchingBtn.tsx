"use client";

import { allPosts } from "@/contentlayer/generated";
import styles from "./searching.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Searching() {
  const [inputText, setInputText] = useState("");
  const [path, setPath] = useState('/')
  const HandleSearching = (e: any) => {
    e.preventDefault();
    // setInputText("");
  };
  const Reset = () => {
    setInputText("")
  }

  const filtered = allPosts.filter((post) => {
    if (inputText !== "") {
      return post.title.toUpperCase().includes(inputText.toUpperCase());
    } else {
      return null;
    }
  });

  console.log(filtered);
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
      {filtered.length !== 0 ? (
        <section
          className={styles.section}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <ul className={styles.searchedLists}>
            {filtered.map((list) => (
            <Link href={`/posts/${list.description}`} onClick={Reset}>
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
