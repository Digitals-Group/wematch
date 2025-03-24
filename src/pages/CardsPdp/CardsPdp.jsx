import React from "react";
import { pdpData } from "../../api/pdp";
import { FaRegHeart } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { pdpInfo } from "../../api/pdpInfo";

const CardsPdp = () => {
  return (
    <div>
      <div className="max-w-[1336px] w-full mx-auto px-5 ">
        <div className="py-[50px]">
          <div className="border border-[#dce3eb] p-6 rounded-[24px] mb-[50px]">
            <div>
              <span className="text-[#2a3137] text-4 mb-2">
                Ассистент преподавателя / Помощник учителя (WEB)
              </span>
              <p className="text-black text-[18px] mb-2">
                от 3 500 000 до 6 000 000 so'm за месяц, на руки
              </p>
            </div>

            <div className="mb-6">
              {pdpData?.map((item, id) => (
                <div key={id}>
                  <p className="text-black text-[16px] mb-[5px]">
                    Опыт работы: {item?.experience}
                  </p>
                  <p className="text-black text-[16px] mb-[5px]">
                    {item?.fullTime}
                  </p>
                  <p className="text-black text-[16px] mb-[5px]">
                    {item?.table}
                  </p>
                  <p className="text-black text-[16px] mb-[5px]">
                    {item?.workingHour}
                  </p>
                  <p className="text-black text-[16px] mb-[5px]">
                    Формат работы: {item?.location}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 ">
              <button className="max-w-[295px] w-full bg-[#0070ff] rounded-[12px] text-white py-[12px] px-[16px]">
                Откликнуться
              </button>
              <div className="w-full flex items-center gap-2">
                <button className="max-w-[295px] w-full bg-[#edf6ff] rounded-[12px] text-[#0070ff] py-[12px] px-[16px]">
                  Контакты
                </button>
                <button className="p-3 bg-[#edf6ff] rounded-[12px] text-[#0070ff]">
                  <FaRegHeart className="w-6 h-6" />
                </button>
                <button className="p-3 bg-[#edf6ff] rounded-[12px] text-[#0070ff]">
                  <FiEyeOff className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <ul>
            {pdpInfo?.map((info, id) => (
              <li className="mb-2" key={id}>
                <h3 className="font-bold text-[#2a3132] text-[16px]">
                  {info?.bold}
                </h3>
                <p className="font-normal text-[#2a3132] text-[16px]">
                  {info?.title}
                </p>
                <span className="font-normal text-[#2a3132] text-[16px]">
                  {info?.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsPdp;
