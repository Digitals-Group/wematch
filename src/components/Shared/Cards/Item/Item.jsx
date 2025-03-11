import React from "react";

const Item = ({ image, title, text, payment, time, experience, location }) => {
  return (
    <div className="max-w-[416px] w-full bg-white shadow-sm shadow-gray-300 rounded-[20px]">
      <img
        className="rounded-tl-[20px] rounded-tr-[20px]"
        src={image}
        alt="image"
      />
      <div className="pt-[28px] px-[20px] pb-[40px]">
        <div className="mb-[28px]">
          <h3 className="text-black font-bold text-[28px] leading-[100%] mb-3">
            {title}
          </h3>
          <p className="text-[#00000099] font-normal text-4 leading-[20px]">
            {text}
          </p>
        </div>
        <input
          type="range"
          className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer
             [&::-webkit-slider-runnable-track]:bg-orange-500
             [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-lg
             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
             [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:mt-[-2px] [&::-moz-range-track]:bg-orange-500
             [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
             [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:rounded-full"
        />

        <div className="flex items-center justify-between mb-[28px]">
          <div>
            <h4 className="font-bold text-4 leading-[100%] mb-[8px]">
              {payment}
            </h4>
            <p className="text-[#6C757D] font-medium text-3 leading-[100%]">
              {experience}
            </p>
          </div>

          <div>
            <p className="text-[#6C757D] font-medium text-3 leading-[100%] mb-[8px]">
              {time}
            </p>
            <p className="text-[#6C757D] font-medium text-3 leading-[100%]">
              {location}
            </p>
          </div>
        </div>

        <button className="w-full bg-black text-white uppercase rounded-[12px] py-[20px] font-bold text-4 border-2 border-transparent leading-[100%] hover:bg-white hover:text-black hover:border-black transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Item;
