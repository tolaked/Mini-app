import React from "react";
import ConferenceGroup from "../assets/conference-group2.png";

const Banner: React.FC = () => {
  return (
    <section className="bg-[#F8DCFA] text-white"
    >
     <div
      className="flex justify-between bg-cover bg-center bannerBackground items-center bg-[#FBE9FD] text-white "
    
    >
      <div className="container ml-20 text-left">
        <h3
          className="
            font-Space Grotesk
            text-left 
            text-gray-700
            text-[36px] 
            font-bold 
            leading-[52px] 
            tracking-[-0.02em]
             pb-5
             px-2
             w-3/4
            "
        >
          International Sustainable Ecological Engineering Design for Society
          (SEEDS) Conference 2024
        </h3>
        <p className="text-gray-500 ">
          SEEDS Conference aims to bring together experts from around the world
          to focus on changes required to minimize the impact of human activity
          on the environment.
        </p>
        <p className="mt-4 text-gray-700 font-Space Grotesk ">
          September 28 - 26 2024 | LEEDS University
        </p>
        <div className="py-8">
          <button className="bg-purple-600 text-white text-[14px]  py-3 px-6 rounded">
            Submit a paper
          </button>
          <button className="ml-4 bg-purple-200 text-purple-600 text-[14px] py-3 px-6 rounded">
            Register to attend
          </button>
        </div>
      </div>

      <div className=" container flex justify-end items-center ">
        <img
          src={ConferenceGroup}
          alt="Conference Group"
          className="rounded-lg shadow-lg h-[580px] w-[550px] "
        />
      </div>
    </div>
    </section>
  );
};

export default Banner;
