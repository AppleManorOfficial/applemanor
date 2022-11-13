import React, { useState } from 'react';
import homepageCover2 from '../../image/2-1.png';
import homepageCover1 from '../../image/cover.jpg';
import './HomePage.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';

function HomePage() {
  return (
    <>
      <div className="HomePage_cover">
        <Swiper
          // pagination={true}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="d-flex justify-content-center slider"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="slider">
            <img src={homepageCover1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img src={homepageCover2} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="cover-content">
          <p>
            我們重視每一個細節，傳承中國古老漢方的純樸與自然，堅持天然環保，秉持『回歸自然』的理念。
            <br></br>
            以天然植物為基礎，以最溫和、最自然的特性，創造精緻環保且安全的高品質天然草本生活。
          </p>
        </div>
        <div className="concept">
          <p>
            <span className="title">我們的理念 :</span>
            <br></br>
            『堅持草本』、『崇尚自然』
          </p>
          <p>
            <span className="title">我們的承諾 :</span>
            <br></br>
            創造精緻.環保且安全的高草本生活是我們的堅持
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
