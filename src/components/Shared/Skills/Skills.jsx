import { useState } from "react";
import { educationData } from "../../../api/education";
import rightIcon from "../../../assets/svg/right.svg";
import Title from "../Title/Title";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
      <Title title={"Skills"} />
      {educationData
        ?.slice(0, showMore ? educationData.length : 3)
        .map((edu, id) => (
          <div className="mb-6" key={id}>
            <h3 className="text-[#1D1C1C] font-inter font-medium text-[24px] leading-[32px] mb-2">
              {edu?.title}
            </h3>
            <p className="text-[#313D44] font-inter font-normal text-[16px] leading-6">
              {edu?.text}
            </p>
          </div>
        ))}
      {educationData.length > 1 && (
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          <p className="text-[#313D44] font-inter font-normal text-[16px] leading-[24px]">
            {showMore ? "Show less" : "Show more"}
          </p>
          <img src={rightIcon} alt="" />
        </div>
      )}
    </section>
  );
};

export default Skills;
