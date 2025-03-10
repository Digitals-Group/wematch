import React from "react";

const Hero = () => {
  return (
    <section className="bg-white shadow-sm shadow-gray-300 mb-[180px]">
      <div className="max-w-[1336px] w-full mx-auto px-[20px]">
        <div className="flex flex-col items-center py-[120px]">
          <h2 className="text-black font-bold text-[60px] leading-[100%] mb-[40px]">
            Make a Difference Today!
          </h2>
          <p className="text-black font-normal text-4 leading-[27px]">
            Explore volunteering activities that match your interests and
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
