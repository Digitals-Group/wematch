import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiRoot } from "../../api/apiRoot";
import { profileData } from "../../api/profile";
import Bio from "../../components/Shared/Bio/Bio";
import Certificate from "../../components/Shared/Certificate/Certificate";
import Contribution from "../../components/Shared/Contribution/Contribution";
import Education from "../../components/Shared/Education/Education";
import Skills from "../../components/Shared/Skills/Skills";

const Profile = () => {
  const [ profileUsers, setProfileUsers ] = useState(null)
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const getProfile = async () => {
        try {
          const res = await apiRoot.get("/users/me", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          const user = res?.data?.data
          console.log(user);
          setProfileUsers({
            profileImg: user?.image,
            profileName: user?.name,
            profileEmail: user?.email,
            profileAge: "N/A",
            profileGender: "N/A",
            profileLocation: "N/A",
          })
        }catch (err) {
          console.log(err);
        }
    }

    getProfile()
  }, [])
  return (
    <section className="pt-[84px] pb-[180px] bg-[#F4F5F6]">
      <div className="max-w-[1091px] w-full mx-auto px-[20px]">
        <div className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
          <div className="flex gap-[210px] mb-6">
            <img
              src={profileUsers?.profileImg}
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
                {profileUsers?.profileName}
              </h3>
            </div>
            <div>
              <span className="font-inter font-normal text-4 leading-6">
                Age
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileUsers?.profileAge}
              </h3>
            </div>
          </div>

          <div className="flex mb-6">
            <div className="max-w-[497px] w-full">
              <span className="font-inter font-normal text-4 leading-6">
                Gender
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileUsers?.profileGender}
              </h3>
            </div>
            <div>
              <span className="font-inter font-normal text-4 leading-6">
                Email
              </span>
              <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
                {profileUsers?.profileEmail}
              </h3>
            </div>
          </div>

          <div className="max-w-[497px] w-full">
            <span className="font-inter font-normal text-4 leading-6">
              Location
            </span>
            <h3 className="text-[#313D44] font-inter font-semibold text-[20px] leading-[28px]">
              {profileUsers?.profileLocation}
            </h3>
          </div>
        </div>
        <Bio />
        <Skills />
        <Certificate />
        <Education />
        <Contribution />
      </div>
    </section>
  );
};

export default Profile;
