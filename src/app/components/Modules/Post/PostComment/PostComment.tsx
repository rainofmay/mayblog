import { useRef } from 'react';
import useGiscus from '@/hooks/giscus/useGiscus';

const PostComment = (): JSX.Element => {
  const commentRef = useRef<HTMLDivElement>(null);

  useGiscus(commentRef);

  return <div ref={commentRef}></div>;
};

export default PostComment;