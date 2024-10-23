import React from "react";
import ScheduleCard from "./Card";
import Button from "../shared/Button";

const ScheduleWrap = () => {
  const scheduleInfos = [
    {
      top1: "Onsite",
      title: "Registration opens",
      description: "Registration opens and checkin would begin",
    },
    {
      top1: "Onsite",
      top2: "Online",
      title: "First session",
      description:
        "Marketing strategies live and die by results and metrics. So why is it so hard to show impact for your ABM program? This workshop will help you overcome that challenge by",
    },
    {
      top1: "Onsite",
      title: "First session",
      description:
        "Marketing strategies live and die by results and metrics. So why is it so hard to show impact for your ABM program? This workshop will help you overcome that challenge by",
    },
    {
      top1: "Onsite",
      title: "First session",
      description:
        "Marketing strategies live and die by results and metrics. So why is it so hard to show impact for your ABM program? This workshop will help you overcome that challenge by",
    },
  ];

  return (
    <section className="pt-10 pb-20 bg-[#D3C41] px-20">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-center font-bold text-[35px]">Schedule</h2>
        <p className="text-center w-[57%] text-sm">
          Detailed schedule updates are being continually added. Items on the
          schedule are subject to change. All dates and time are displayed in
          the event time zone
        </p>
      </div>

      <div className="px-7 ">
        <div className="flex justify-between items-center border-b-2 border-[#B63BBD] my-7 w-[97%]">
          <div className="flex justify-between w-[35%] font-bold">
            <h2 className="text-white text-sm bg-[#B63BBD] px-5 py-2 rounded-sm ">
              Wed, Aug 22
            </h2>
            <h2 className="px-5 py-2">Thu, Aug 23</h2>
            <h2 className="px-5 py-2">Fri, Aug 24</h2>
          </div>
          
        </div>

        <div className="flex justify-between mb-10 w-25%">
          {scheduleInfos.map((info, index) => (
            <ScheduleCard
              key={index}
              top1={info.top1}
              top2={info.top2}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>

        <Button />
      </div>
    </section>
  );
};

export default ScheduleWrap;
