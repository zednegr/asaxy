import "./brands.scss"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';



function Brands() {
    return (
        <section className="section-5">
            <div className="container">
                <div className="brands-box">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,    
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="error" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-a" href="#"><img src="https://assets.asaxiy.uz/brand/webp//603481675b122.webp" alt="error" /></a></SwiperSlide>

                        
                    
                        </Swiper>
                </div>
            </div>
        </section>
    )   
}

export default Brands