import React from 'react';

const Card = ({ image, name, title, description, speakerRank }: any) => {
  return (
    <section>
      <div className="p-4">
        <div className="mb-4 relative">
          <img src={image} alt={name} className="w-full h-auto object-cover" />
          
          <div className="absolute bottom-0 right-0 bg-[#B63BBD] text-white text-[12px] px-3 py-2 rounded">
            {speakerRank}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-[18px] font-bold text-black"> {name} </h3>
          <p className="text-[14px] text-black">{title}</p>
          <p className="text-[12px] text-gray-500">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;

