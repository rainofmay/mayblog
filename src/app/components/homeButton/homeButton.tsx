'use client'

import {useRouter} from 'next/navigation';
import Image from "next/image";
import home from "../../../../public/images/home.png";

export default function HomeButton() {
  const router = useRouter();
  return (
    <Image onClick={()=> {
      router.push('/')
      }} src={home} alt="home" width="32" height="32" />
  );
}
