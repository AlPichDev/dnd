import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { SwiperNavBtn } from '../Components/SwiperNavBtn';

import styles from './Main.module.scss'

interface IMainProps { }

export const Main = () => {

  return (
    <>
      <div>
        <Swiper
          className={styles.swiperContainer}
          modules={[Navigation, Pagination]}
          rewind
          spaceBetween={30}
          slidesPerView={1}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
          <SwiperNavBtn />
        </Swiper>
      </div>

    </>
  );
}