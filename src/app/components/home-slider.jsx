"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from "next/image";
import Banner1Image from "@/assets/images/Banner-1-Mobile.webp";
import Banner2Image from "@/assets/images/Banner-2-Mobile.webp";
import Banner3Image from "@/assets/images/Banner-3-Mobile.webp";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        left: "10px", // position it on the left side
        zIndex: "1", // to make sure it stays on top of the slider
      }}
      onClick={onClick}
    ></div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        right: "10px", // position it on the right side
        zIndex: "1",
      }}
      onClick={onClick}
    ></div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
  pauseOnHover: false,
  prevArrow: <PrevArrow />, // Custom Previous Arrow
  nextArrow: <NextArrow />, // Custom Next Arrow
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        dots: true,
      },
    },
  ],
};

export function HomeSlider() {
  return (
    <div
      className="overflow-hidden"
      style={{
        maxWidth: "100vw",
      }}
    >
      <Slider {...settings}>
        <div>
          <Image
            src={Banner1Image}
            alt="banner"
            layout="responsive"
            className=""
          />
        </div>
        <div>
          <Image
            src={Banner2Image}
            alt="banner"
            layout="responsive"
            className=""
          />
        </div>
        <div>
          <Image
            src={Banner3Image}
            alt="banner"
            layout="responsive"
            className=""
          />
        </div>
      </Slider>
    </div>
  );
}
