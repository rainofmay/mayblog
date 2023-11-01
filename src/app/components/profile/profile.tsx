import profile from "../../../../public/images/profile.jpg";
import Image from "next/image";
import styles from "../profile/profile.module.css"

export default function Profile() {
  return (
    <div>
      <Image src={profile} alt="Picture of the author" className={styles.profile} priority={true}/>
    </div>
  );
}
