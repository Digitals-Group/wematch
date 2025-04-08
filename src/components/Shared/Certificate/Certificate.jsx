import React, { useState } from "react";
import { Certificates } from "../../../api/certificatesData";
import rightIcon from "../../../assets/svg/right.svg";

import Title from "../Title/Title";

const Certificate = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
      <div className="mb-6 flex items-center justify-between">
        <Title title={"Certificates"} />
        <button>Add certificate</button>
      </div>
      {Certificates?.slice(0, showMore ? Certificates.length : 2).map(
        (item, id) => (
          <div className="mb-6 flex items-center gap-[29px]" key={id}>
            <img src={item?.certificateImage} alt="" />
            <div>
              <div className="mb-2">
                <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                  Project
                </span>
                <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                  {item?.certificateProject}
                </h4>
              </div>
              <div className="mb-2">
                <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                  Organization
                </span>
                <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                  {item?.certificateOrg}
                </h4>
              </div>
              <div>
                <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                  On
                </span>
                <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                  {item?.certificateDate}
                </h4>
              </div>
            </div>
          </div>
        )
      )}
      {Certificates.length > 1 && (
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

export default Certificate;
