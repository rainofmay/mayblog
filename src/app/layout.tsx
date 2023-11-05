"use client";

import styles from "./layout.module.css";
import Header from "./components/header/header";
import Sidemenu from "./components/sidemenu/sidemenu";
import { usePathname } from "next/navigation";


export const metadata = {
  title: {
    default: "May Blog",
    template: "May Blog | %s",
  },
  description: "MAY, A Programmer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en" style={{ fontFamily: "SoraRegular" }}>
      <body>
        <div className={styles.layout}>
          <Sidemenu />
          <Header />
          {pathName === "/" && (
            <video autoPlay loop muted className={styles.video}>
              <source src="/backgroundVideo.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
