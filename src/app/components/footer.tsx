import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer(){
    return(
        <>
 <footer className="bg-white py-8 px-6 font-sans tracking-wide">
  {/* Footer Header Section */}
  <div className="flex items-center justify-around space-x-96 mb-6 bg-[#FAFAFA] h-[142px]">
    <h2 className="text-xl font-bold text-[#333]">Bandage</h2>
    <div className="flex space-x-3">
      <a href="#" className="text-[#23A6F0] hover:text-blue-600 text-lg">
        <FaFacebook />
      </a>
      <a href="#" className="text-[#23A6F0] hover:text-blue-600 text-lg">
        <FaInstagram />
      </a>
      <a href="#" className="text-[#23A6F0] hover:text-blue-600 text-lg">
        <FaTwitter />
      </a>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 ">

    {/* Company Info */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Company Info</h4>
      <ul className="space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Career</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">We Are Hiring</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Blog</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Legal</h4>
      <ul className="space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Refund Policy</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Cookie Policy</a></li>
      </ul>
    </div>

    {/* Features */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Features</h4>
      <ul className="space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Business Marketing</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">User Analytics</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Live Chat</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Unlimited Support</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Resources</h4>
      <ul className="space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">IOS & Android</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Watch a Demo</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Customers</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">API</a></li>
      </ul>
    </div>

    {/* Get In Touch */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Get In Touch</h4>
      <ul className="space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Sitemap</a></li>
      </ul>
    </div>

    {/* Newsletter Subscription */}
    <div>
      <h4 className="text-md font-semibold text-[#333]">Subscribe to Our Newsletter</h4>
      <form action="" className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:border-[#23A6F0] text-sm"
        />
        <button className="bg-[#23A6F0] text-white py-2 rounded-lg hover:bg-[#1a8ab8] transition duration-300 text-sm">
          Subscribe
        </button>
        <p className="mt-2 text-sm text-gray-600">Stay updated with the latest news and offers.</p>
      </form>
    </div>
    <div className="bg-[#FAFAFA] h-[50px] w-[1290px]">
    <p className="ml-36 text-gray-600	">Made With Love By Finland All Right Reserved</p>
 
    </div>

  </div>
</footer>



        </>
    )
}