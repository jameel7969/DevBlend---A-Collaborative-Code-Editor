import React from "react";
import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Hooks/UseAuthContext";
import toast from "react-hot-toast";

const Parameters = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleMoveToSetupEditor = () => {
    navigate('/setupeditor')
  }

  return (
    <section className="min-h-screen mx-auto w-[70%] mt-32 font-poppins ">
      <p className="text-5xl font-[700] text-center">Use the web <span className="text-[#04e384]">to build the web</span></p>
      <div className="flex flex-col gap-5 mt-20">
        <div className="flex items-center justify-center gap-20">
          <img src={feature1} alt="" className="h-[300px] w-[500px]" />
          <div className="flex flex-col gap-3 w-[480px]">
            <p className="text-3xl font-[700]">Learn</p>
            <p className="text-justify text-[16px]">
              Get Fimilar with DevBlend and its powerfull features - no
              downloads or set-up required
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col gap-3 w-[480px]">
            <p className="text-3xl font-[700]">Play & Test</p>
            <p className="text-justify text-[16px]">
              Test new ideas and experiment with DevBlend in a fully responsive
              environment
            </p>
          </div>
          <img src={feature2} alt="" className="h-[300px] w-[500px]" />
        </div>

        <div className="flex items-center justify-center gap-20">
          <img src={feature3} alt="" className="h-[300px] w-[500px]" />
          <div className="flex flex-col gap-3 w-[480px]">
            <p className="text-3xl font-[700]">Run & Build</p>
            <p className="text-justify text-[16px]">
              See what you are doing in a live preview component and check
              errors.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 pb-10">
        <button
          className="transition-transform hover:scale-95 bg-transparent border border-[#04e384] py-4 px-20 rounded-lg font-[600] text-[28px] shadow-2xl shadow-green-900"
          onClick={handleMoveToSetupEditor}
          disabled={!user}
          style={{ cursor: !user ? 'not-allowed' : 'pointer' }} // Change cursor to 'not-allowed' if disabled
        >
          Start Coding
        </button>
      </div>
    </section>
  );
};

export default Parameters;
