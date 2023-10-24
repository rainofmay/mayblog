'use client';

import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import arrow from '../../../../public/images/icon/arrow.png';
import styles from './ScrollToTopArrow.module.css';

export default function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <Image src={arrow} alt='arrow' width={40} height={40} onClick={scrollToTop} />
    </div>
  );
}

