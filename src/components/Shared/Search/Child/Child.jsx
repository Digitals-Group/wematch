import React from "react";

const Child = ({ viewImage, viewText, viewTitle, viewLocation, viewBody }) => {
  return (
    <div className="bg-white flex gap-4 mb-6 rounded-[20px] pt-4 pr-[14px] pb-[36px] pl-4">
      <img className="rounded-b-2xl" src={viewImage} alt="viewImage" width={184} height={184} />
      <div>
        <span className="bg-[#98A3AE29] rounded-[4px] text-[#24292E] py-[4px] pr-[39px] pl-[20px] font-inter font-normal text-[12.4px] leading-4">{viewText}</span>
        <div className="mt-[15px]">
            <h4 className="font-inter font-medium text-[19.2px] leading-6 text-[#24292E] mb-[5px]">{viewTitle}</h4>
            <p className="text-[#363E45] text-[13.5px] leading-5 mb-[7px]">{viewLocation}</p>
            <p className="text-[#24292E] font-normal font-inter text-[15px] leading-5">{viewBody}</p>
        </div>
      </div>
    </div>
  );
};

export default Child;
