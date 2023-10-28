  
// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
// import { useMDXComponent } from "next-contentlayer/hooks";
import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "@/contentlayer/generated";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import format from "date-fns/format";

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

export default async function Page({ params: { slug } }: Props) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the getMDXComponent.
  const MDXContent = getMDXComponent(post.body.code);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post?.title}</h1>
      <h4 className={styles.subTitle}>{post?.subtitle}</h4>
      <div className={styles.time}>
        <time>{format(new Date(post?.date), "yyyy. MM. dd")}</time>
      </div>
      <img src={post.thumbnail} alt={post?.title} style={{borderRadius:10, width:768, height: 400, marginTop:20, marginBottom:20}}/>
      <article className={styles.content}>
       {/* 브라우저는 <MDXRemote />가 마운트되면서 데이터를 HTML로 변환 */}
        <MDXContent />
      </article>
    </div>
  );
}
