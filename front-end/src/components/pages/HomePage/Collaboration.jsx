import React from "react";
import multicursor from "../../../assets/Multiplayer1.png";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <div>
      <div className="flex w-[80%] mx-auto items-center justify-center">
        <div className="flex flex-col flex-[1]">
          <div className="">
            <p className="font-bold text-4xl">Multiplayer</p>
            <div className="mt-2 font-semibold text-3xl">
              <p className="">code simultaneoulsy on single file</p>
            </div>
            <p className="mt-7 text-justify leading-relaxed mb-10">
              <span>
                  Immerse yourself in a collaborative editing environment{" "}
              </span>
              of Google Docs, where you can seamlessly work alongside your team
              in real-time. Witness the dynamic exchange of ideas as you see
              your collaborators' cursors moving, allowing for fluid and
              synchronized editing sessions.
            </p>
          </div>
          <Link
            href=""
            className="text-center cursor-pointer transition-transform hover:scale-105 bg-transparent border border-[#04e384] py-4 w-60 rounded-lg font-[700] text-[24px] shadow-2xl"
          >
            Learn More
          </Link>
        </div>

        <div className="flex-[1] flex items-center justify-center">
          <img src={multicursor} alt="" className="w-[700px] h-[500px] rounded-[110px]" />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
