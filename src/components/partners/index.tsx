import React from "react";
import Sponsors from "../../assets/sponsors.png";
import Input from "../shared/Input";


const PartnerWrap = () => {

    const partnerInputs = [
        {
            label: "Organization name",
            placeholder: "Enter organization name"
        },
        {
            label: "Logo",
            placeholder: "Upload Logo",
            upload: "Browse file"
        },
        {
            label: "Email",
            placeholder: "Jim@seedconference.com"
        },
        {
            label: "Mobile number",
            placeholder: "Jim@seedconference.com"
        }
    ]

  return (
    <div className="bg-[#4F1553] ">
      <div className="flex flex-col justify-center  partnerBackground">
      <h2 className="text-center font-bold text-[25px] text-white my-5">
        Our Partners & Collaborators
      </h2>
        <img src={Sponsors} alt="sponsors" />
  
      </div>

      <div className="flex justify-between p-4 mb-10 mt-10">
        <div className="w-1/2 flex flex-col items-center text-white">
          <h2 className="text-left font-bold text-[35px] w-3/4">Become a Partner</h2>
          <p className="text-left w-3/4 text-sm">
            Want to partner with us for the conference? Kindly fill the form to
            allow us evaluate and manage potential partnership and sponsorship.
          </p>
        </div>

        <div className="w-1/2 flex flex-wrap justify-evenly px-5">
          {partnerInputs.map((partner, index) => (
            <Input
              key={index}
              label={partner.label}
              placeholder={partner.placeholder}
              upload={partner.upload}
            />
          )
          )}

          <div className="w-full flex flex-col mt-4 px-10">
            <label htmlFor="message" className="text-white mb-1">Brief Description of Organization</label>
            <textarea
              rows={7}
              className="w-full border border-gray-300 rounded-sm p-2 outline-none resize-none"
              placeholder="Type here"
            />
          </div>

          <div className="w-full flex justify-end mt-4 px-10">
            <button className="bg-[#753BBD] text-white px-3 py-1 rounded-sm hover:bg-purple-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWrap;
