import styles from '../styles/Home.module.css';
import NavBar from "@/components/NavBar";

import {Rubik} from 'next/font/google';
import Image from "next/image";
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.section_container}>
        <section className={styles.landing}>
          <img src="/landing-cat.png" alt="Wizard Cat"/>
        </section>
      </div>
      <div className={styles.bg}>
        <Image
          src="/bg.png"
          alt="Canvas background"
          quality="100"
          fill={true} />
      </div>
    </div>
  );
}
