import React from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SwiperNavBtn.module.scss'

interface ISwiperNavBtnProps { }

export const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className={styles.cont}>
        <button className={styles.button} onClick={() => swiper.slidePrev()}>Prev</button>
        <button className={styles.button} onClick={() => swiper.slideNext()}>Next</button>
      </div>
    </>
  );
}