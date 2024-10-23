import React from "react";
import AboutImg from "../assets/about-pic.png";
import Download from "../assets/download.png";
import Arrow from "../assets/arrow.png";
import Pricing from "./Pricing";

const About: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <section id="about" className=" bg-[#B63BBD] rounded py-10 w-[90%]">
        <div className="container px-3 flex flex-col md:flex-row items-center justify-center mb-20">
          <div className="w-[45%] md:pl-12 bg-white py-20 rounded-sm">
            <h3 className="text-3xl font-bold">About SEED Conference</h3>
            <p className="mt-4  text-md  w-[95%] text-[#5D5A62]">
              The International SEEDS Conference aims to bring together experts
              from around the world to focus on changes required to minimize the
              impact of human activity on the environment. SEEDS is organized
              and co-hosted by Leeds Beckett University, the University of the
              West of England, Bristol, University of Suffolk, and Loughborough
              University. Click SEEDS 2024 tab for information about this year's
              SEEDS conference to be held at the Leeds Beckett University,
              Leeds.
            </p>

            <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded flex justify-center items-center">
              <span className="mr-2">Download full info</span>
              <div className="relative flex items-center">
                <img src={Download} alt="Download icon" className="w-6 h-5" />
                <img
                  src={Arrow}
                  alt="Arrow icon"
                  className="absolute inset-0 w-2 h-4 m-auto mb-2"
                />
              </div>
            </button>
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={AboutImg}
              alt="SEEDS Conference Group"
              className="rounded shadow-lg h-[450px] w-[700px]"
            />
          </div>
        </div>
        <Pricing />
      </section>
    </div>
  );
};

export default About;