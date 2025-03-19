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
  faTags,
  faTicket,
  faUpload,
  faWheatAlt,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

export default function DepositsPage() {
  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[60px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-end justify-center h-screen w-full pb-[76px]">
            <div className="flex flex-col justify-center px-[60px]">
              <span className="text-[62px] font-bold text-white text-center mb-[20px]">
                Deposits
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
          <div className="flex gap-[50px]">
            <div className="w-1/2 h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                  DEPOSITS
                </span>
                <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[32px] text-white text-wrap">
                  <p>Regular</p>
                  <p>Savings</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-start items-center">
                  <FontAwesomeIcon
                    icon={faPiggyBank}
                    className="w-[30px] h-[30px] mr-[10px]"
                  />
                  <span className="text-[16px] font-bold">SSD MICRO</span>
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-start items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillTransfer}
                    className="w-[30px] h-[30px] mr-[10px]"
                  />
                  <span className="text-[16px] font-bold">SSD REGULAR</span>
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-start items-center">
                  <FontAwesomeIcon
                    icon={faHandsHoldingCircle}
                    className="w-[30px] h-[30px] mr-[10px]"
                  />
                  <span className="text-[16px] font-bold">HANDOG SAVINGS</span>
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-start items-center">
                  <FontAwesomeIcon
                    icon={faBuildingShield}
                    className="w-[30px] h-[30px] mr-[10px]"
                  />
                  <span className="text-[16px] font-bold">BASIC SAVINGS</span>
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[60px] mb-[55px]">
        <div className="flex flex-col">
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[30px] leading-[30px] w-1/2 text-right">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-end items-center">
                  <span className="text-[16px] font-bold">SD PLUS</span>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="w-[30px] h-[30px] ml-[10px]"
                  />
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-end items-center">
                  <span className="text-[16px] font-bold">
                    1ST CHECKING ACCOUNT
                  </span>
                  <FontAwesomeIcon
                    icon={faPiggyBank}
                    className="w-[30px] h-[30px] ml-[10px]"
                  />
                </div>
                <span className="text-[#727272] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Pharetra purus purus
                  dui vitae nunc convallis. Orci sed vestibulum sagittis
                  faucibus dictumst egestas malesuada. Pellentesque parturient
                  quam orci lectus cursus. Maecenas ac purus scelerisque
                  pellentesque urna lacus scelerisque morbi.
                </span>
              </div>
            </div>
            <div className="w-1/2 h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
              <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                  DEPOSITS
                </span>
                <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                <span className="flex flex-col font-bold text-[32px] text-white text-wrap">
                  <p>Regular</p>
                  <p>Savings</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
