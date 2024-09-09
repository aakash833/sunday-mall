"use client";
import { useEffect } from "react";
import Image from "next/image";
import Isotope from "isotope-layout"; // Library for masonry layout
// import Category1 from "@/assets/images/1.jpg";
// import Category2 from "@/assets/images/2.jpg";
// import Category3 from "@/assets/images/3.jpg";
// import Category4 from "@/assets/images/4.jpg";
// import Category5 from "@/assets/images/5.jpg";
// import Category6 from "@/assets/images/6.jpg";
// import Category7 from "@/assets/images/7.jpg";
// import Category8 from "@/assets/images/8.jpg";
// import Category9 from "@/assets/images/9.jpg";
import AdjustableDesk from "@/assets/images/adjustable-desk.jpg";
import BambooBoard from "@/assets/images/bamboo-board.jpg";
import CeramicBakeware from "@/assets/images/ceramic-bakeware.jpg";
import ShowingCurtain from "@/assets/images/showing-curtain.jpg";
import CookwareSet from "@/assets/images/cookware-set.jpg";
import DeskChair from "@/assets/images/desk-chair.jpg";
import MattresTopper from "@/assets/images/mattres-topper.jpg";
import VaccumCleaner from "@/assets/images/vaccum-cleaner.png";
import { animateScroll as scroll } from "react-scroll"; // For scroll up
import WOW from "wowjs"; // For animation on scroll

// const products = [
//   { id: 1, image: Category1, price: "From $180", title: "Modern Chair" },
//   {
//     id: 2,
//     image: Category2,
//     price: "From $180",
//     title: "Minimalistic Plant Pot",
//   },
//   { id: 3, image: Category3, price: "From $180", title: "Modern Chair" },
//   { id: 4, image: Category4, price: "From $180", title: "Night Stand" },
//   { id: 5, image: Category5, price: "From $18", title: "Plant Pot" },
//   { id: 6, image: Category6, price: "From $320", title: "Small Table" },
//   { id: 7, image: Category7, price: "From $318", title: "Metallic Chair" },
//   {
//     id: 8,
//     image: Category8,
//     price: "From $318",
//     title: "Modern Rocking Chair",
//   },
//   { id: 9, image: Category9, price: "From $318", title: "Home Deco" },
// ];

const categories = [
  {
    id: 1,
    image: DeskChair,
    title: "Ergonomic Desk Chair",
    description: "Comfortable and adjustable office chair",
    price: 149.99,
    rating: 4.7,
  },
  {
    id: 2,
    image: CookwareSet,
    title: "Stainless Steel Cookware Set",
    description: "High-quality pots and pans for your kitchen",
    price: 299.99,
    rating: 4.9,
  },
  {
    id: 3,
    image: MattresTopper,
    title: "Memory Foam Mattress Topper",
    description: "Enhance your sleep with this plush topper",
    price: 79.99,
    rating: 4.6,
  },
  {
    id: 4,
    image: VaccumCleaner,
    title: "Cordless Vacuum Cleaner",
    description: "Powerful and versatile cleaning solution",
    price: 199.99,
    rating: 4.8,
  },
  {
    id: 5,
    image: BambooBoard,
    title: "Bamboo Cutting Board",
    description: "Durable and eco-friendly kitchen essential",
    price: 29.99,
    rating: 4.5,
  },
  {
    id: 6,
    image: ShowingCurtain,
    title: "Microfiber Shower Curtain",
    description: "Soft and water-resistant bathroom accessory",
    price: 39.99,
    rating: 4.7,
  },
  {
    id: 7,
    image: CeramicBakeware,
    title: "Ceramic Bakeware Set",
    description: "Non-stick and easy-to-clean baking dishes",
    price: 59.99,
    rating: 4.8,
  },
  {
    id: 8,
    image: AdjustableDesk,
    title: "Adjustable Standing Desk",
    description: "Improve your posture and productivity",
    price: 399.99,
    rating: 4.9,
  },
];

const ProductCategories = () => {
  // Initialize Isotope for masonry layout
  useEffect(() => {
    const iso = new Isotope(".amado-pro-catagory", {
      itemSelector: ".single-products-catagory",
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".single-products-catagory",
        percentPosition: true,
      },
    });

    // Initialize WOW for animations on scroll
    new WOW.WOW().init();

    return () => {
      iso.destroy();
    };
  }, []);

  // Scroll-up functionality
  const handleScrollUp = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="products-catagories-area clearfix md:px-14 md:py-7">
      <div className="amado-pro-catagory clearfix">
        {categories.map((category) => (
          <div
            key={category.id}
            className="single-products-catagory clearfix wow fadeInUp"
          >
            <a href="#">
              <Image
                src={category.image}
                alt={category.title}
                layout="responsive"
                width={300}
                height={200}
                className="w-full h-auto"
              />
              <div className="hover-content bg-white bg-opacity-10 backdrop-blur-sm p-3 rounded-lg">
                <div className="line"></div>
                <p>{category.price}</p>
                <h4>{category.title}</h4>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Scroll Up Button */}
      <button onClick={handleScrollUp} className="scroll-up">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductCategories;
