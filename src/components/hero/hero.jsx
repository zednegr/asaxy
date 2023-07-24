import './hero.scss'
import HeroSale from "../../assets/img/hero-sale.png"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
    return (
        <section className='hero-section'>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-slider">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="hero_swiper"
                        >
                            <SwiperSlide className='hero-slide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64a25f5857261.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='hero-slide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64a268d30112e.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='hero-slide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6486eb5d15718.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='hero-slide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6454e5f4a7457.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='hero-slide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64748df45849f.jpg.webp" alt="error" /></SwiperSlide>
                        </Swiper>

                        <div className="hero-sale">
                            <img src={HeroSale} alt="error" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero