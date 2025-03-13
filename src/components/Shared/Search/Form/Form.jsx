import React from "react";

const Form = () => {
  return (
    <div className="max-w-[321px] w-full bg-white rounded-[16px] px-4 pt-4 pb-[129px] flex-shrink-0 h-fit">
      <div className="text-center">
        <p className="font-inter cursor-pointer font-normal text-[13px] leading-[40px] text-[#363E45] underline">
          Clear
        </p>
      </div>

      <form>
        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Date
          </label>
          <div className="flex items-center justify-between mt-2">
            <input
              className="border border-grey max-w-[138px] h-[40px] rounded-[12px]"
              type="date"
            />
            <input
              className="border border-grey max-w-[138px] h-[40px] rounded-[12px]"
              type="date"
            />
          </div>
        </div>

        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Category
          </label>
          <div className="flex items-center justify-between mt-2">
            <select
              className="border border-grey w-full h-[40px] rounded-[12px]"
              name=""
              id=""
            >
              <option value="Media & Design">Media & Design</option>
            </select>
          </div>
        </div>

        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Type
          </label>
          <div className="flex items-center justify-between mt-2">
            <select
              className="border border-grey w-full h-[40px] rounded-[12px]"
              name=""
              id=""
            >
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Location
          </label>
          <div className="flex items-center justify-between mt-2">
            <select
              className="border border-grey w-full h-[40px] rounded-[12px]"
              name=""
              id=""
            >
              <option value="Select">Select</option>
            </select>
          </div>
        </div>

        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Experience
          </label>
          <div className="flex items-center justify-between mt-2">
            <select
              className="border border-grey w-full h-[40px] rounded-[12px]"
              name=""
              id=""
            >
              <option value="Not required">Not required</option>
            </select>
          </div>
        </div>

        <div className="mb-[15px]">
          <label
            className="text-[#24292E] font-inter font-normal text-[15px] leading-4"
            htmlFor=""
          >
            Payment Type
          </label>
          <div className="flex items-center justify-between mt-2">
            <select
              className="border border-grey w-full h-[40px] rounded-[12px]"
              name=""
              id=""
            >
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
