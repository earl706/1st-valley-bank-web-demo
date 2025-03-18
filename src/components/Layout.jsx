import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/1vb logo_2x2.png";

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

  return (
    <div className="flex flex-col w-full h-full">
      <navbar className="flex w-full justify-between items-center h-[56px] px-[40px] fixed drop-shadow-lg bg-white">
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
                      ? "flex flex-col items-center font-bold text-[10px] text-[#396131] transition-all"
                      : "flex flex-col items-center font-thin text-[10px] hover:text-[#396131] hover:font-bold transition-all"
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
        <button className="w-[120px] p-[10px] rounded-[10px] text-white text-center font-bold text-[12px] bg-[#396131]">
          Contact Us
        </button>
      </navbar>
      <div className="mt-[56px]">{children}</div>
    </div>
  );
}
