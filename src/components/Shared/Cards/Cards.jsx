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
    navigate("/viewmore");
  };

  return (
    <>
      <section className="mb-9 px-5 md:px-10">
        <div className="max-w-[1336px] w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight text-center md:text-left">
              Opportunities
            </h2>
            <button 
              className="mt-4 md:mt-0 border-2 border-black py-4 px-10 rounded-lg uppercase font-bold text-base md:text-lg hover:bg-black hover:text-white transition"
              onClick={handleNavigate}
            >
              View More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardData?.map((item) => (
              <Item key={item.id} {...item} handleViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Cards;