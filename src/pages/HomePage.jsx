import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import gcash from "/src/assets/gcash-logo-png_seeklogo-522261-removebg-preview.png";
import bsp from "/src/assets/image-removebg-preview (1).png";
import ctb from "/src/assets/image-removebg-preview (2).png";
import pdic from "/src/assets/image-removebg-preview.png";
import usaid from "/src/assets/Seal_of_the_United_States_Agency_for_International_Development.svg.png";
import regular_savings from "/src/assets/326421694_579201430310911_4985681006116158904_n.png";
import special_savings from "/src/assets/481165360_2018794841956049_4353516839556295817_n.jpg";

import loans_image from "/src/assets/309418614_1446252409210298_8650230911563625211_n.png";

import property from "/src/assets/Screenshot 2025-03-18 at 7.31.29 PM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseClock,
  faBuilding,
  faBuildingShield,
  faCoins,
  faCreditCard,
  faEnvelopeCircleCheck,
  faGem,
  faHandHoldingDollar,
  faHandsHoldingCircle,
  faLocation,
  faLocationDot,
  faNewspaper,
  faPiggyBank,
  faPlus,
  faReceipt,
  faSave,
  faTags,
  faTicket,
  faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer";

export default function HomePage() {
  const navigate = useNavigate();

  const agencies = [
    { image: bsp, link: "" },
    { image: usaid, link: "" },
    { image: ctb, link: "" },
    { image: gcash, link: "" },
    { image: pdic, link: "" },
  ];

  const properties_for_sale = [
    {
      image: property,
      name: "KIA BONGO DROPSIDE",
      plate_number: "JD05067",
      location: "Bacolod, Lanao Del Norte",
      price: "PHP 180,000",
    },
    {
      image: property,
      name: "KIA BONGO DROPSIDE",
      plate_number: "JD05067",
      location: "Bacolod, Lanao Del Norte",
      price: "PHP 180,000",
    },
    {
      image: property,
      name: "KIA BONGO DROPSIDE",
      plate_number: "JD05067",
      location: "Bacolod, Lanao Del Norte",
      price: "PHP 180,000",
    },
    {
      image: property,
      name: "KIA BONGO DROPSIDE",
      plate_number: "JD05067",
      location: "Bacolod, Lanao Del Norte",
      price: "PHP 180,000",
    },
  ];

  const loans = [
    {
      loan_type: "Agriculture",
      title: "AGRICULTURE",
      image: loans_image,
      icon: faWheatAlt,
    },
    {
      loan_type: "Gold and Gems",
      title: "GOLD AND GEMS",
      image: loans_image,
      icon: faGem,
    },
    {
      loan_type: "Microfinance",
      title: "MICROFINANCE",
      image: loans_image,
      icon: faCoins,
    },
    {
      loan_type: "Salary",
      title: "SALARY",
      image: loans_image,
      icon: faHandHoldingDollar,
    },
    {
      loan_type: "SBL",
      title: "SBL",
      image: loans_image,
      icon: faBriefcaseClock,
    },
    {
      loan_type: "SBL",
      title: "SME",
      image: loans_image,
      icon: faBuilding,
    },
    {
      loan_type: "SUCRE",
      title: "SUCRE",
      image: loans_image,
      icon: faCreditCard,
    },
  ];

  const newsLetter = [
    {
      image: loans_image,
      title: "NEWS TITLE",
      headline: "NEWS HEADLINE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Amet nulla faucibus et consequat magna nunc nec.",
    },
    {
      image: loans_image,
      title: "NEWS TITLE",
      headline: "NEWS HEADLINE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Amet nulla faucibus et consequat magna nunc nec.",
    },
    {
      image: loans_image,
      title: "NEWS TITLE",
      headline: "NEWS HEADLINE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Amet nulla faucibus et consequat magna nunc nec.",
    },
    {
      image: loans_image,
      title: "NEWS TITLE",
      headline: "NEWS HEADLINE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Amet nulla faucibus et consequat magna nunc nec.",
    },
  ];

  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[20px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-center h-full w-1/2">
            <div className="flex flex-col justify-start gap-[20px] px-[60px]">
              <button className="text-[9px] w-[100px] bg-[#396131] rounded-[10px] text-white text-center font-bold py-[5px] cursor-pointer hover:bg-white hover:outline-[1px] hover:outline-[#396131] hover:text-[#396131] transition-all">
                <span className="text-center">Read More</span>
              </button>
              <div className="flex flex-col">
                <span className="text-[62px] font-bold text-white">
                  Your Satisfaction
                </span>
                <span className="text-[62px] font-bold text-white">
                  is Our Mission
                </span>
              </div>
              <span className="text-[11px] text-white leading-[15px] w-[365px]">
                1st Valley Bank is committed to provide you with innovative and
                responsive solutions to your banking needs and requirements.
                From a multi-awarded rural bank to a development bank in
                Mindanao and Visayas, our 82 branches and branch lite units
                shall deliver you only the best services that you truly deserve.
                We will work with you all the way. As your success is our
                business, you can count on us to be your lifetime friend
              </span>
              <div className="flex gap-[20px]">
                <button className="w-[100px] text-center font-bold text-[11px] text-white rounded-[10px] py-[10px] bg-[#396131] cursor-pointer hover:bg-white hover:outline-[1px] hover:outline-[#396131] hover:text-[#396131] transition-all">
                  Our Services
                </button>
                <button className="w-[100px] text-center font-bold text-[11px] text-[#396131] rounded-[10px] py-[10px] bg-white cursor-pointer hover:bg-[#396131] hover:outline-[1px] hover:outline-white hover:text-white transition-all">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[115px] mb-[70px]">
        {agencies.map((agency, index) => (
          <div key={index} className="mr-[25px]">
            <NavLink
              to={agency.link}
              className="hover:font-semibold transition-all"
            >
              <img src={agency.image} alt="" className="w-[50px] h-[50px]" />
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex px-[60px] mb-[65px]">
        <div className="flex flex-col mr-[200px]">
          <span className="font-semibold text-[16px] text-[#3D3D3D] mb-[20px]">
            ABOUT US
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[36px] text-[#3D3D3D] font-bold w-[311px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
        <div className="flex flex-col gap-[30px] leading-[30px]">
          <span className="font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <button
            onClick={() => navigate("/about-us")}
            className="flex justify-center w-full font-bold text-[15px] text-[#3D3D3D] hover:underline transition-all cursor-pointer"
          >
            More About Us
          </button>
        </div>
      </div>
      <div className="flex px-[60px] gap-[20px] mb-[65px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[77px] mb-[40px]">
            {properties_for_sale.map((property, index) => (
              <div className="flex flex-col" key={index}>
                <img
                  src={property.image}
                  alt=""
                  className="rounded-[15px] mb-[15px]"
                />
                <span className="font-bold text-[15px] text-[#3D3D3D] border-b-[1px] border-[#D9D9D9] mb-[5px]">
                  {property.name}
                </span>
                <div className="flex gap-[5px] mb-[10px]">
                  <span className="text-[12px] font-bold text-[#3D3D3D]">
                    Plate Number:
                  </span>
                  <span className="text-[12px] font-semibold text-[#3D3D3D]">
                    {property.plate_number}
                  </span>
                </div>
                <div className="flex items-center gap-[10px]  mb-[10px]">
                  <div className="flex items-center justify-center h-[12px] w-[9px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[12px] font-semibold text-[#3D3D3D]">
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center justify-center h-[12px] w-[9px]">
                    <FontAwesomeIcon icon={faTags} className="w-full h-full" />
                  </div>
                  <span className="text-[12px] font-semibold text-[#3D3D3D]">
                    {property.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/properties-for-sale")}
            >
              More Properties For Sale
            </button>
          </div>
        </div>
        <div className="flex flex-col text-right items-end">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            PROPERTIES FOR SALE
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
      </div>
      <div className="flex px-[60px] mb-[65px]">
        <div className="flex flex-col mr-[200px]">
          <span className="font-semibold text-[16px] text-[#3D3D3D] mb-[20px]">
            CONSUMER PROTECTION
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[36px] text-[#3D3D3D] font-bold w-[311px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
        <div className="flex flex-col gap-[30px] leading-[30px]">
          <span className="font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <button
            onClick={() => navigate("/consumer-protection")}
            className="flex justify-center w-full font-bold text-[15px] text-[#3D3D3D] hover:underline transition-all cursor-pointer"
          >
            More About Consumer Protection
          </button>
        </div>
      </div>
      <div className="flex px-[60px] gap-[20px] mb-[65px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[77px] mb-[40px]">
            <div className="flex flex-col">
              <img
                src={regular_savings}
                alt=""
                className="rounded-[15px] mb-[15px]"
              />
              <span className="font-bold text-[15px] text-[#3D3D3D] border-b-[1px] border-[#D9D9D9] mb-[15px]">
                REGULAR SAVINGS
              </span>
              <div className="flex items-center gap-[10px]  mb-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon icon={faPlus} className="w-full h-full" />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  SD PLUS
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon icon={faReceipt} className="w-full h-full" />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  1ST CHECKING ACCOUNT
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src={special_savings}
                alt=""
                className="rounded-[15px] mb-[15px]"
              />
              <span className="font-bold text-[15px] text-[#3D3D3D] border-b-[1px] border-[#D9D9D9] mb-[15px]">
                SPECIAL SAVINGS
              </span>
              <div className="flex items-center gap-[10px] mb-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon
                    icon={faPiggyBank}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  SSD MICRO
                </span>
              </div>
              <div className="flex items-center gap-[10px] mb-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon
                    icon={faMoneyBillTransfer}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  SSD REGULAR
                </span>
              </div>
              <div className="flex items-center gap-[10px] mb-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon
                    icon={faHandsHoldingCircle}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  HANDOG SAVINGS
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center justify-center h-[12px] w-[12px]">
                  <FontAwesomeIcon
                    icon={faBuildingShield}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-[#3D3D3D]">
                  BASIC SAVINGS
                </span>
              </div>
            </div>
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/deposits")}
            >
              More About Deposits
            </button>
          </div>
        </div>
        <div className="flex flex-col text-right items-end">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            DEPOSITS
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
      </div>
      <div className="flex px-[60px] gap-[20px] mb-[65px]">
        <div className="flex flex-col text-left items-start">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            LOANS
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[77px] mb-[40px]">
            {loans.map((loan, index) => (
              <div className="flex flex-col" key={index}>
                <img
                  src={loan.image}
                  alt=""
                  className="rounded-[15px] mb-[15px] hover:drop-shadow-md transition-all"
                />
                <div className="flex items-center gap-[10px] mb-[15px]">
                  <div className="flex items-center justify-center h-[15px] w-[15px]">
                    <FontAwesomeIcon
                      icon={loan.icon}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="font-bold text-[15px] text-[#3D3D3D]">
                    {loan.title}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-[#D9D9D9] mb-[15px]"></div>
                <button
                  onClick={() => navigate("/loans")}
                  className="text-left text-[11px] font-bold text-[#3D3D3D] hover:underline transition-all cursor-pointer"
                >
                  {`More About ${loan.loan_type}`}
                </button>
              </div>
            ))}
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/loans")}
            >
              More About Loans
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-[60px] mb-[65px] justify-between">
        <div className="flex flex-col gap-[30px] leading-[30px] mr-[170px]">
          <span className="font-semibold text-[16px] text-right">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px] text-right">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <span className="text-[#727272] text-[16px] text-right">
            Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
            vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst
            egestas malesuada. Pellentesque parturient quam orci lectus cursus.
            Maecenas ac purus scelerisque pellentesque urna lacus scelerisque
            morbi.
          </span>
          <button
            onClick={() => navigate("/1vb-advisory")}
            className="flex justify-center w-full font-bold text-[15px] text-[#3D3D3D] hover:underline transition-all cursor-pointer"
          >
            More 1VB Advisory
          </button>
        </div>
        <div className="flex flex-col text-right items-end">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            1VB ADVISORY
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
      </div>
      <div className="flex px-[60px] gap-[20px] mb-[65px]">
        <div className="flex flex-col text-left">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            NEWSLETTER
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[77px] mb-[40px]">
            {newsLetter.map((news, index) => (
              <div className="flex flex-col" key={index}>
                <img
                  src={news.image}
                  alt=""
                  className="rounded-[15px] mb-[15px]"
                />
                <div className="flex items-center gap-[10px] mb-[15px] border-b-[1px] border-[#D9D9D9] pb-[10px]">
                  <div className="flex items-center justify-center h-[15px] w-[15px]">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="font-bold text-[15px] text-[#3D3D3D]">
                    {news.title}
                  </span>
                </div>
                <span className="font-bold text-[15px] text-[#3D3D3D] mb-[10px]">
                  {news.headline}
                </span>
                <span className="text-[10px] text-[#3D3D3D] mb-[10px]">
                  {news.content}
                </span>
                <button
                  onClick={() => navigate("/newsletter")}
                  className="hover:underline font-bold text-[12px] cursor-pointer text-left"
                >
                  Read News
                </button>
              </div>
            ))}
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/newsletter")}
            >
              More About Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
