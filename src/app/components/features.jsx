import Image from "next/image";

// import BestQuality from "@/assets/images/Best_Quality.jpg";
// import EasyReturns from "@/assets/images/Easy_Returns.jpg";
// import FreeShipping from "@/assets/images/Free_Shipping.jpg";

const features = [
  {
    icon: "🚚", // Alternatively, you can use an image or an icon component
    title: "Free Shipping",
    description: "Get free shipping on all orders.",
  },
  {
    icon: "🎖️",
    title: "Best Quality",
    description:
      "Excellence in every detail, delivering the finest quality products.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    description:
      "Free returns within 3 days of purchase. Please refer to return policy.",
  },
];

const FeaturesList = () => {
  return (
    <div className="px-4 py-10 bg-white text-black">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border space-y-3 flex flex-col justify-center items-center p-3"
          style={{ marginBottom: "20px" }}
        >
          <div>{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
