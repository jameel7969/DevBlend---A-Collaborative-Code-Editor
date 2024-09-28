import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="homeSection min-h-screen font-poppins text-white py-32">
      {/* --- */}
      <div className="w-full flex mt-10">
        <form action="" className="flex flex-col flex-[2]  px-32 ">
          {/* ---- */}
          <div className="mb-10">
            <p className="text-4xl font-[700] mb-3">Connect with our team</p>
            <p className="text-4xl font-[700] text-[#8994b2]">
              management and get your questions answered.
            </p>
          </div>
          {/* --- */}
          <p className="mb-5 text-[18px] font-semibold">
            You can reach us by sending mail:
          </p>

          {/* input boxes */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 ">
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="" className="text-[14px]">
                  First Name*
                </label>
                <input
                  type="text"
                  className="p-5 rounded-lg bg-transparent border border-gray-700 outline-none"
                  placeholder="First name:"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="" className="text-[14px]">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="p-5 rounded-lg bg-transparent border border-gray-700 outline-none"
                  placeholder="Last name:"
                />
              </div>
            </div>

            {/* ----- */}
            <div className="flex gap-5 ">
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="" className="text-[14px]">
                  Email*
                </label>
                <input
                  type="email"
                  className="p-5 rounded-lg bg-transparent border border-gray-700 outline-none"
                  placeholder="Email:"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="" className="text-[14px]">
                  Comapny*
                </label>
                <input
                  type="text"
                  className="p-5 rounded-lg bg-transparent border border-gray-700 outline-none"
                  placeholder="Company name:"
                />
              </div>
            </div>

            {/* ------ */}

            <div className="flex flex-col gap-4 w-full ">
              <label htmlFor="" className="text-[14px]">
                Write your problem statment:*
              </label>
              <textarea
                type="text"
                className="p-5 h-[200px] rounded-xl bg-transparent border border-gray-700 outline-none resize-none"
                placeholder="Additional comments:"
              />
            </div>

            {/* ------- */}

            <div className="mt-5 ">
              <button className="text-center cursor-pointer transition-transform hover:scale-105 bg-transparent border border-[#a571f2] py-5 px-20 rounded-lg font-[700] text-[24px] shadow-2xl">
                Contact Us
              </button>
            </div>
          </div>
        </form>

        {/* Information */}

        <div className="flex flex-col flex-[1] mt-36">
          <p className="text-xl">You can also connect us by:</p>

          {/* --- */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-6  mt-10">
              <div className="">
                <IoHome className="w-[70px] h-[70px] bg-white text-black rounded-full p-3" />
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="mb-2 text-[#c7a6fc] font-[700] text-2xl">
                  Address
                </p>
                <p>1234 Model town,</p>
                <p>Camp Road, Lahore.</p>
              </div>
            </div>

            {/* --- */}

            <div className="flex gap-6  mt-10">
              <div className="">
                <FaPhone className="w-[70px] h-[70px] bg-white text-black rounded-full p-3" />
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="mb-2 text-[#c7a6fc]  font-[700] text-2xl">
                  Phone
                </p>
                <p className="text-justify cursor-pointer">+92309-7969650</p>
              </div>
            </div>

            {/* ----- */}

            <div className="flex gap-6 mt-10">
              <div className="">
                <MdMail className="w-[70px] h-[70px] bg-white text-black rounded-full p-3" />
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="mb-2 text-[#c7a6fc] font-[700] text-2xl">Email</p>
                <p className="text-justify cursor-pointer">www.123@gmail.com</p>
              </div>
            </div>
          </div>

          {/* ---- */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
