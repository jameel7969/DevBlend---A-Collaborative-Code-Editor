import React from "react";
import team from "../../../assets/team.png";
import { Link } from "react-router-dom";
import aero from "../../../assets/aero.png";

const Teams = () => {
  return (
    <div>
      <div className="flex w-[80%] mx-auto items-center justify-center pb-20 relative">
        <div className="flex flex-col flex-[1]">
          <div className="mt-36">
            <p className="font-bold text-4xl">Teams</p>
            <div className="mt-2 font-semibold text-3xl">
              <p className="">bring everyone on board.</p>
            </div>
            <p className="mt-7 text-justify leading-relaxed mb-10">
              <span>
                  Collaboration is built in, not just a plugin.{" "}
              </span>
              It is the synergy of minds, where individuals come together to
              leverage their diverse skills and perspectives towards a common
              goal. It fosters innovation, creativity, and efficiency by
              combining the strengths of each team member, ultimately leading to
              greater success and achievement.
            </p>
          </div>
          <Link
            to={'/Teams'}
            className="text-center cursor-pointer transition-transform hover:scale-105 bg-transparent border border-[#04e384] py-4 w-60 rounded-lg font-[600] text-[24px] shadow-2xl shadow-green-700"
          >
            Learn More
          </Link>
        </div>

        <div className="flex-[1]">
          <img src={team} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Teams;
