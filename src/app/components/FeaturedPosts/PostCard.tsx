import { Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedPosts.module.css";
import lock from "./../../../../public/images/icon/lock.png";
import DOMPurify from "isomorphic-dompurify";

//Thumb nail Post card
type Props = { post: Post };

export default function PostCard({
  post: { id, title, date, content, category, privacy },
}: Props) {
  const MAX_PREVIEW_LENGTH = 48;
  const newContent =
    content.length > MAX_PREVIEW_LENGTH
      ? content.slice(0, MAX_PREVIEW_LENGTH) + "..."
      : content;

  return (
    <Link
      href={`/posts/${id}`}
      style={{ textDecoration: "none" }}
      className={styles.cardLink}
    >
      <article className={styles.cardSection}>
        <div className={styles.cardSectionImage}>
          <Image
            src={`/images/posts/review-2022.png`} // 수정 필요
            alt={title}
            width={430}
            height={238}
          />
        </div>
        <div className={styles.cardSectionSub}>
          {/* <div>
            {privacy === "비공개" ? (
              <Image src={lock} alt="비공개" width={24} height={24} />
            ) : null}
          </div> */}
          <h3 className={styles.cardTitle}>{title}</h3>
          <p
            className={styles.cardContent}
            dangerouslySetInnerHTML={{ __html: newContent }}
          />
          <time className={styles.time}>{date}</time>
        </div>
      </article>
    </Link>
  );
}
