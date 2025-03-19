import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseClock,
  faBuilding,
  faBuildingShield,
  faCoins,
  faCreditCard,
  faCreditCardAlt,
  faEnvelopeCircleCheck,
  faGem,
  faHandHoldingDollar,
  faHandsHoldingCircle,
  faHighlighter,
  faLocation,
  faNetworkWired,
  faNewspaper,
  faPiggyBank,
  faPlus,
  faReceipt,
  faSave,
  faTachographDigital,
  faTags,
  faTicket,
  faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer";
import loans_image from "/src/assets/309418614_1446252409210298_8650230911563625211_n.png";
import regular_savings from "/src/assets/326421694_579201430310911_4985681006116158904_n.png";
import special_savings from "/src/assets/481165360_2018794841956049_4353516839556295817_n.jpg";

export default function AboutUsPage() {
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

  const services = [
    {
      image: loans_image,
      icon: faNetworkWired,
      title: "BRANCH NETWORKING",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    },
    {
      image: loans_image,
      icon: faMoneyBillTransfer,
      title: "G-CASH SERVICES",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    },
    {
      image: loans_image,
      icon: faCreditCardAlt,
      title: "ATM SERVICES",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    },
  ];

  const corporate_profile = [
    {
      name: "Atty. Nicolas J. Lim",
      position: "PRESIDENT",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
    {
      name: "Nicolette Lim-Gica",
      position: "VICE PRESIDENT FOR OPERATIONS",
    },
  ];

  const annual_reports = [0, 1, 2, 3, 4, 5].map((index) => ({
    year: `${2023 - index}`,
    corporate_highlights: [
      "One-Stop-Shop",
      "Personalized Services",
      "Right Financial Solutions",
    ],
    key_figures: [
      "Total Resources: ₱10.99 billion",
      "Net Income: Over ₱200 million",
      "Loan-to-Deposit Ratio: 1:1",
      "High Liquidity",
    ],
    comparative_growth: [
      "Loans: ₱7.3 billion → ₱7.4 billion",
      "Deposits: ₱7.3 billion → ₱7.4 billion",
      "Net Interest Income: ₱983.7 million",
      "Net Income: ₱224.9 million",
    ],
  }));

  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[60px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-end justify-center h-screen w-full pb-[76px]">
            <div className="flex flex-col justify-center px-[60px]">
              <span className="text-[62px] font-bold text-white text-center mb-[20px]">
                About Us
              </span>
              <span className="text-[11px] text-white leading-[15px] text-center w-[520px] mb-[20px]">
                1st Valley Bank is committed to provide you with innovative and
                responsive solutions to your banking needs and requirements.
                From a multi-awarded rural bank to a development bank in
                Mindanao and Visayas, our 82 branches and branch lite units
                shall deliver you only the best services that you truly deserve.
                We will work with you all the way. As your success is our
                business, you can count on us to be your lifetime friend
              </span>
              <div className="flex justify-center gap-[20px]">
                <button className="w-[100px] text-center font-bold text-[11px] text-white rounded-[10px] py-[10px] bg-[#396131]">
                  Our Services
                </button>
                <button className="w-[100px] text-center font-bold text-[11px] text-[#396131] rounded-[10px] py-[10px] bg-white">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="font-bold text-[24px] text-[#3D3D3D] mb-[20px]">
              About Us
            </span>
            <div className="w-[595px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          </div>
          <div className="flex gap-[50px]">
            <div className="w-[604px] h-[604px] bg-gray-300 rounded-[15px]"></div>
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
              <span className="font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[60px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <span className="font-bold text-[24px] text-[#3D3D3D] mb-[20px] w-full text-right">
              Brief History
            </span>
            <div className="w-[595px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          </div>
          <div className="flex gap-[50px] justify-between">
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2 text-right">
              <span className="font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
            <div className="w-[604px] h-[604px] bg-gray-300 rounded-[15px]"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex gap-[50px]">
            <div className="w-[604px] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                  CORPORATE PROFILE
                </span>
                <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[64px] text-white text-wrap">
                  <p>WHY DO</p>
                  <p>BUSINESS</p>
                  <p>WITH US</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
              <span className="font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-[60px] gap-[20px] mb-[65px]">
        <div className="flex flex-col text-left items-start">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            PROPERTIES FOR SALE
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
                  className="rounded-[15px] mb-[15px] drop-shadow-lg"
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
                <button className="text-left text-[11px] font-bold text-[#3D3D3D] hover:underline transition-all cursor-pointer">
                  {`More About ${loan.loan_type}`}
                </button>
              </div>
            ))}
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => {}}
            >
              More About Loans
            </button>
          </div>
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
              onClick={() => {}}
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
        <div className="flex flex-col text-left">
          <span className="text-[16px] font-semibold text-[#3D3D3D] mb-[20px]">
            Services
          </span>
          <div className="w-[400px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
          <span className="text-[32px] font-bold text-[#3D3D3D] w-[300px]">
            Your Satisfaction is Our Mission
          </span>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[77px] mb-[40px]">
            {services.map((service, index) => (
              <div className="flex flex-col" key={index}>
                <img
                  src={service.image}
                  alt=""
                  className="rounded-[15px] mb-[15px]"
                />
                <div className="flex items-center gap-[10px] mb-[15px] border-b-[1px] border-[#D9D9D9] pb-[10px]">
                  <div className="flex items-center justify-center h-[15px] w-[15px]">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="font-bold text-[15px] text-[#3D3D3D]">
                    {service.title}
                  </span>
                </div>
                <span className="text-[10px] text-[#3D3D3D] mb-[10px]">
                  {service.content}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full text-center font-bold text-[15px] text-[#3D3D3D]">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => {}}
            >
              More About Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex gap-[50px]">
            <div className="w-[604px] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                  CORPORATE PROFILE
                </span>
                <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[64px] text-white text-wrap">
                  <p>AWARDS &</p>
                  <p>RECOGNITION</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
              <span className="font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2 text-right">
              <span className="font-extrabold text-[16px]">
                OUR VISION AND MISSION
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="font-extrabold text-[16px]">
                OUR CORE VALUES
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
            <div className="w-[604px] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="flex flex-col h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex self-end text-[16px] font-semibold text-white mb-[20px]">
                  CORPORATE PROFILE
                </span>
                <div className="flex self-end w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[64px] text-white text-wrap text-right">
                  <p>CORPORATE</p>
                  <p>POLICY</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex gap-[50px]">
            <div className="w-[604px] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                  CORPORATE PROFILE
                </span>
                <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[64px] text-white text-wrap">
                  <p>BRANCH</p>
                  <p>MANAGEMENT</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
              <span className="font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
              <span className="text-[#727272] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui
                vitae nunc convallis. Orci sed vestibulum sagittis faucibus
                dictumst egestas malesuada. Pellentesque parturient quam orci
                lectus cursus. Maecenas ac purus scelerisque pellentesque urna
                lacus scelerisque morbi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[60px] mb-[50px]">
        <span className="w-full text-center text-[24px] font-bold mb-[35px]">
          Corporate Profile
        </span>
        <span className="w-full text-center text-[18px] font-bold mb-[20px]">
          Corporate Profile
        </span>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full bg-gray-300 h-[100px] w-[100px] mb-[20px]"></div>
          <span className="mb-[5px] font-bold text-[16px]">
            {corporate_profile[0].name}
          </span>
          <span className="text-[14px] mb-[40px]">
            {corporate_profile[0].position}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-[95px]">
          {corporate_profile.slice(1, 13).map((officer, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className="rounded-full bg-gray-300 h-[100px] w-[100px] mb-[20px]"></div>
              <span className="mb-[5px] font-bold text-[16px]">
                {officer.name}
              </span>
              <span className="text-[14px]">{officer.position}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-[60px] mb-[100px]">
        <span className="w-full text-center text-[18px] font-bold mb-[50px]">
          Product & Area Management
        </span>
        <div className="grid grid-cols-4 gap-[95px]">
          {corporate_profile.slice(1, 13).map((officer, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className="rounded-full bg-gray-300 h-[100px] w-[100px] mb-[20px]"></div>
              <span className="mb-[5px] font-bold text-[16px]">
                {officer.name}
              </span>
              <span className="text-[14px]">{officer.position}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[60px]">
        <span className="text-[24px] font-bold text-[#3D3D3D] mb-[20px]">
          Annual Reports
        </span>
        <div className="w-[640px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
        <div className="grid grid-cols-2 gap-[60px] w-full">
          {annual_reports.map((report, index) => (
            <div className="flex flex-col" key={index}>
              <img
                src=""
                className="w-full h-[400px] rounded-[15px] bg-gray-300 mb-[10px]"
              />
              <span className="text-[24px] font-bold mb-[10px]">{`Annual Report ${report.year}`}</span>
              <div className="w-full h-[1px] bg-[#D9D9D9] mb-[10px]"></div>
              <span className="text-[18px] font-bold mb-[10px]">
                Corporate Highlights
              </span>
              <div className="mb-[20px]">
                {report.corporate_highlights.map((highlight, index) => (
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <FontAwesomeIcon icon={faHighlighter} />
                    <span className="text-[16px]">{highlight}</span>
                  </div>
                ))}
              </div>
              <span className="text-[18px] font-bold mb-[10px]">
                Financial Performance
              </span>
              <div className="w-full h-[1px] bg-[#D9D9D9] mb-[10px]"></div>
              <div className="flex mb-[20px] justify-between">
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold mb-[10px]">
                    Financial Performance
                  </span>
                  {report.key_figures.map((highlight, index) => (
                    <div className="flex items-center gap-[10px] mb-[10px]">
                      <FontAwesomeIcon icon={faTachographDigital} />
                      <span className="text-[16px]">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold mb-[10px]">
                    Financial Performance
                  </span>
                  {report.comparative_growth.map((highlight, index) => (
                    <div className="flex items-center gap-[10px] mb-[10px]">
                      <FontAwesomeIcon icon={faHighlighter} />
                      <span className="text-[16px]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
