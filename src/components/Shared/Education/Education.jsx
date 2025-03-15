import React from "react";
import { useState } from "react";
import { skillsData } from "../../../api/skillsData";
import Title from "../Title/Title";
import rightIcon from "../../../assets/svg/right.svg";

const Education = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
      <Title title={"Education"} />
      {skillsData
        ?.slice(0, showMore ? skillsData.length : 2)
        .map((item, id) => (
          <div className="mb-6" key={id}>
            <h3 className="font-inter font-normal text-black leading-[32px] text-[24px] mb-2">
              {item?.skillsTitle}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#1D1C1C] font-inter font-normal text-4 leading-6">
                School name
              </span>
              <p className="text-[#313D44] font-inter font-normal text-[12px] leading-4">
                {item?.skillsName}
              </p>
            </div>
            <p className="text-black font-inter font-normal text-[12px] leading-[100%]">
              {item?.skillsText}
            </p>
          </div>
        ))}
      {skillsData?.length > 1 && (
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

export default Education;
