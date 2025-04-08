import { useEffect } from "react";
import { useState } from "react";
import { apiRoot } from "../../../api/apiRoot";
import { educationData } from "../../../api/education";
import rightIcon from "../../../assets/svg/right.svg";
import Title from "../Title/Title";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  const [getSkills, setGetSkills] = useState([]);
  const token = localStorage.getItem("accessToken");
  console.log(getSkills);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await apiRoot.get("/skills", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res?.data);
        setGetSkills(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
      <Title title={"Skills"} />
      <div className="mb-[24px]">
        {getSkills?.map(({ level, skill_name, id }) => (
          <div className="mb-6 last:mb-0" key={id}>
            <h3 className="text-[#1D1C1C] font-inter font-medium text-[24px] leading-[32px] mb-2">
              {skill_name}
            </h3>
            <p className="text-[#313D44] font-inter font-normal text-[16px] leading-6">
              {level}
            </p>
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        <p className="text-[#313D44] font-inter font-normal text-[16px] leading-[24px]">
          {showMore ? "Show less" : "Show more"}
        </p>
        <img src={rightIcon} alt="rightIcon" width={28} height={16} />
      </div>
    </section>
  );
};

export default Skills;
// {educationData
// ?.slice(0, showMore ? educagtionData.length : 3)
// .map((edu, id) => (
//   <div className="mb-6" key={id}>
//     <h3 className="text-[#1D1C1C] font-inter font-medium text-[24px] leading-[32px] mb-2">
//       {edu?.title}
//     </h3>
//     <p className="text-[#313D44] font-inter font-normal text-[16px] leading-6">
//       {edu?.text}
//     </p>
//   </div>
// ))}
