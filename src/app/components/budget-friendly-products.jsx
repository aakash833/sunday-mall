export default function BudgetFriendlyProducts() {
  const productTiers = [
    { price: "₹199", label: "Under ₹199/-" },
    { price: "₹299", label: "Under ₹299/-" },
    { price: "₹499", label: "Under ₹499/-" },
    { price: "₹999", label: "Under ₹999/-" },
  ];

  return (
    <section className="py-16 md:px-28 lg:px-44">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Discover Budget-Friendly Household Products
        </h2>
        <p className="text-gray-600 mb-10">
          Enhance Your Home on a Budget: Explore Affordable Household Essentials
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-12 md:px-0">
        {productTiers.map((tier, index) => (
          <div
            key={index}
            className="group text-center transform transition duration-300 hover:scale-105"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-black flex items-center justify-center group-hover:bg-white group-hover:border-2 group-hover:rotate-6 transition-colors duration-300">
              <div className="text-center">
                <p className="text-white text-lg font-bold group-hover:text-black">
                  UNDER
                </p>
                <p className="text-white text-2xl font-extrabold group-hover:text-black">
                  {tier.price}
                </p>
              </div>
            </div>
            <p className="text-black text-sm font-medium group-hover:text-gray-600 group-hover:text-lg">
              {tier.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
