import React from "react";
import { profileData } from "../../api/profile";
import Bio from "../../components/Shared/Bio/Bio";
import Certificate from "../../components/Shared/Certificate/Certificate";
import Skills from "../../components/Shared/Skills/Skills";

const Profile = () => {
  return (
    <section className="pt-[84px] pb-[180px] bg-[#F4F5F6]">
      <div className="max-w-[1091px] w-full mx-auto px-[20px]">
        <div className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
          <div className="flex gap-[210px] mb-6">
            <img
              src={profileData?.profileImg}
              alt="profileImg"
              width={146}
              height={146}
            />
            <h4 className="text-[#1D1C1C] font-inter font-medium text-[30px] leading-[36px]">
              {profileData?.profileInfo}
            </h4>
          </div>

          <div className="flex mb-6">
            <div className="max-w-[497px] w-full">
              <span className="font-inter font-normal text-4 leading-6">
                Name
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileData?.profileName}
              </h3>
            </div>
            <div>
              <span className="font-inter font-normal text-4 leading-6">
                Age
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileData?.profileAge}
              </h3>
            </div>
          </div>

          <div className="flex mb-6">
            <div className="max-w-[497px] w-full">
              <span className="font-inter font-normal text-4 leading-6">
                Gender
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileData?.profileGender}
              </h3>
            </div>
            <div>
              <span className="font-inter font-normal text-4 leading-6">
                Email
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileData?.profileEmail}
              </h3>
            </div>
          </div>

          <div className="max-w-[497px] w-full">
            <span className="font-inter font-normal text-4 leading-6">
              Location
            </span>
            <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
              {profileData?.profileLocation}
            </h3>
          </div>
        </div>
        <Bio />
        <Skills />
        <Certificate />
      </div>
    </section>
  );
};

export default Profile;
