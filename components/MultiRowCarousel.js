"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const MultiRowCarousel = ({ images, rows = 3 }) => {
  const slidesPerRow = Math.ceil(images.length / rows);

  return (
    <div className="space-y-10">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const startIndex = rowIndex * slidesPerRow;
        const rowImages = images.slice(startIndex, startIndex + slidesPerRow);
        const reverse = rowIndex % 2 === 1;

        return (
          <Swiper
            key={rowIndex}
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: reverse,
            }}
            pagination={{ clickable: false }}
            className="w-full h-[300px]"
          >
            {rowImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={img}
                  width={600}
                  height={400}
                  alt={`portfolio-${rowIndex}-${idx}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        );
      })}
    </div>
  );
};

export default MultiRowCarousel;
