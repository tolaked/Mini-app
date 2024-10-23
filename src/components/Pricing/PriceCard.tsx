import React from 'react';

const PriceCard = () => {

  const cardData = [
    {
      title: "Full Access (Online + In-person)",
      priceOld: "£350",
      priceNew: "£250",
      dateOnline: "27/08/2024",
      dateInPerson: "28/08/2024 & 29/08/2024",
      offer: "Ticket is 20% off for early birds and 22% off for students. Offer for early buyers expires 20/08/2024",
      highlightColor: "bg-[#4C247D]"
    },
    {
      title: "Single Day (In-person)",
      priceOld: "£150",
      priceNew: "£110",
      dateOnline: "",
      dateInPerson: "28/08/2024 or 29/08/2024",
      offer: "Ticket is 20% off for early buyers and 22% off for students. Offer for early buyers expires 20/08/2024",
      highlightColor: "bg-[#4F1553]"
    },
    {
      title: "Online Only",
      priceOld: "",
      priceNew: "£350",
      dateOnline: "27/08/2024",
      dateInPerson: "",
      offer: "You will get to enjoy our online sessions as you get the feeds",
      highlightColor: "bg-[#222779]"
    },
    {
      title: "Gala Dinner and RISE Awards",
      priceOld: "",
      priceNew: "£350",
      dateOnline: "",
      dateInPerson: "29/08/2024",
      offer: "To get multiple tickets at discounted fee, reach out to admin here",
      highlightColor: "bg-[#005767]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {cardData.map((card, index) => (
          <div key={index} className="rounded ">
            <h3 className={`text-xl font-bold  rounded-tr rounded-tl ${card.highlightColor} max-w-full text-white p-2 text-center h-20`}>
              {card.title}
            </h3>
            <div className='bg-white h-[175px] px-2   rounded-br rounded-bl'>
              <p className="text-xs mb-2 pt-1 flex ">
                {card.dateOnline && (
                  <span className="block w-3/4">Online: <span className='text-gray-400 font-light'>{card.dateOnline}</span></span>
                )}
                {card.dateInPerson && (
                  <span className="block text-right ">In-person: <span className='text-gray-400 font-light'> {card.dateInPerson}</span></span>
                )}
              </p>
              <div className="text-3xl font-bold text-purple-600 mb-2 text-center">
                <span className="line-through text-gray-500 text-base font-light">{card.priceOld}</span>{" "}
                {card.priceNew}
              </div>
              <p className="text-sm text-center text-gray-700 ">
                {card.offer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-purple-900 text-white px-6 py-3 rounded-sm hover:bg-purple-800">
          Get Ticket now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
