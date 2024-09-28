import React from "react";
import video from "../../../assets/video.png";
import { Link } from "react-router-dom";

const VideoConferencing = () => {
  return (
    <div className="w-[80%] flex  mx-auto items-center justify-center py-20 ">
      <div className="flex flex-col flex-[1]">
        <div className="">
          <p className="font-bold text-4xl">Conferencing</p>
          <div className="mt-2 font-semibold text-3xl">
            <p className="">communication via video</p>
          </div>
          <p className="mt-7 text-justify leading-relaxed mb-10">
            <span>
                Seamless video conferencing in your editor.{" "}
            </span>
            Transform your coding sessions into interactive meetings with
            integrated video conferencing, enabling you to code, share screens,
            and discuss projects in real time.
          </p>
        </div>
        <Link
          to={'/Conferencing'}
          className="text-center cursor-pointer transition-transform hover:scale-105 bg-transparent border border-[#04e384] py-4 w-60 rounded-lg font-[700] text-[24px] shadow-2xl shadow-green-700"
        >
          Learn More
        </Link>
      </div>

      <div className="flex-[1] flex items-center justify-center">
        <img src={video} alt="" />
      </div>
    </div>
  );
};

export default VideoConferencing;
