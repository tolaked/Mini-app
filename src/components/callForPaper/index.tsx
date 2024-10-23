import React from "react";
import Download3 from "../../assets/download3.png";

const CallForPaper = () => {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center py-12">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-center font-bold text-[35px] font-space-grotesk">Call for Paper</h2>
        <p className="text-center w-1/2 text-gray-600 text-sm">
          We invite scholars, educators, and researchers to submit their papers
          for the upcoming [Conference Name]. This year's theme is "Innovative
          Approaches in Education" and we welcome contributions that explore new
          methodologies, case studies, and theoretical advancements.
        </p>
      </div>

      <div className="w-full  flex  justify-evenly mb-12 text-[14px] text-[#5D5A62] px-10">
        <div className="bg-white shadow-md rounded-sm  text-center w-[25%] ">
          <h2 className="text-xl font-semibold bg-[#4F1553] text-white mb-4 py-2 ">
            Important Dates
          </h2>
          <ul className="text-left space-y-2 list-disc list-inside px-3"> 
            <li className="text-left" >Abstract submission starts: August 15 - October 17, 2024</li>
            <li>Manuscripts submission: October 16 - October 28, 2024</li>
            <li>Notification of Acceptance: November 30 - December 2, 20244</li>
            <li>Final Paper Submission: December 20, 2024</li>
          </ul>
        </div>

        <div className="bg-[#FEEFFF] shadow-md rounded-sm text-center w-[25%] pb-10">
        <h2 className="text-xl font-semibold bg-[#4F1553] text-white mb-4 py-2 ">
        Submission Guidelines
          </h2>
          <ul className="text-left space-y-2 list-disc list-inside px-3 ml-5 ">        
            <li>Format: Please submit your paper in PDF format using our provided template.</li>
            <li>Length: Submissions should be 6-8 pages, including references and appendices.</li>
            <li>File Types: Accepted file types include .pdf and .docx.
            Download template below</li>
            <li>Download template below</li>
          </ul>
          <div className="flex justify-center items-center">
            <button className="mt-7 text-[#753BBD]  border border-[#753BBD] py-2 px-4 rounded flex justify-center items-center">
              <span className="mr-2">Download template</span>
              <div className="relative flex items-center">
                <img src={Download3} alt="Download icon" className="w-6 h-5" />
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-sm text-center w-[25%]">
        <h2 className="text-xl font-semibold bg-[#4F1553] text-white mb-4 py-2 ">
        Submission Process
          </h2>
          <ul className="text-left space-y-2 list-disc list-inside px-3">
            <li>Prepare your paper according to the guidelines.</li>
            <li>Register on our submission portal.</li>
            <li>Submit your paper and provide the necessary details.</li>
            <li>We review and give you necessary pointers to making it better</li>
            <li>Submit the final paper.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <button className="px-6 py-3 bg-purple-900 text-white rounded-md hover:bg-purple-800">
          Submit Paper
        </button>
      </div>
    </div>
  );
};

export default CallForPaper;
