import React, { useState } from "react";
import { useEffect } from "react";
import { apiRoot } from "../../../api/apiRoot";
import rightIcon from "../../../assets/svg/right.svg";
import { IoAddOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import Title from "../Title/Title";

const Certificate = () => {
  const [showMore, setShowMore] = useState(false);
  const [certificate, setCertificate] = useState([]);
  const token = localStorage.getItem("accessToken");

  const getCertificate = async () => {
    try {
      const res = await apiRoot.get("/certificates", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      setCertificate(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCertificate();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
      <div className="mb-6 flex items-center justify-between">
        <Title title={"Certificates"} />
        <button>
            <IoAddOutline className="w-6 h-6" />
        </button>
      </div>
      <div>
        {certificate?.map(
          ({
            id,
            description,
            image,
            issued_by,
            issue_date,
            certificate_name,
          }) => (
            <div className="mb-6 flex items-center gap-[29px]" key={id}>
              <img src={image} alt="" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="mb-2">
                    <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                      Project
                    </span>
                    <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                      {certificate_name}
                    </h4>
                  </div>
                  <div className="mb-2">
                    <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                      Organization
                    </span>
                    <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                      {issued_by}
                    </h4>
                  </div>
                  <div>
                    <span className="text-[#313D44] font-inter font-normal text-[14px]leading-[20px] mb-[4px]">
                      On
                    </span>
                    <h4 className="text-[#1D1C1C] font-inter font-normal text-[20px]leading-[28px]">
                      {formatDate(issue_date)}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button>
                    <MdEdit className="w-4 h-4"  />
                  </button>
                  <button>
                    <MdDelete className="w-4 h-4"  />
                  </button>
                </div>
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
  );
};

export default Certificate;
