import React from "react";
import codeshare from "../../../assets/codeshare.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../Hooks/UseAuthContext";
import { useNavigate } from 'react-router-dom';

const CollaborationBox = () => {

  const {user} = useAuthContext()
  const navigate = useNavigate()

  return (
    <section className="pt-20 homeSection min-h-screen text-white">
      {/* first section */}
      <div className="w-[80%] mx-auto mt-32">
        <div className="flex items-center ">
          <div className="flex-[1] flex flex-col gap-3">
            <p className="text-5xl font-[700]">Share, code, and build</p>
            <p className="text-5xl font-[700]">together by using code</p>
            <p className="text-5xl font-[700]">collaboration.</p>
          </div>
          <div className="flex-[1]">
            <img src={codeshare} alt="" />
          </div>
        </div>
        <div className="mt-20">
          <p className="leading-relaxed text-2xl text-justify text-gray-300">
            Create your websites faster in a shared code editor that allows team
            members to collaborate and build in real-time. With DevBlend,
            accelerate your development workflow seamlessly and efficiently.
          </p>
        </div>
      </div>

      {/* next section */}
      {/* <div className="mt-24 ">
        <p className="text-center text-3xl font-[700] text-[#04e384]">
          Streamline your coding collaboration process with simple steps.
        </p>
      </div> */}

      {/* next section */}
      <div className="w-[80%] mx-auto pt-20">
        <p className="text-center mt-20 text-4xl font-[700]">
          Empowering Coding Communities
        </p>
        <div className="flex mt-20 gap-32">
          <div className="flex flex-col gap-8">
            <AiOutlineQuestionCircle className="w-[80px] h-[80px]" />
            <p className="text-2xl font-[700] text-[#04e384]">
              Interview Candidates
            </p>
            <p className="text-justify">
              Give a problem to the candidate and assess their real-time coding
              approach. Validate correctness by executing the code.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <BsMicrosoftTeams className="w-[80px] h-[80px]" />

            <p className="text-2xl font-[700] text-[#04e384]">
              Code With Peers
            </p>
            <p className="text-justify">
              Collaboration in the new remote world doesn't have to be a pain.
              Pair program with your teammates and debug issues together.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <FaChalkboardTeacher className="w-[80px] h-[80px]" />
            <p className="text-2xl font-[700] text-[#04e384]">
              Teach Someone To Code
            </p>
            <p className="text-justify">
              Share document with your students so that you can work with them
              collaboratively and they learn by doing.
            </p>
          </div>
        </div>
      </div>

      {/* next section */}
      <div className="flex flex-col gap-10 items-center justify-center py-32">
        <p className="text-4xl font-[700] text-[#04e384]">Get started with our online code collaboration tool</p>
        <button
          className="text-center transition-transform hover:scale-95 bg-transparent border border-[#a571f2] py-5 px-10 rounded-lg font-[700] text-[20px] shadow-2xl"
          onClick={() => navigate("/setupeditor")}
          disabled={!user}
          style={{ cursor: !user ? 'not-allowed' : 'pointer' }}
        >
          START COLLABORATING
        </button>
      </div>
    </section>
  );
};

export default CollaborationBox;
