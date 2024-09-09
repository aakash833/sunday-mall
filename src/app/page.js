"use client";
import Image from "next/image";
import FeaturesList from "./components/features";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BudgetFriendlyProducts from "./components/budget-friendly-products";
import { HomeSlider } from "./components/home-slider";
import ProductCategories from "./components/explore-products";

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
    <main className="mt-[110px]">
      <ProductCategories />
      {/* Budget Friendly Products with hover effect */}
      <div className="py-10 bg-white">
        <BudgetFriendlyProducts />
      </div>

      {/* Features List Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold mb-8">Why Choose Us?</h2>
        <FeaturesList />
      </div>
    </main>
  );
}
