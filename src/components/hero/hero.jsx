import './hero.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import HeroSale from "../../assets/img/hero-sale.png"

function Hero() {
    return (
        <section className='hero-section'>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-slider">

                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='SwipeSlide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64a25f5857261.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='SwipeSlide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64a268d30112e.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='SwipeSlide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6486eb5d15718.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='SwipeSlide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6454e5f4a7457.jpg.webp" alt="error" /></SwiperSlide>
                            <SwiperSlide className='SwipeSlide'><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64748df45849f.jpg.webp" alt="error" /></SwiperSlide>
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