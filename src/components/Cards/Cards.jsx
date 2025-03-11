import React from "react";
import { cardData } from "../../api/cardData";
import Item from "./Item/Item";

const Cards = () => {
  return (
    <section className="">
      <div className="max-w-[1336px] w-full mx-auto px-[20px]">
        <div className="flex items-center justify-between mb-[60px]">
          <h2 className="text-black font-bold text-[50px] leading-[100%]">
            Opportunities
          </h2>
          <button className="border-2 border-black py-[20px] px-[54px] rounded-[12px] uppercase font-bold text-4 leading-[100%] hover:bg-black hover:text-white transition">
            view More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-y-[15px]">
          {cardData?.map((item) => {
            const {
              id,
              image,
              title,
              text,
              payment,
              time,
              experience,
              location,
            } = item;
            return (
              <Item
                key={id}
                image={image}
                title={title}
                text={text}
                payment={payment}
                time={time}
                experience={experience}
                location={location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
