import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const Hero = () => {
  const heroData = [
    {
      title: "  Make a Difference Today!",
      text: "Explore volunteering activities that match your interests and skills.",
    },
    {
      title: "  Make a Difference Today!",
      text: "Explore volunteering activities that match your interests and skills.",
    },
    {
      title: "  Make a Difference Today!",
      text: "Explore volunteering activities that match your interests and skills.",
    },
    {
      title: "  Make a Difference Today!",
      text: "Explore volunteering activities that match your interests and skills.",
    },
  ];
  return (
    <section className="bg-white shadow-sm shadow-gray-300">
      <div className="max-w-[1336px] w-full mx-auto px-[20px]">
        <div className="text-center py-[120px]">
          <Swiper
            // scrollbar={{
            //   hide: true,
            // }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {heroData?.map((item, id) => (
              <SwiperSlide key={id}>
                <h2 className="text-black font-bold text-[60px] leading-[100%] mb-[40px]">
                  {item?.title}
                </h2>
                <p className="text-black font-normal text-4 leading-[27px]">
                  {item?.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
