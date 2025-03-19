import React from "react";
import loans_image from "/src/assets/309418614_1446252409210298_8650230911563625211_n.png";

const newsLetter = [0, 1, 2, 3, 4, 5].map(() => ({
  image: loans_image,
  date: "March 19, 2025",
  title: "NEWS TITLE",
  headline: "NEWS HEADLINE",
  content: [
    "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
    "Lorem ipsum dolor sit amet consectetur. Pharetra purus purus dui vitae nunc convallis. Orci sed vestibulum sagittis faucibus dictumst egestas malesuada. Pellentesque parturient quam orci lectus cursus. Maecenas ac purus scelerisque pellentesque urna lacus scelerisque morbi.",
  ],
}));
export default function NewsletterPage() {
  return (
    <>
      <div className="h-screen bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-cover bg-[left_bottom_60rem] mb-[60px]">
        <div className="h-screen w-full bg-black/50">
          <div className="flex items-end justify-center h-screen w-full pb-[76px]">
            <div className="flex flex-col justify-center px-[60px]">
              <span className="text-[62px] font-bold text-white text-center mb-[20px]">
                Newsletter
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
      <div className="flex flex-col gap-[50px] px-[60px] mb-[55px]">
        {newsLetter.map((news, index) =>
          index % 2 == 0 ? (
            <div className="flex gap-[50px]" key={index}>
              <div className="w-[75%] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
                <div className="h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                  <span className="flex text-[16px] font-semibold text-white mb-[20px]">
                    {news.date}
                  </span>
                  <div className="w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                  <span className="flex flex-col font-bold text-[32px] text-white text-wrap">
                    <p>{news.title}</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
                <span className="text-[25px] font-bold text-[#3D3D3D]">
                  {news.headline}
                </span>
                <div className="flex flex-col gap-[30px] leading-[30px]">
                  {news.content.map((cont, index) => (
                    <span className=" text-[16px]">
                      Lorem ipsum dolor sit amet consectetur. Pharetra purus
                      purus dui vitae nunc convallis. Orci sed vestibulum
                      sagittis faucibus dictumst egestas malesuada. Pellentesque
                      parturient quam orci lectus cursus. Maecenas ac purus
                      scelerisque pellentesque urna lacus scelerisque morbi.
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-[50px]" key={index}>
              <div className="flex flex-col gap-[30px] leading-[30px] w-1/2">
                <span className="text-[25px] font-bold text-[#3D3D3D] text-right">
                  {news.headline}
                </span>
                <div className="flex flex-col gap-[30px] leading-[30px]">
                  {news.content.map((cont, index) => (
                    <span className="text-right text-[16px]" key={index}>
                      {cont}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-[75%] h-[604px] rounded-[15px] bg-[url(/src/assets/481105768_2018796418622558_1634185134975453510_n.jpg)] bg-center bg-cover">
                <div className="flex flex-col h-full w-full bg-black/50 rounded-[15px] px-[20px] py-[60px]">
                  <span className="flex self-end text-[16px] font-semibold text-white mb-[20px]">
                    {news.date}
                  </span>
                  <div className="flex self-end w-[400px] h-[0.5px] bg-white mb-[20px]"></div>
                  <span className="flex flex-col font-bold text-[32px] text-white text-wrap text-right">
                    <p>{news.title}</p>
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
