import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/1vb logo_2x2.png";
import gcash from "/src/assets/gcash-logo-png_seeklogo-522261-removebg-preview.png";
import bsp from "/src/assets/image-removebg-preview (1).png";
import ctb from "/src/assets/image-removebg-preview (2).png";
import pdic from "/src/assets/image-removebg-preview.png";
import usaid from "/src/assets/Seal_of_the_United_States_Agency_for_International_Development.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeCircleCheck,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Layout({ children }) {
  const [activeItemHover, setActiveItemHover] = useState("");

  const location = window.location.pathname;

  const navigationItems = [
    { navItem: "HOME", link: "/" },
    { navItem: "ABOUT US", link: "/about-us" },
    { navItem: "PROPERTIES FOR SALE", link: "/properties-for-sale" },
    { navItem: "CONSUMER PROTECTION", link: "/consumer-protection" },
    { navItem: "DEPOSITS", link: "/deposits" },
    { navItem: "LOANS", link: "/loans" },
    { navItem: "1VB ADVISORY", link: "/1vb-advisory" },
    { navItem: "NEWSLETTER", link: "/newsletter" },
  ];

  const footerNavigationItems = [
    { navItem: "Home", link: "/" },
    { navItem: "Deposits", link: "/deposits" },
    { navItem: "About Us", link: "/about-us" },
    { navItem: "Loans", link: "/loans" },
    { navItem: "Properties for Sale", link: "/properties-for-sale" },
    { navItem: "1VB Advisory", link: "/1vb-advisory" },
    { navItem: "Consumer Protection", link: "/consumer-protection" },
    { navItem: "Newsletter", link: "/newsletter" },
  ];

  const footerAgenciesNavigationItems = [
    { image: bsp, link: "" },
    { image: usaid, link: "" },
    { image: ctb, link: "" },
    { image: gcash, link: "" },
    { image: pdic, link: "" },
  ];

  const footerSocMedLinks = [
    { link: "", icon: faFacebook },
    { link: "", icon: faSkype },
    { link: "", icon: faGoogle },
    { link: "", icon: faLinkedin },
    { link: "", icon: faYoutube },
  ];

  return (
    <div className="flex flex-col w-full h-full scroll-smooth">
      <nav className="flex w-full justify-between items-center h-[56px] px-[40px] fixed drop-shadow-lg bg-white z-100">
        <img src={logo} alt="" className=" h-[40px] w-[40px]" />
        <div className="flex gap-[40px] justify-between items-center">
          <ul className="flex gap-[40px] justify-between items-center">
            {navigationItems.map((navItem, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveItemHover(navItem.link)}
                onMouseLeave={() => setActiveItemHover("")}
              >
                <NavLink
                  to={navItem.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center font-bold text-[10px] text-[#396131] transition-all font-mono"
                      : "flex flex-col items-center font-thin text-[10px] hover:text-[#396131] hover:font-bold transition-all font-mono"
                  }
                >
                  {navItem.navItem}
                  <div
                    className={`${
                      navItem.link == location ||
                      activeItemHover == navItem.link
                        ? "bg-[#396131]"
                        : "bg-transparent"
                    } w-full h-[3px] rounded-full transition-all`}
                  ></div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-[120px] p-[10px] rounded-[10px] text-white text-center font-bold text-[12px] cursor-pointer bg-[#396131] hover:outline-[#396131] hover:outline-[2px] hover:bg-white hover:text-[#396131] transition-all">
          Contact Us
        </button>
      </nav>
      <div className="mt-[56px] min-h-screen">{children}</div>
      <footer className="w-full bg-[#5F5F5F]">
        <div className="flex w-full flex-col px-[50px] pt-[30px]">
          <div className="flex justify-between items-start border-b-[1px] pb-[20px] border-white">
            <img src={logo} alt="" className="h-[172px] w-[172px] " />
            <div className="flex flex-col mr-[100px]">
              <div className="font-bold text-white text-[16px] mb-[20px]">
                Links
              </div>
              <ul className="grid grid-cols-2 gap-[20px] text-white text-[12px] font-thin">
                {footerNavigationItems.map((navItem, index) => (
                  <li key={index} className="">
                    <NavLink
                      to={navItem.link}
                      className="hover:font-semibold transition-all mr-[30px]"
                    >
                      <span>{navItem.navItem}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid grid-cols-2 gap-[25px] text-white text-[12px] font-thin">
              {footerAgenciesNavigationItems.map((navItem, index) => (
                <li key={index} className="mr-[25px]">
                  <NavLink
                    to={navItem.link}
                    className="hover:font-semibold transition-all"
                  >
                    <img
                      src={navItem.image}
                      alt=""
                      className="w-[50px] h-[50px]"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-[20px]">
              <span className="font-bold text-white">Contact Us</span>
              <div className="flex gap-[15px] items-center text-[14px]">
                <div className="flex items-center justify-center w-[30px] h-[30px] text-gray-300">
                  <FontAwesomeIcon icon={faPhone} className="w-full h-full" />
                </div>
                <span className="text-white">+63917 820 8542</span>
              </div>
              <div className="flex gap-[15px] items-center text-[14px] mb-[20px]">
                <div className="flex items-center justify-center w-[30px] h-[30px] text-gray-300">
                  <FontAwesomeIcon
                    icon={faEnvelopeCircleCheck}
                    className="w-full h-full"
                  />
                </div>
                <input
                  type="text"
                  className="text-white border-b-[1px] border-white focus:outline-0 py-[3px]"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center gap-[25px]">
                {footerSocMedLinks.map((navItem, index) => (
                  <div
                    key={index}
                    className="flex item-center justify-center w-[50px] h-[50px] text-gray-300 hover:text-gray-400 transition-all cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={navItem.icon}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-center w-full text-white py-[20px] text-[16px]">
          Copyright © 2025 - 1st Valley Bank Inc. - All rights reserved
        </div>
      </footer>
    </div>
  );
}
