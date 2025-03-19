import React from "react";
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
  faNewspaper,
  faPiggyBank,
  faPlus,
  faReceipt,
  faSave,
  faTags,
  faTicket,
  faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertiesForSalePage() {
  const properties_for_sale = [0, 1, 2, 3, 4, 5].map((index) => ({
    image: property,
    name: "KIA BONGO DROPSIDE",
    plate_number: "JD05067",
    location: "Bacolod, Lanao Del Norte",
    price: "PHP 180,000",
  }));

  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[60px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-end justify-center h-screen w-full pb-[76px]">
            <div className="flex flex-col justify-center px-[60px]">
              <span className="text-[62px] font-bold text-white text-center mb-[20px]">
                Properties for Sale
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
      <div className="px-[40px]">
        <div className="flex flex-col">
          <span className="font-bold text-[24px] text-[#3D3D3D] mb-[10px]">
            About Us
          </span>
          <div className="w-[595px] h-[1px] bg-[#D9D9D9] mb-[20px]"></div>
        </div>
      </div>
    </>
  );
}
