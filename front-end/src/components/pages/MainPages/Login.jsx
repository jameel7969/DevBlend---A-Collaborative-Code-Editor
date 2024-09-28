import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


// importing images from the assets folder
import logo from "../../../assets/logo1.png";
import microsoftLogo from "../../../assets/microsoftLogo.png";
import { Link, useNavigate } from "react-router-dom";

import { useLoginHook } from "../../../Hooks/useLoginHook";

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, isLoading } = useLoginHook()


  function handleShowPassword() {
    setShowPassword(!showPassword);
  }


  const handleLoginFormSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)

    if (error) {
      toast.error(error);
    }

  }

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
          <div className="flex-[2] flex flex-col items-center justify-center  text-blak bg-[#0e1525] min-h-screen ">
            {/* headings */}
            <div className="w-[900px] mx-auto">
              <p className="text-4xl font-[700] mb-4">Login </p>
              <p className="text-[16px] font-[600]">
                Login for a seamless experience, your journey awaits.
              </p>
            </div>

            {/* input boxes */}
            <form className="w-[70%] mx-auto " onSubmit={handleLoginFormSubmit}>
              <div className="flex flex-col gap-8 mt-8">
                <input
                  type="email"
                  name="email"
                  className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="flex items-center px-2 gap-4 rounded-lg  border border-gray-700  z-10">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="w-full bg-transparent py-[25px] px-[22px] outline-none"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {
                    showPassword ?
                      (
                        <FaEye onClick={handleShowPassword} className="mr-2 h-6 w-6 cursor-pointer" />
                      )
                      :
                      (
                        <FaEyeSlash onClick={handleShowPassword} className="mr-2 h-6 w-6 cursor-pointer" />
                      )
                  }
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to={"/forgotpassword"}
                  className="flex justify-end underline"
                >
                  Forgot Password?{" "}
                </Link>{" "}
              </div>

              {/* button */}
              <div className="mt-7">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="cursor-pointer py-3 w-full bg-blue-500 text-white text-lg font-semibold rounded-lg rounded-bl-[15px] rounded-br-[15px] hover:bg-blue-800 duration-500"
                >
                  LOGIN
                </button>
                <p className="mt-4 text-center text-[16px]">
                  Doesn't have an account?{" "}
                  <Link to={"/signup"} className="underline text-[15px]">
                    <strong>Sign Up</strong>
                  </Link>
                </p>
              </div>

              {/* Signuip with social pltforms */}
              {/* <div className="flex mt-4 gap-4">
                <div className="flex-[1] flex items-center gap-5 font-semibold bg-white rounded-lg p-[1rem] cursor-pointer hover:bg-gray-200">
                  <FcGoogle className="h-8 w-8" />
                  <p className="text-black text-lg">Login with Google</p>
                </div>
                <div className="flex-[1] flex items-center gap-5 font-semibold bg-white rounded-lg p-[1rem] cursor-pointer hover:bg-gray-200">
                  <img src={microsoftLogo} alt="" className="ml-2" />
                  <p className="text-black text-lg text-center">
                    Login with Microsoft
                  </p>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
