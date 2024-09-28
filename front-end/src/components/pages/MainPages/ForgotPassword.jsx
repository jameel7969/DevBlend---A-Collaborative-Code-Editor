import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

// importing images from the assets folder
import logo from "../../../assets/logo1.png";
import microsoftLogo from "../../../assets/microsoftLogo.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  
  return (
    <section className="w-full min-h-screen text-white font-poppins">
      <div>
        <div className="flex">
          <div className="flex-[1] flex flex-col bg-[#161d2d]">
            <div className="gradient"></div>
            <div className="flex items-center p-3 gap-2 cursor-pointer" onClick={()=>navigate('/')}>
              <img src={logo} alt="" className="w-[80px]" />
              <p className="text-3xl font-[700]">DevBlend</p>
            </div>
            <div className="flex flex-col px-10 mt-[300px] justify-center gap-4">
              <p className="text-2xl font-[700] mb-2">
                Craft brilliance today.
              </p>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-6 h-6 text-white" />
                <p className="text-[16px]">
                  Build, test and run directly from your browser.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-6 h-6 text-white" />
                <p className="text-[16px]">
                  Connect seamlessly through video conferencing.{" "}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-6 h-6 text-white" />
                <p className="text-[16px]">
                  Instant code visualization for seamless development.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-6 h-6 text-white" />
                <p className="text-[16px]">
                  Collaborate in real time environment & work simultaneously.
                </p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex-[2] flex flex-col items-center justify-center  text-blak bg-[#0e1525] min-h-screen">
            {/* headings */}
            <div className="w-[900px] mx-auto">
              <Link to={"/login"}>
                <div className="flex items-center gap-3 mb-5">
                  <IoArrowBackCircle className="h-7 w-7 cursor-pointer z-10" />
                  <p href="#" className="mt-1">
                    Back to Login
                  </p>
                </div>
              </Link>
              <p className="text-4xl font-[700] mb-4">Forgot Password</p>
              <p className="text-[16px] font-[600]">
                Don't worry happens to all of us.
              </p>
              <p className="text-[16px] font-[600]">
                Enter your email below to recover your password.
              </p>
            </div>

            {/* input boxes */}
            <form className="w-[70%] mx-auto " >
              <div className="flex flex-col gap-8 mt-8">
                <input
                  type="email"
                  name="email"
                  className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                  placeholder="Ente recovery email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
              </div>

              {/* button */}
              <div className="mt-7">
                <Link
                to={'/verifycode'}
                  type="submit"
                  className="text-center py-3 w-full bg-blue-500 text-white text-lg font-semibold rounded-lg rounded-bl-[15px] rounded-br-[15px] hover:bg-blue-800 duration-500"
                >
                  FORGOT PASSWORD
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
