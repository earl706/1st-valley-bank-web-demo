import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  faSignalMessenger,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faEnvelopeCircleCheck,
  faMessage,
  faPaperPlane,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Layout({ children }) {
  const [activeItemHover, setActiveItemHover] = useState("");
  const [showChatbox, setShowChatBox] = useState(false);

  const location = window.location.pathname;
  const navigate = useNavigate();

  const navigationItems = [
    { navItem: "HOME", link: "/", sublinks: [] },
    {
      navItem: "ABOUT US",
      link: "/about-us",
      sublinks: [
        "CORPORATE PROFILE",
        "ANNUAL REPORTS",
        "LEARN MORE ABOUT US",
        "BRANCH DIRECTORY",
        "DIGITAL BANKING PRIVACY",
        { section: "corporate-profile", name: "CORPORATE PROFILE" },
        { section: "annual-reports", name: "ANNUAL REPORTS" },
        { section: "more-about-us", name: "LEARN MORE ABOUT US" },
        { section: "branch-directory", name: "BRANCH DIRECTORY" },
        { section: "digitial-banking", name: "DIGITAL BANKING PRIVACY" },
      ],
    },
    {
      navItem: "PROPERTIES FOR SALE",
      link: "/properties-for-sale",
      sublinks: [],
    },
    {
      navItem: "CONSUMER PROTECTION",
      link: "/consumer-protection",
      sublinks: [
        { section: "privacy-policy", name: "PRIVACY POLICY" },
        { section: "1vb-products", name: "1VB PRODUCTS" },
        { section: "product-requirements", name: "PRODUCT REQUIREMENTS" },
      ],
    },
    { navItem: "DEPOSITS", link: "/deposits", sublinks: [] },
    {
      navItem: "LOANS",
      link: "/loans",
      sublinks: [
        { section: "agriculture", name: "AGRICULTURE" },
        { section: "gold-and-gems", name: "GOLD AND GEMS" },
        { section: "microfinance", name: "MICROFINANCE" },
        { section: "salary", name: "SALARY" },
        { section: "sbl", name: "SBL" },
        { section: "sme", name: "SME" },
        { section: "sucre", name: "SUCRE" },
      ],
    },
    { navItem: "1VB ADVISORY", link: "/1vb-advisory", sublinks: [] },
    { navItem: "NEWSLETTER", link: "/newsletter", sublinks: [] },
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

  const handleNavigation = (url, section) => {
    navigate(`/${url}`);
    // setTimeout(() => {
    //   document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    // }, 100);
  };

  useEffect(() => {}, [activeItemHover]);

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
                      ? "flex flex-col items-center font-bold text-[12px] text-[#396131] transition-all font-mono h-full"
                      : "flex flex-col items-center font-thin text-[12px] hover:text-[#396131] hover:font-bold transition-all font-mono h-full"
                  }
                >
                  {navItem.sublinks.length > 0 ? (
                    <div className="flex items-center gap-[5px]">
                      {navItem.navItem}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className={
                          activeItemHover == navItem.link
                            ? "rotate-90 transition-all"
                            : "transition-all"
                        }
                      />
                    </div>
                  ) : (
                    <>{navItem.navItem}</>
                  )}
                  <div
                    className={`${
                      navItem.link == location ||
                      activeItemHover == navItem.link
                        ? "bg-[#396131]"
                        : "bg-transparent"
                    } w-full h-[3px] rounded-full transition-all`}
                  ></div>
                </NavLink>
                {activeItemHover == navItem.link &&
                navItem.sublinks.length > 0 ? (
                  <div className="flex flex-col absolute bg-white rounded-[15px] text-[12px] font-mono pt-[20px] transition-all">
                    {navItem.sublinks.map((sublink) => (
                      <NavLink
                        to={navItem.link}
                        className="py-[10px] px-[20px] hover:bg-gray-100 rounded-[15px] cursor-pointer transition-all"
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => navigate("/contact-us")}
          className="w-[120px] p-[10px] rounded-[10px] text-white text-center font-bold text-[12px] cursor-pointer bg-[#396131] hover:outline-[#396131] hover:outline-[2px] hover:bg-white hover:text-[#396131] transition-all"
        >
          Contact Us
        </button>
      </nav>
      <div className="mt-[56px] min-h-screen">{children}</div>
      <div className="fixed flex flex-col z-100 right-0 bottom-0 justify-end items-end px-[60px] py-[60px]">
        <div
          className={
            showChatbox
              ? "flex flex-col gap-[20px] bg-gray-300 w-[400px] h-[500px] mb-[20px] rounded-[20px] p-[30px] transition-all"
              : "hidden transition-all"
          }
        >
          <div className="flex flex-col gap-[5px] items-start">
            <div className="h-[39px] w-[233px] rounded-full bg-white"></div>
            <div className="h-[39px] w-[186px] rounded-full bg-white"></div>
            <div className="h-[39px] w-[233px] rounded-full bg-white"></div>
          </div>
          <div className="flex flex-col gap-[5px] items-end">
            <div className="h-[39px] w-[233px] rounded-full bg-[#396131]"></div>
            <div className="h-[39px] w-[186px] rounded-full bg-[#396131]"></div>
            <div className="h-[39px] w-[233px] rounded-full bg-[#396131]"></div>
          </div>
          <div className="flex flex-col gap-[5px] items-start">
            <div className="h-[39px] w-[233px] rounded-full bg-white"></div>
            <div className="h-[39px] w-[186px] rounded-full bg-white"></div>
          </div>
          <div className="flex gap-[10px] items-center">
            <input
              type="text"
              className="bg-white rounded-full w-full focus:outline-0 px-[20px] py-[5px] text-[10px]"
              placeholder="Ask VB..."
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className=" text-[#396131] h-full"
            />
          </div>
        </div>
        <button
          onClick={() => setShowChatBox(!showChatbox)}
          className="flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#396131] cursor-pointer text-white hover:text-[#396131] hover:bg-white hover:outline-[1px] hover:outline-[#396131] transition"
        >
          <FontAwesomeIcon icon={faSignalMessenger} className="w-full h-full" />
        </button>
      </div>
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
