import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardData } from "../../../api/cardData";
import Modal from "../../ui/Modal/Modal";
import Item from "./Item/Item";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleViewDetails = () => {
    const isRegistered = false;
    if (!isRegistered) {
      setIsModalOpen(true);
    } else {
      console.log("Tafsilotlarni ko'rsatish");
    }
  };

  const handleNavigate = () => {
    navigate("/viewmore")
  }

  return (
    <>
      <section className="mb-[36px]">
        <div className="max-w-[1336px] w-full mx-auto px-[20px]">
          <div className="flex items-center justify-between mb-[60px]">
            <h2 className="text-black font-bold text-[50px] leading-[100%]">
              Opportunities
            </h2>
            <button className="border-2 border-black py-[20px] px-[54px] rounded-[12px] uppercase font-bold text-4 leading-[100%] hover:bg-black hover:text-white transition" onClick={handleNavigate}>
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
                  handleViewDetails={handleViewDetails}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Cards;
