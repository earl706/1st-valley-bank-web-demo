import React from "react";

export default function ContactUsPage() {
  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[60px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-end justify-center h-screen w-full pb-[76px]">
            <div className="flex flex-col justify-center px-[60px]">
              <span className="text-[62px] font-bold text-white text-center mb-[20px]">
                Contact Us
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
      <div className="flex flex-col px-[40px]">
        <div className="flex px-[40px] gap-[50px] mb-[50px]">
          <div className="w-[55%] h-[604px] bg-gray-300 rounded-[15px]"></div>
          <div className="flex flex-col w-[40%] gap-[30px]">
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Name</span>
              <input
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Email</span>
              <input
                type="email"
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="user@email.com"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Subject</span>
              <input
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="Loans"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Contact Number</span>
              <input
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="+63"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Branch</span>
              <input
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="Main"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[25px] font-bold">Message</span>
              <input
                className="w-full text-[16px] font-bold border-b-[1px] border-gray-300 focus:outline-0"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <button className="bg-[#396131] rounded-full text-white w-full py-[20px] mb-[65px] font-bold text-[25px] hover:text-[#396131] hover:bg-white hover:outline-[1px] hover:outline-[#396131] transition-all cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
