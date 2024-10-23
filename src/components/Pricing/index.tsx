import React from "react";
import PriceCard from "./PriceCard";


const Pricing: React.FC = () => {
  return (
    <section >
      <div className="flex flex-col items-center w-full text-white">
        <h3 className="text-[35px] font-bold " >Conference Ticket Pricing</h3>
        <p className="w-1/2 text-[14px] text-center font-light">
          Explore the various ticket options available for our upcoming
          conference. Whether you prefer attending online or in person, we have
          tailored rates to suit your needs.
        </p>
      </div>

      <PriceCard/>
    </section>
  );
};

export default Pricing;
