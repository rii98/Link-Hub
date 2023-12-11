import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const quickLinksData = useMemo(
    () => [
      {
        title: "Company",
        links: [
          { name: "Home", to: "/" },
          { name: "About Us", to: "/about" },
          { name: "Services", to: "/services" },
          { name: "Our Team", to: "/team" },
        ],
      },
      {
        title: "Policy",
        links: [
          { name: "Policies", to: "/policy" },
          { name: "Contact", to: "/contact" },
          { name: "FAQ", to: "/faq" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "Account", to: "/account" },
          { name: "Support Center", to: "/support" },
          { name: "Feedback", to: "/feedback" },
          { name: "Accessibility", to: "/accessibility" },
        ],
      },
    ],
    []
  );
  return (
    <footer className="text-white mt-auto">
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "rgb(29, 78, 216)",
            width: "125%",
            height: " 112px",
            transform: "rotate(180deg)",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path>
        </svg>
      </div>
      <div className="bg-[#1D4ED8] grid grid-cols-2 gap-24 px-7 p-12 -mb-0.5 sm:flex sm:justify-between ">
        {quickLinksData.map((quickLink, index) => (
          <div key={index} className="flex flex-col gap-1 text-base">
            <h3 className="font-semibold">{quickLink.title}</h3>
            {quickLink.links.map((link, indx) => (
              <Link key={indx} to={link.to} className="hover:text-slate-300">
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#1D4ED8] px-7 pt-12 pb-6 flex flex-col items-center gap-5  justify-between sm:flex-row sm:items-end sm:pb-12">
        <div className="flex flex-col gap-7">
          <span className="text-lg">Subscribe to our Newsletter</span>
          <div className="flex gap-2">
            <input
              className="border-blue-50 border-2 outline-none p-2 rounded-md text-black focus:border-blue-500"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-slate-900 px-4 rounded">Subscribe</button>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Link to="/">
            <FaFacebookF size={22} />
          </Link>
          <Link to="/">
            <FaTwitter size={22} />
          </Link>
          <Link to="/">
            <FaInstagram size={22} />
          </Link>
          <Link to="/">
            <FaLinkedinIn size={22} />
          </Link>
        </div>
      </div>
      <div className="bg-slate-900 flex flex-col justify-between items-center gap-2 px-7 py-4 text-sm sm:flex-row">
        <div className="flex items-center gap-1">
          <FaRegCopyright size={12} />
          <span>Link Hub __ 2023</span>
        </div>
        <div>Made by Binladen</div>
      </div>
    </footer>
  );
}

export default Footer;
