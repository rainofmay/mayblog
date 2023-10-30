"use client";

import React, { useEffect, useState } from "react";
import styles from "./sidemenu.module.css";
import Profile from "../profile/profile";
import Image from "next/image";
import duties from "../../../../public/images/icon/duties.png";
import programming from "../../../../public/images/icon/programming.png";
import projects from "../../../../public/images/icon/projects.png";
import database from "../../../../public/images/icon/database.png";
import html from "../../../../public/images/icon/html.png";
import design from "../../../../public/images/icon/design.png";
import etc from "../../../../public/images/icon/etc.png";
import home from "../../../../public/images/icon/home.png";
import reactIcon from "../../../../public/images/icon/react.png";
import next from "../../../../public/images/icon/next.png";
import expandMore from "../../../../public/images/icon/expandMore.png";
import expandLess from "../../../../public/images/icon/expandLess.png";
import daily from "../../../../public/images/icon/daily.png";
import day from "../../../../public/images/icon/day.png";
import night from "../../../../public/images/icon/night.png";
import git from "../../../../public/images/icon/git.png";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { allPosts } from "@/contentlayer/generated";
import Router from "next/router";

const Home: any = { id: uuidv4(), name: "Home", img: home };

export const categories = [
  {
    id: uuidv4(),
    name: "Programming",
    img: programming,
    subcategories: [
      { id: uuidv4(), name: "React", img: reactIcon },
      { id: uuidv4(), name: "Next.JS", img: next },
      { id: uuidv4(), name: "DataBase", img: database },
      { id: uuidv4(), name: "HTML & CSS", img: html },
      { id: uuidv4(), name: "Git", img: git },
    ],
  },
  {
    id: uuidv4(),
    name: "Projects",
    img: projects,
    subcategories: [
      { id: uuidv4(), name: "Planning", img: design },
      { id: uuidv4(), name: "Administration", img: duties },
      { id: uuidv4(), name: "Etc", img: etc },
    ],
  },
  {
    id: uuidv4(),
    name: "Private",
    img: daily,
    subcategories: [
      { id: uuidv4(), name: "Day", img: day },
      { id: uuidv4(), name: "Night", img: night },
    ],
  },
];

// type categoryProps = {
//   id: string;
//   name: string;
//   img: any;
//   subcategories: any;
// };

export default function Sidemenu() {
  const router = useRouter();

  //하위 카테고리 토글
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
      setIsClicked(false);
    } else {
      setExpandedCategories([...expandedCategories, category]);
      setIsClicked(true);
    }
  };

  //카테고리 클릭 시 색상 변경
  const [selectedItem, setSelectedItem] = useState(null);
  const clickedCategory = (e: any) => {
    router.push(`/lists/${e.target.textContent}`);
    setSelectedItem(e.target.textContent);

  };
  const Counter = (name: string) => {
    const newPosts = allPosts.filter((post) => post.category === name);
    return newPosts.length;
  };

  return (
    <nav className={styles.sideMenu}>
      <div className={styles.profile}>
        <Profile />
      </div>
      <div className={styles.introduction}>
        <p>&nbsp; :&nbsp; BA Naval Academy (2015)</p>
        <p>&nbsp; :&nbsp; Preparing for a Start-up</p>
      </div>
      <span className={styles.sentence}>✏️ &nbsp;MAY 블로그입니다.</span>
      <div className={styles.line}></div>
      <ul className={styles.lists}>
        <li key={Home.id} className={styles.list}>
          <span
            onClick={() => {
              router.push("/");
              setSelectedItem(null);
            }}
            className={styles.listspan}
          >
            <Image
              src={Home.img}
              alt={Home.name}
              width={15}
              height={15}
              className={styles.icon}
            />
            {Home.name}
          </span>
        </li>
        {categories.map((category) => (
          <li key={category.id} className={styles.list}>
            <span
              onClick={() => toggleCategory(category.id)}
              className={styles.listspan}
            >
              <Image
                src={category.img}
                alt={category.name}
                width={15}
                height={15}
                className={styles.icon}
              />
              {category.name}
              {expandedCategories.includes(category.id) ? (
                <Image
                  src={expandLess}
                  alt="expandLess"
                  className={styles.expand}
                  width={15}
                  height={15}
                />
              ) : (
                <Image
                  src={expandMore}
                  alt="expandMore"
                  className={styles.expand}
                  width={15}
                  height={15}
                />
              )}
            </span>
            <ul
              className={`${styles["subLists"]} ${
                expandedCategories.includes(category.id)
                  ? styles.visible
                  : styles.hidden
              }`}
              style={
                expandedCategories.includes(category.id)
                  ? { maxHeight: category.subcategories.length * 33 }
                  : { maxHeight: 0 }
              }
            >
              {category.subcategories.map((subcategory) => (
                <li
                  onClick={(e) => clickedCategory(e)}
                  key={subcategory.id}
                  className={styles.subList}
                  style={{
                    color:
                      selectedItem === subcategory.name
                        ? "rgb(225, 2, 255)"
                        : undefined,
                  }}
                >
                  <span className={styles.subListspan}>
                    <Image
                      src={subcategory.img}
                      alt={subcategory.name}
                      width={15}
                      height={15}
                      className={styles.subIcon}
                    />
                    {subcategory.name}
                  </span>
                  <span className={styles.counter}>
                    &nbsp;{"("}
                    {Counter(subcategory.name)}
                    {")"}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
