import React from "react";
import Input from "../shared/Input";
import Message from "../../assets/message.png";
import Tel from "../../assets/tel.png";
const ContactUs = () => {
  const partnerInputs = [
    {
      label: "First Name",
      placeholder: "Enter first name",
      placeholderColor: "black",
        font: "semibold"
      
    },
    {
      label: "Last name",
      placeholder: "Enter last name",
      placeholderColor: "black",
      font: "semibold"
    },
  ];

  return (
    <div className="bg-[#D3C4F2] py-5 px-20 ">
      <div className="flex justify-between p-4 mb-10">
        <div className="w-1/3 flex flex-col  text-black">
          <h2 className="text-left font-bold text-[30px] mb-4">Contact us</h2>
          <p className="text-left text-black">
            Want to partner with us for the conference? Kindly fill the form to
            allow us evaluate and manage potential partnership and sponsorship
          </p>
          <div className="message">
          <div className="relative flex items-center my-2" >
              <img src={Message} alt="Download icon" className="w-5 h-4" />
              <span className="ml-2 text-[#B63BBD] text-sm">admin@conference.com</span>
            </div>
          <div className="relative flex items-center my-2" >
              <img src={Tel} alt="Download icon" className="w-5 h-4" />
              <span className="ml-2 text-[#B63BBD] text-sm">+4466779977</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap justify-between !text-black">
          {partnerInputs.map((partner, index) => (
            <Input
              key={index}
              label={partner.label}
              placeholder={partner.placeholder}
              placeholderColor={partner.placeholderColor}
              font={partner.font}
           
            />
          ))}

          <div className="w-full flex flex-col mt-4">
            <label htmlFor="message" className="text-black mb-1">
              Message
            </label>
            <textarea
              rows={7}
              className="w-full border border-gray-300 rounded-sm p-2 outline-none resize-none"
              placeholder="Type here"
            />
          </div>

          <div className="w-full flex justify-end mt-4">
            <button className="bg-purple-500 text-white px-5 py-2 rounded-sm hover:bg-purple-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
