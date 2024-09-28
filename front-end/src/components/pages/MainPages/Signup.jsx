import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { useSignupHook } from "../../../Hooks/UseSignupHook"
import { FaEye, FaEyeSlash } from 'react-icons/fa';




// importing images from the assets folder
import logo from "../../../assets/logo1.png";
import microsoftLogo from "../../../assets/microsoftLogo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Signup = () => {

  const [fullname, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox


  const { signup, error, isLoading } = useSignupHook()

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault()

    if (!isChecked) {
      toast.error("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }


    await signup(fullname, username, email, phoneNumber, password, confirmPassword)

    if (error) {
      toast.error(error);
    }
  }


  return (
    <section className="w-full min-h-screen text-white font-poppins">
      <div className="flex">
        <div className="flex-[1] flex flex-col bg-[#161d2d]">
          <div className="gradient"></div>
          <div className="flex items-center p-3 gap-2">
            <img src={logo} alt="" className="w-[80px]" />
            <Link to="/" className="text-3xl font-[700] cursor-pointer">DevBlend</Link>
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
        <div className="flex-[2] pt-24 text-blak bg-[#0e1525] min-h-screen ">
          {/* headings */}
          <div className="w-[900px] mx-auto">
            <p className="text-4xl font-[700] mb-4">Signup</p>
            <p className="text-2xl font-[700]">
              "Automate your code with us now for free & enjoy it."
            </p>
          </div>

          {/* input boxes */}
          <form className="w-[70%] mx-auto mt-12" onSubmit={handleSignupFormSubmit}>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                  placeholder="Your name"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                  placeholder="Your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                name="phoneNumber"
                className="p-[25px] w-full rounded-lg bg-transparent border border-gray-700 outline-none z-10"
                placeholder="  + 92 | Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <div className="flex gap-4">
                <div className="flex items-center w-full px-2 gap-4 rounded-lg  border border-gray-700  z-10">
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

                <div className="flex items-center w-full px-2 gap-4 rounded-lg  border border-gray-700  z-10">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="password"
                    className="w-full bg-transparent py-[25px] px-[22px] outline-none"
                    placeholder="Your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                  {
                    showConfirmPassword ?
                      (
                        <FaEye onClick={handleShowConfirmPassword} className="mr-2 h-6 w-6 cursor-pointer" />
                      )
                      :
                      (
                        <FaEyeSlash onClick={handleShowConfirmPassword} className="mr-2 h-6 w-6 cursor-pointer" />
                      )
                  }
                </div>

              </div>
            </div>

            {/* agree terms and policies */}
            <div className="flex gap-2 items-center mt-8">
              <input
                type="checkbox"
                className="h-4 w-5 z-10"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)} // Update the state when the checkbox is clicked
                required
              />
              <p className="text-[15px]">
                I have read and agree with <strong>Terms of Service</strong>{" "}
                and our <strong>Privacy Policy</strong>.
              </p>
            </div>

            {/* button */}
            <div className="mt-7">
              <button
                disabled={isLoading}
                type="submit"
                className="cursor-pointer py-3 w-full bg-blue-500 text-white text-lg font-semibold rounded-lg rounded-bl-[15px] rounded-br-[15px] hover:bg-blue-800 duration-500"
              >
                SIGN UP
              </button>

              <p className="mt-4 text-center text-[16px]">
                Already have an account?{" "}
                <Link to={"/login"} className="underline text-[15px]">
                  <strong>Sign In</strong>
                </Link>
              </p>
            </div>

            {/* Signuip with social pltforms */}
            {/* <div className="flex mt-4 gap-4">
              <div className="flex-[1] flex items-center gap-5 font-semibold bg-white rounded-lg p-[1rem] cursor-pointer hover:bg-gray-200">
                <FcGoogle className="h-8 w-8" />
                <p className="text-black text-lg">Signup with Google</p>
              </div>
              <div className="flex-[1] flex items-center gap-5 font-semibold bg-white rounded-lg p-[1rem] cursor-pointer hover:bg-gray-200">
                <img src={microsoftLogo} alt="" className="ml-2" />
                <p className="text-black text-lg text-center">
                  Signup with Microsoft
                </p>
              </div>
            </div> */}
          </form>
        </div>
      </div>

    </section>
  );
};

export default Signup;
