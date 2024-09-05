import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/assets/images/cropped-Group-1.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 hidden md:block">
      <div className="container mx-auto px-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Store */}
        <div>
          <h3 className="text-2xl mb-4">About Store</h3>
          <Image src={BrandLogo} alt="brand" height={50} width={130} />
          <address className="not-italic mb-4">
            39 Grd Flr, Deen Building Industrial Estate, Opp. <br />
            Pragati Industries, N M Joshi Marg, Lower Parel <br />
            Mumbai-400013 <br />
            <a href="tel:+919619665573" className="block text-white">
              +919619665573
            </a>
            <a href="mailto:support@sundaymall.in" className="block text-white">
              support@sundaymall.in
            </a>
          </address>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <img src="/path-to-instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/path-to-facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-2xl mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/track-order">Track Your Order</Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-2xl mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link href="/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link href="/cancellation-policy">Cancellation Policy</Link>
            </li>
          </ul>
        </div>

        {/* Sign Up to Newsletter */}
        <div>
          <h3 className="text-2xl mb-4">Sign Up to Newsletter</h3>
          <p className="text-sm mb-4">
            Be the first to know about the latest product updates, offers &
            latest products.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-4 py-2 rounded-l-full text-black"
            />
            <button className="bg-white text-black px-6 py-2 rounded-r-full font-bold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4">
        <p className="text-sm">
          &copy; 2024 | All Rights Reserved | SundayMall
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="/path-to-payment-icon1.png" alt="Payment Method 1" />
          <img src="/path-to-payment-icon2.png" alt="Payment Method 2" />
          <img src="/path-to-payment-icon3.png" alt="Payment Method 3" />
          {/* Add more payment method icons as needed */}
        </div>
      </div>
    </footer>
  );
}
