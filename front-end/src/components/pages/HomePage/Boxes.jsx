import React from "react";
import { Link } from "react-router-dom";

// react icons
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

const Boxes = () => {

  
  return (
    <section className="boxes">
      <div className="py-20">
        {/* Heading */}
        <p className="text-center font-[600] text-5xl mb-16">
          {" "}
          Features for all skill levels
        </p>

        <div className="flex flex-col justify-center items-center gap-4 pb-10">
          <div className="flex-[1] flex gap-4">
            <div className="p-2">
              <Link to={"/browseride"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-16 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <RiComputerLine className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">In-browser IDE</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    Start coding with your favorite language on any platform,
                    OS, and device.
                  </p>
                </div>
              </Link>
            </div>

            <div className="p-2">
              <Link to={"/collaboration"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-16 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <IoPersonAddOutline className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Real-time collaboration</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    Invite your friends, teammates, group members into your code
                    to work collaboratively.
                  </p>
                </div>
              </Link>
            </div>

            {/* <div className="p-2">
              <Link to={"/multilanguage"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-10 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <FaCode className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Multilanguage support</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    From HTML, CSS, to JavaScript stay in one platform to learn, code in
                    any language you want
                  </p>
                </div>
              </Link>
            </div> */}
          </div>

          <div className="flex-[1] flex gap-4">
            <div className="p-2">
              <Link to={"/resources"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-16 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <FaBookOpen className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Learning resources</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    Explore our comprehensive learning resources tailored to
                    empower individuals.
                  </p>
                </div>
              </Link>
            </div>

            {/* <div className="p-2">
              <Link to={"/"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-10 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <GiTeamIdea className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Team plans</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    Make your team more productive with interactive docs, remote
                    interviewing.
                  </p>
                </div>
              </Link>
            </div> */}

            <div className="p-2">
              <Link to={"/multilanguage"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-16 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <FaCode className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Multilanguage support</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    From HTML, CSS, to JavaScript stay in one platform to learn, code in
                    any language you want
                  </p>
                </div>
              </Link>
            </div>

            {/* <div className="p-2">
              <Link to={"/"}>
                <div className="bg-[#1C2333] border-2 border-[#004182] p-10 rounded-lg cursor-pointer transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow">
                  <FaCode className="mb-7 h-7 w-7 text-blue-500" />
                  <h3 className="text-[1.3rem]">Multilanguage support</h3>
                  <p className="w-[18rem] pt-8 text-gray-300 text-lg">
                    From Python, to C++ stay in one platform to learn, code in
                    any language you want
                  </p>
                </div>
              </Link>
            </div> */}
          </div>

          {/* <div className="flex flex-col items-center justify-center mt-20">
            
            <Link
              to={"/contact"}
              href=""
              className="transition-transform hover:scale-105 hover:bg-[#181f35] bg-transparent border border-[#a571f2] py-5 px-20 rounded-lg font-[700] text-[24px] shadow-2xl"
            >
              Start Creating
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
