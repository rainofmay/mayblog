'use client'

import { getMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "@/contentlayer/generated";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import format from "date-fns/format";
import arrow from '../../../../public/images/icon/arrow.png';
import PostComment from "@/components/Modules/Post/PostComment/PostComment";
import { getNextPrevPost } from "@/service/post";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export function generateMetadata({ params: { slug } }: Props): Metadata {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  const title = post?.title;
  const description = post?.description
  return {title, description};
}

export default function Page({ params: { slug } }: Props) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  const newPost = getNextPrevPost(post?.category, post?.title)  
  const { prev, next } = newPost

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the getMDXComponent.
  const MDXContent = getMDXComponent(post.body.code);
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
  const MoveToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post?.title}</h1>
      <h4 className={styles.subTitle}>{post?.subtitle}</h4>
      <div className={styles.time}>
        <time>{format(new Date(post?.date), "yyyy. MM. dd")}</time>
      </div>
      <Image
        src={`${post.thumbnail}`}
        alt={post?.title}
        style={{ borderRadius: 10, width: 768, height: 400, marginTop: 20, marginBottom: 20, }}
        width={768}
        height={320}
        priority={true}
      />
      <article className={styles.content}>
        {/* 브라우저는 <MDXRemote />가 마운트되면서 데이터를 HTML로 변환 */}
        <MDXContent />
      </article>
      <Image className={styles.scrollToTop} src={arrow} alt='scroll' onClick={MoveToTop} width={25} height={25} priority={true}/>
      {post.category === 'Night' ? null : <PostComment />}
      <div className={styles.space}></div>
    </div>
  );
}
