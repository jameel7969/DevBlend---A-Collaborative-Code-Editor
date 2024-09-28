import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../../assets/laptop.jpg";
import { useAuthContext } from "../../../Hooks/UseAuthContext";

const Introduction = () => {

  const { user } = useAuthContext()

  return (
    <div className="">
      <section className="font-poppins">
        <div className="w-[1200px] mx-auto  pt-52">
          {/* Headings of heros section */}
          <div className="flex flex-col mt-16">
            <p className="text-center font-[600] text-2xl">
              Turning Visions into Pixels
            </p>
            <p className="text-center mt-5 font-[700] text-5xl">
              Dream, Explore & Achieve
            </p>
            <p className="text-center mt-5 font-[700] text-6xl">
              <span className="text-[#04e384]">&#123;web&#125;</span> Precision
              Delieverd!
            </p>
            <p className="text-center mt-10 font-[600] text-[18px] mb-2">
              In DevBlend, collaboration meets innovation with our cutting-edge
              coding
            </p>
            <p className="text-center font-[600] text-[18px] mb-2">
              editor and live preview features, fostering seamless teamwork and
              real-time project visualization.{" "}
            </p>
          </div>

          <div className="image"></div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {
              !user && (
                <Link
                  href=""
                  to={"/signup"}
                  className="cursor-pointer transition-transform hover:scale-105 bg-transparent border border-[#04e384] py-4 px-14 rounded-lg font-[700] text-[24px] shadow-2xl shadow-green-900"
                >
                  Get Started
                </Link>
              )
            }

            <Link
              to={"/contact"}
              href=""
              className="transition-transform hover:scale-105 bg-transparent border border-[#a571f2] py-4 px-14 rounded-lg font-[700] text-[24px] shadow-2xl shadow-purple-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
