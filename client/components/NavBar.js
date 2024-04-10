import { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';

import {Rubik} from 'next/font/google';
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container}`}>
        <a href="#" className={styles.logo}>
          {/*<img src="/landing-cat.png" alt="Wizard Cat ($WOOSH) Logo"/>*/}
        </a>
        <div className={`${styles.nav_links} ${rubik.className}`}>
          <div className={`${styles.nav_item}`}>
            <a href="https://twitter.com/wizardcatwoosh">
              <img src="/twitter.svg" alt="Wizard Cat ($WOOSH) Community - Twitter"/>
            </a>
          </div>
          <div className={`${styles.nav_item}`}>
            <a href="https://t.me/wooshonsolana">
              <img src="/telegram.svg" alt="Wizard Cat ($WOOSH) Community - Telegram"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}