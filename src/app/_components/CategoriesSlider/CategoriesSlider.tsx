"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Category } from "@/types/category.t";
export default function CategoriesSlider({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="py-10">
      <Swiper spaceBetween={50} slidesPerView={5}>
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Image
              width={500}
              height={500}
              src={category.image}
              alt={category.name}
              className="h-[200px]"
            />
            <p className="font-bold">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
