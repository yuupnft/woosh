import styles from '../styles/Home.module.css';
import NavBar from "@/components/NavBar";
import ImageSlider from "@/components/ImageSlider";

import {Rubik} from 'next/font/google';
import {Archivo_Black} from 'next/font/google';
import Image from "next/image";

import { useState } from 'react';

import confetti from 'canvas-confetti';

const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

const archivo_black = Archivo_Black({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  const prompts = [
    <p key={1}>now<br/>ur<br/>rich</p>,
    <p key={2}>u<br/>become<br/>cat</p>,
    <p key={3}>no<br/>more<br/>hat</p>,
    <p key={4}>ur<br/>a<br/>chad</p>,
    <p key={5}>ur<br/>money<br/>gone</p>
  ];
  const [promptIndex, setPromptIndex] = useState(0);

  const images = [
    "/meme1.jpg",
    "/meme2.jpg",
    "/meme3.jpg",
    "/meme4.jpg",
    "/meme5.jpg",
    "/meme6.jpg",
    "/meme7.jpg",
    "/meme8.jpg",
  ];

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.section_container}>
        <div className={styles.landing}>
          <img src="/landing-cat.png" alt="Wizard Cat" onClick={() => {
            setPromptIndex((promptIndex + 1) % prompts.length);
            confetti({
              particleCount: 100,
              spread: 120,
              origin: { y: 0.6 }
            });
          }}/>
          <div className={`${styles.prompt} ${archivo_black.className}`}>
            {prompts[promptIndex]}
          </div>
        </div>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>what&apos;s woosh?</h1>
          <p>
            Wizard Cat, is a famous wizard known for crafting the spell called...<br/>
            <br/>
            &quot;WOOSH&quot;<br/>
            <br/>
            Utter the spell whenever you need to change the current circumstances of your life.<br/>
            <br/>
            However, be careful, as the spell is known to backfire at times...<br/>
            <br/>
          </p>
          <div className={styles.infos_shape}>
            {/*<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 168.5 152.6" fill="rgba(231, 249, 253, 1)"><path d="M25.1,17.1s69.1-39.5,95.6,1.4S180,30,164.5,90c-12.4,47.8-26.1,20.6-62,57.9-17.8,18.5-77.2-22-89.8-48.3C-8.8,54.6-2,32.2,25.1,17.1Z"></path></svg>*/}
            <svg className={styles.svg} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255, 255, 255, 0.7)"
                    d="M23.4,-36.7C30.5,-31.7,36.8,-25.7,40.2,-18.3C43.7,-10.9,44.3,-2.2,43.2,6.3C42,14.8,39.1,23.1,33.8,29.3C28.4,35.5,20.6,39.5,12.4,41.8C4.2,44,-4.5,44.4,-11.8,41.6C-19.1,38.8,-25,32.8,-29.7,26.3C-34.4,19.9,-37.9,12.9,-39.2,5.5C-40.6,-2,-39.9,-9.9,-37.4,-17.8C-34.9,-25.6,-30.7,-33.4,-24.1,-38.6C-17.6,-43.8,-8.8,-46.6,-0.4,-46C8.1,-45.4,16.2,-41.6,23.4,-36.7Z"
                    width="100%" height="100%" transform="translate(50 50)" strokeWidth="1"
                    stroke="">
              </path>
            </svg>
          </div>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Tokenomics</h1>
          <div className={styles.pill_container}>
            <div className={styles.pill}>
              <div className={styles.header}>
                Ticker
              </div>
              <div className={styles.detail}>
                $WOOSH
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Supply
              </div>
              <div className={styles.detail}>
                100.000.000
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Tax
              </div>
              <div className={styles.detail}>
                0/0
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Liquidity
              </div>
              <div className={styles.detail}>
                🔥
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Memes</h1>
          <ImageSlider images={images} />
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
