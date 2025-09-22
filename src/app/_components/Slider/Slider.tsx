"use client";
import slide1 from "../../../../public/screens/slider/slider-image-1.jpeg";
import slide2 from "../../../../public/screens/slider/slider-image-2.jpeg";
import slide3 from "../../../../public/screens/slider/slider-image-3.jpeg";
import banner1 from "../../../../public/screens/slider/grocery-banner.png";
import banner2 from "../../../../public/screens/slider/grocery-banner-2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
export default function Slider() {
  return (
    <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-3 py-10">
      <div className="md:row-span-2  ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Image src={slide1} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Image src={banner1} alt="banner1" />
      <Image src={banner2} alt="banner2" />
    </div>
  );
}
