"use client";
import Image from "next/image";
import FeaturesList from "./components/features";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BudgetFriendlyProducts from "./components/budget-friendly-products";
import { HomeSlider } from "./components/home-slider";

const settings = {
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768, // mobile breakpoint
      settings: {
        centerMode: false,
        variableWidth: false,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="">
      <div className="py-7 bg-gray-200 text-2xl font-bold">
        <Slider {...settings}>
          <div className="mr-16 text-center">
            <p> Smart Gadgets Ka Naya Hall, SundayMall</p>
          </div>
          <div className="mr-16 text-center">
            <p>Smart Gadgets Ka Naya Hall, SundayMall </p>
          </div>
          <div className="mr-16 text-center">
            <p>Smart Gadgets Ka Naya Hall, SundayMall </p>
          </div>
        </Slider>
      </div>
      <HomeSlider />
      <BudgetFriendlyProducts />
      <FeaturesList />
    </main>
  );
}
