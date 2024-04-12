import { useEffect, useState } from 'react';

import styles from "../styles/ImageSlider.module.css";

function ImageSlider(props) {
  const [slideIndex, setSlideIndex] = useState(0);

  function previous() {
    setSlideIndex(Math.max(0, slideIndex - 1));
  }

  function next() {
    setSlideIndex(Math.min(images.length - 1, slideIndex + 1));
  }

  const images = [];
  props.images.forEach((item, index) => {
    images.push(<div key={index} className={`${styles.fade} ${(index === slideIndex ? styles.display : "")}`}>
      <img src={item} key={index} alt="image"/>
    </div>)
  });
  return (
    <div className={styles.container}>
      <div className={styles.slideshow_container}>
        {images}
        <a className={styles.prev} onClick={previous}>❮</a>
        <a className={styles.next} onClick={next}>❯</a>
      </div>
    </div>
  );
}

export default ImageSlider;