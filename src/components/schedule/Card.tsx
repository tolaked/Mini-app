import React from "react";
import Ellipse from "../../assets/ellipse.png";
import Llogo from "../../assets/l-logo.png";

const ScheduleCard = ({ top1, top2, title, description }: any) => {
  return (
    <section className="w-full flex">
      <div className="w-[90%] flex flex-col p-2 bg-white rounded-sm"> 
        <div className="flex justify-between items-center mb-2 w-[45%] text-xs"> 
          <p className="bg-purple-300 px-2 py-1 rounded-sm">{top1}</p> 
          <p>{top2}</p>
        </div>

        <div className="card-text">
          <h2 className="text-lg font-bold mb-1 text-left font-space-grotesk">{title}</h2> 
          <p className="text-xs text-left mb-1 w-[70%] text-gray-500">{description}</p> 
        </div>

        <div className="my-2">
          <div className="flex items-center mb-2"> 
            <div className="border border-gray-300 rounded-full w-4 h-4 flex justify-center items-center text-xs"> 
              <img src={Llogo} alt="ellipse" />
            </div>
            <span className="text-xs ml-1 font-space-grotesk">Aug 22, 2024. 8:00 AM - 10:00 AM</span>
          </div>

          <div className="flex items-center mb-2"> 
            <img src={Ellipse} alt="ellipse" />
            <span className="text-xs ml-1 font-space-grotesk">Main hall</span> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCard;
