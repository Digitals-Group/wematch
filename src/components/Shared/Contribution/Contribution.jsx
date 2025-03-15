import React from "react";
import { useState } from "react";
import { contributionData } from "../../../api/contributionData";
import Title from "../Title/Title";
import rightIcon from "../../../assets/svg/right.svg";

const Contribution = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6">
      <Title title={"Contribution"} />
      {contributionData
        ?.slice(0, showMore ? contributionData.length : 1)
        .map((item, id) => (
          <div className="mb-6" key={id}>
            <div className="flex gap-4 mb-4">
              <img
                src={item?.contributionImage}
                alt="contributionImage"
                width={91}
                height={91}
              />
              <div>
                <h3 className="font-inter font-bold text-[24px] leading-[32px] text-[#1D1C1C]">
                  {item?.contributionTitle}
                </h3>
                <span className="text-[#313D44] font-inter font-normal text-4 leading-[24px]">
                  {item?.contributionDate}
                </span>
              </div>
            </div>
            <p className="text-[#313D44] font-inter font-normal text-4 leading-[24px]">
              {item?.contributionText}
            </p>
          </div>
        ))}
      {contributionData.length > 1 && (
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          <p className="text-[#313D44] font-inter font-normal text-[16px] leading-[24px]">
            {showMore ? "Show less" : "Show more"}
          </p>
          <img src={rightIcon} alt="rightIcon" width={28} height={16} />
        </div>
      )}
    </section>
  );
};

export default Contribution;
