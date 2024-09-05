"use client";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import AdjustableDesk from "@/assets/images/adjustable-desk.jpg";
import BambooBoard from "@/assets/images/bamboo-board.jpg";
import CeramicBakeware from "@/assets/images/ceramic-bakeware.jpg";
import ShowingCurtain from "@/assets/images/showing-curtain.jpg";
import CookwareSet from "@/assets/images/cookware-set.jpg";
import DeskChair from "@/assets/images/desk-chair.jpg";
import MattresTopper from "@/assets/images/mattres-topper.jpg";
import VaccumCleaner from "@/assets/images/vaccum-cleaner.png";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const products = [
    {
      id: 1,
      image: DeskChair,
      name: "Ergonomic Desk Chair",
      description: "Comfortable and adjustable office chair",
      price: 149.99,
      rating: 4.7,
    },
    {
      id: 2,
      image: CookwareSet,
      name: "Stainless Steel Cookware Set",
      description: "High-quality pots and pans for your kitchen",
      price: 299.99,
      rating: 4.9,
    },
    {
      id: 3,
      image: MattresTopper,
      name: "Memory Foam Mattress Topper",
      description: "Enhance your sleep with this plush topper",
      price: 79.99,
      rating: 4.6,
    },
    {
      id: 4,
      image: VaccumCleaner,
      name: "Cordless Vacuum Cleaner",
      description: "Powerful and versatile cleaning solution",
      price: 199.99,
      rating: 4.8,
    },
    {
      id: 5,
      image: BambooBoard,
      name: "Bamboo Cutting Board",
      description: "Durable and eco-friendly kitchen essential",
      price: 29.99,
      rating: 4.5,
    },
    {
      id: 6,
      image: ShowingCurtain,
      name: "Microfiber Shower Curtain",
      description: "Soft and water-resistant bathroom accessory",
      price: 39.99,
      rating: 4.7,
    },
    {
      id: 7,
      image: CeramicBakeware,
      name: "Ceramic Bakeware Set",
      description: "Non-stick and easy-to-clean baking dishes",
      price: 59.99,
      rating: 4.8,
    },
    {
      id: 8,
      image: AdjustableDesk,
      name: "Adjustable Standing Desk",
      description: "Improve your posture and productivity",
      price: 399.99,
      rating: 4.9,
    },
  ];
  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "newest":
            return b.id - a.id;
          default:
            return 0;
        }
      });
  }, [searchTerm, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortChange = (selectedOption) => {
    setSortBy(selectedOption.value);
  };

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 mt-24">
      {/* Search and Sort */}
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-1/2">
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Select
            options={sortOptions}
            value={sortOptions.find((option) => option.value === sortBy)}
            onChange={handleSortChange}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6 md:gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <Link href="#" className="block" prefetch={false}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-56 object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="w-5 h-5 fill-current" />
                    <span className="font-medium">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-lg font-semibold">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
