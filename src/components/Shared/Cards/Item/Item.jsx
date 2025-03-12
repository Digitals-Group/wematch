import React from "react";

const Item = ({ image, title, text, payment, time, experience, location, handleViewDetails }) => {
  return (
    <div className="max-w-[416px] w-full bg-white shadow-sm shadow-gray-300 rounded-2xl mx-auto">
      <img className="rounded-t-2xl w-full" src={image} alt="image" />
      <div className="p-5">
        <div className="mb-6">
          <h3 className="text-black font-bold text-2xl leading-tight mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{text}</p>
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

        <div className="flex flex-wrap justify-between mb-6">
          <div>
            <h4 className="font-bold text-lg mb-1">{payment}</h4>
            <p className="text-gray-500 text-sm">{experience}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">{time}</p>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>

        <button 
          className="w-full bg-black text-white uppercase rounded-lg py-3 font-bold text-base border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Item;