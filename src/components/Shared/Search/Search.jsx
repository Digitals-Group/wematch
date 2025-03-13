import React from "react";
import { vieweMoreData } from "../../../api/viewMoreData";
import Child from "./Child/Child";
import Form from "./Form/Form";

const Search = () => {
  return (
    <div>
      <div className="flex justify-between gap-[32px]">
        <div className="w-full">
          <div className="mb-6">
            <h4 className="font-inter text-[19px] leading-[24px]">
              Found results: {vieweMoreData?.length}
            </h4>
          </div>
          <div className="bg-white py-[15px] px-[16px] rounded-[24px] mb-6">
            <h4 className="text-[#24292E] font-normal text-[15px] leading-6">
              28 793 mentions of “Volunteering in IT Department”{" "}
            </h4>
          </div>
          <div>
            {vieweMoreData?.map((item) => {
              const {
                id,
                viewImage,
                viewText,
                viewTitle,
                viewLocation,
                viewBody,
              } = item;
              return (
                <Child
                  key={id}
                  viewImage={viewImage}
                  viewText={viewText}
                  viewTitle={viewTitle}
                  viewLocation={viewLocation}
                  viewBody={viewBody}
                />
              );
            })}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Search;
