import React from "react";
import { MdPhonelinkSetup } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="w-[80%] mx-auto mt-10 px-10">
        <p className="text-center text-5xl font-[600]">
          What makes us top-tier
        </p>

        <div className="flex mx-auto gap-10 mt-20">
          <div className="flex flex-col gap-9 w-[500px]">
            <MdPhonelinkSetup className="w-32 h-32" />
            <div className="flex flex-col gap-5 ">
              <p className="text-2xl font-[600]">No Setup</p>
              <p className="text-justify">
                Login to IDE and start coding.There is no setup at all, you're
                ready to work on your projects right away.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-9 w-[500px]">
            <BsSpeedometer className="w-32 h-32" />
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-[600]">Speed</p>
              <p className="text-justify">
                Experience desktop-like speed and performance while editing your
                files in the editor.And unlike desktop, see what collaborators
                are doing.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-9 w-[500px]">
            <FaPhotoVideo className="w-32 h-32" />
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-[600]">Meetings</p>
              <p className="text-justify">
                Break down communication barriers while coding with live video
                conferencing features embedded in your code editor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
