"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const resposive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={resposive} itemClass="m-2">
      {children}
    </Carousel>
    // 무한정 자동으로 돌도록 한다. 아이템별로 클래스를 지정한다.
  );
}
