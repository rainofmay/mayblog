import Image from "next/image";

type ThumbnailProps = {
  alt: string;
  thumbnail: string;
};

const PostThumbnail = ({ alt, thumbnail }: ThumbnailProps): JSX.Element => {
  return (
    <Image
      src={thumbnail}
      alt={alt}
      width={768}
      height={200}
      border-radius={5}
    />
  );
};

export default PostThumbnail;