import React from "react";
import { useState } from "react";
import Title from "../Title/Title";
import rightIcon from "../../../assets/svg/right.svg";
import { useEffect } from "react";
import { apiRoot } from "../../../api/apiRoot";
import { IoAddOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import SkillModal from "../../ui/Modal/skill-modal";

const Contribution = () => {
  const [showMore, setShowMore] = useState(false);
  const [ openPostContribution, setOpenPostContribution ] = useState(false)
  const [contribution, setContribution] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    apiRoot
      .get("/contribution-history", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res?.data?.data);
        setContribution(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return (
  <>
     <section className="bg-white shadow-sm shadow-gray-300 p-6">
      <div className="mb-6 flex items-center justify-between">
        <Title title={"Contribution"} />
        <button onClick={() => setOpenPostContribution(true)}>
          <IoAddOutline className="w-6 h-6" />
        </button>
      </div>
      <div>
        {contribution?.map(
          ({
            id,
            company_name,
            description,
            end_date,
            start_date,
            position,
          }) => (
            <div className="mb-6 flex items-center justify-between" key={id}>
              <div>
                <h3 className="font-inter font-normal text-black leading-[32px] text-[24px] mb-2">
                  {position}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#1D1C1C] font-inter font-normal text-4 leading-6">
                    {company_name}
                  </span>
                  <p className="text-[#313D44] font-inter font-normal text-[12px] leading-4">
                    {`${formatDate(start_date)} - ${formatDate(end_date)}`}
                  </p>
                </div>
                <p className="text-black font-inter font-normal text-[12px] leading-[100%]">
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button>
                  <MdEdit className="w-4 h-4" />
                </button>
                <button>
                  <MdDelete className="w-4 h-4" />
                </button>
              </div>
            </div>
          )
        )}
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
    {openPostContribution && (
      <SkillModal close={() => setOpenPostContribution(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">Add contribution</h1>
          </div>
      </SkillModal>
    )}
  </>
  );
};

export default Contribution;
