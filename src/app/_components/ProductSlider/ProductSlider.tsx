"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Product } from "@/types/product.t";
export default function ProductSlider({ product }: { product: Product }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full max-w-full h-full"
    >
      {product.images.map((image: string, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Image
              width={500}
              height={500}
              className="object-cover"
              src={image}
              alt={product.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
