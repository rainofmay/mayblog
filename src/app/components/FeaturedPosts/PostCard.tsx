
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedPosts.module.css";
import lock from "./../../../../public/images/icon/lock.png";
import format from "date-fns/format";

export default function PostCard({ post }: any) {
  const {title, subtitle, description, date, category, thumbnail} = post
  // const MAX_PREVIEW_LENGTH = 48;
  // const newContent =
  //   content.length > MAX_PREVIEW_LENGTH
  //     ? content. slice(0, MAX_PREVIEW_LENGTH) + "..."
  //     : content;

  return (
    <Link
      href={`/posts/${description}`}
      style={{ textDecoration: "none" }}
      className={styles.cardLink}
    >
      <article className={styles.cardSection}>
        <div className={styles.cardSectionImage}>
          <img
            src={thumbnail} // 수정 필요
            alt={title}
            width={430}
            height={238}
          />
        </div>
        <div className={styles.cardSectionSub}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubTitle}>{subtitle}</p>
          <time className={styles.time}>{format(new Date(post?.date), "yyyy. MM. dd")}</time>
        </div>
      </article>
    </Link>
  );
}
