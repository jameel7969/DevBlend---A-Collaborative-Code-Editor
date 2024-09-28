import React from "react";
import { GiTeamUpgrade } from "react-icons/gi";
import { FcVideoCall } from "react-icons/fc";
import { IoMdOptions } from "react-icons/io";
import { LuFileSearch } from "react-icons/lu";
import { GoVersions } from "react-icons/go";
import { SiGotomeeting } from "react-icons/si";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import about1 from '../../../assets/about1.jpeg'
import about2 from '../../../assets/about2.jpeg'
import about3 from '../../../assets/about3.png'
import about4 from '../../../assets/about4.jpeg'
import { useAuthContext } from "../../../Hooks/UseAuthContext";
import toast from "react-hot-toast";


const About = () => {
  const { user } = useAuthContext()
  const naviagte = useNavigate()

  const handleGotoSetupEditor = () => {
    if (user) {
      naviagte('/setupeditor')
    }
    else {
      toast.error('Please login first')
    }
  }

  return (
    <main className='homeSection font-poppins'>

      <section className="">
        {/* <div className="w-[80%] flex  mx-auto items-center justify-center py-20 "> */}
        <div className="w-full px-10 sm:px-10 md:px-0 lg:px-4 md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center pt-40 pb-10 sm:pb-10 xl:pb-20 md:gap-10">
          <div className="flex flex-col flex-[1] 2xl:ml-8 mt-2 justify-between">
            <div className="">
              <p className="font-[700] text-[18px] sm:text-[22px] md:text-2xl lg:text-3xl xl:text-4xl text-[#04e384]">DevBlend</p>
              <div className="mt-2 font-poppins text-[16px] sm:text-[18px] md:text-xl xl:text-3xl">
                <p className="text-white font-[700]">will be the best choice for your next project</p>
              </div>
              <p className="mt-5 md:mt-6 lg:mt-7 text-justify leading-relaxed mb-10 md:pb-6 lg:pb-16 xl:pb-0 text-gray-300 text-[13px] sm:text-[15px] lg:text-[18px]">
                Your ultimate choice for seamless collaboration.
                With intuitive features and real-time editing,
                boost productivity and innovation.
                From coding to video conferencing,
                streamline your workflow for exceptional results
                Choose DevBlend for exceptional results.
              </p>
              <div className="flex justify-center items-center text-center border border-zinc-400 bg-transparent cursor-pointer transition-transform hover:scale-95 duration-600  rounded-lg py-2 w-48 sm:py-2 sm:w-60 md:py-3 md:w-60 lg:w-72 xl:w-full lg:py-5 font-[700] ">
                <p className='text-[16px] sm:text-[18px] md:text-xl lg:text-2xl font-semibold text-center text-white' onClick={handleGotoSetupEditor}>Start a new Project!</p>
              </div>
            </div>
          </div>

          <div className="flex-[1] md:flex items-center justify-center xl:mt-8 xl:m-1 hidden">
            <img src={about1} alt="" className="rounded-xl"/>
          </div>
        </div>

        {/* quotation div */}
        <div className='py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg-px-24 w-fit  mx-auto rounded-2xl bg-emerald-600 '>
          <p className='font-semibold text-[16px] sm:text-[17px] md:text-xl lg:text-2xl text-center text-white'>
            The only source of Knowledge is experience
          </p>
        </div>
      </section>


      {/* services section */}
      <section className='max-w-[85%] mx-auto mt-16 md:mt-20 2xl:ml-44'>
        <div className='py-5 mx-auto grid'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-[700] '>
            Our Services
          </h1>
        </div>
        <div className="flex xl:gap-10 lg:mt-12 md:mt-0">
          <div className="2xl:flex-[1] 2xl:max-w-[1400px] mx-auto items-center 2xl:m-1 hidden 2xl:flex">
            <img src={about2} className="rounded-xl mx-auto h-[550px] " />
          </div>

          <div className='2xl:flex-[1] py-[40px] grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mx-auto leading-none'>
            <div className='shadow-lg p-4 hover:bg-slate-700 border border-teal-500 rounded-3xl border-dashed space-y-3'>
              <GiTeamUpgrade className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl py-3 text-[#a8834b]'> Collaboration</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Allow multiple developers to work together
                on the same codebase simultaneously,with
                changes being instantly synced across all users' screens.
              </p>
            </div>


            <div className=' shadow-lg p-4 hover:bg-slate-700 border border-teal-500 rounded-3xl border-dashed space-y-3'>
              <FcVideoCall className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl py-3 text-[#a8834b]'> Video Conferencing</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Offer video conferencing functionality directly within the code editor,
                allowing teams to conduct virtual meetings, pair programming sessions,
                and code reviews without switching between different tools.
              </p>
            </div>


            <div className='shadow-lg p-4 hover:bg-slate-700 border border-teal-500 text-justify rounded-3xl border-dashed space-y-3'>
              <IoMdOptions className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl text-[#a8834b]'> Customization Options</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Allow users to customize their coding environment with personalized themes,
                syntax highlighting, and other preferences to suit their individual needs and preferences.</p>
            </div>


            <div className=' shadow-lg p-4 hover:bg-slate-700 border border-teal-500 rounded-3xl border-dashed space-y-2'>
              <LuFileSearch className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl py-2 text-[#a8834b]'> Advanced Code Search</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Offer advanced code search capabilities that allow developers to quickly find code snippets,
                functions, or files within large codebases.
                Improve developer productivity by making it easier to navigate and locate relevant code.
              </p>
            </div>


            <div className=' shadow-lg p-4 hover:bg-slate-700 border border-teal-500 rounded-3xl border-dashed space-y-2'>
              <GoVersions className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl py-2 text-[#a8834b]'> Code Versioning and Rollback</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Implement advanced code versioning capabilities within the code editor,
                allowing developers to track changes, revert to previous versions,
                and collaborate safely without the risk of losing code.
              </p>
            </div>


            <div className=' shadow-lg p-4 hover:bg-slate-700 border border-teal-500 rounded-3xl border-dashed space-y-2'>
              <SiGotomeeting className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-lime-400" />
              <h3 className='text-[16px] sm:text-[18px] md:text-[19px] lg:text-xl py-2 text-[#a8834b]'> Dynamic Meeting Room Allocation</h3>
              <p className='text-justify text-zinc-50 text-[13px] sm:text-[14px] md:text-[16px] leading-5'>
                Automatically allocate virtual meeting rooms based on project teams,
                allowing seamless collaboration without the hassle of manual setup.
              </p>
            </div>
          </div>

        </div>

        {/* <div className="  mx-auto ">
          <img src={about3} className=" mt-10 rounded-xl   "/>
        </div> */}

      </section>


      <section className="max-w-[85%] mx-auto  mt-16">
        <div className="pt-5 grid ">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center text-white font-[700]">Project Workflow</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="py-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-start gap-10 2xl:gap-14 leading-none  ">
            <div className="flex ">
              <div className="step-description  ">
                <h1 className="text-center mt-2 text-zinc-50 text-3xl bg-orange-800 border rounded-full w-10 mx-auto">1</h1>
                <div className="w-28">
                  <p className="text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]"> Access</p>
                  <p className="text-sm text-white mt-3 text-justify text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Visit our website or download the app to start using the code editor.</p>
                </div>
              </div>
              <div className='mx-auto rounded-2xl bg-emerald-600 mt-5 px-10 h-2 hidden 3xl:flex'>
                <p></p>
              </div>
            </div>



            <div className="step-description">
              <h1 className=" text-center mt-2 text-white text-3xl bg-orange-800 border rounded-full w-10 mx-auto">2</h1>
              <div className="w-28">
                <p className=" text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]"> Create</p>
                <p className="text-sm text-justify text-zinc-50 mt-3 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Begin a new project by creating files or directories within the editor.</p>
              </div>
            </div>
            <div className='  mx-auto rounded-2xl bg-emerald-600 mt-5 px-10 h-2 hidden 3xl:flex'>
            </div>



            <div className="step-description">
              <h1 className=" text-center mt-2 text-white text-3xl bg-orange-800 border rounded-full w-10 mx-auto">3</h1>
              <div className="w-28">
                <p className="text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]"> Code</p>
                <p className="text-sm text-justify text-zinc-50 mt-3 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Write and edit code with ease using features like syntax highlighting and auto-completion..</p>
              </div>
            </div>
            <div className='mx-auto rounded-2xl bg-emerald-600 mt-5 px-10 h-2 hidden 3xl:flex'>  </div>


            <div className="step-description">
              <h1 className=" text-center mt-2 text-white text-3xl bg-orange-800 border rounded-full w-10 mx-auto">4</h1>
              <div className="w-28">
                <p className="text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]"> Run</p>
                <p className="text-sm text-justify text-zinc-50 mt-3 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Execute your code directly within the editor and see the results instantly.</p>
              </div>
            </div>
            <div className='  mx-auto rounded-2xl bg-emerald-600 mt-5 px-10 h-2 hidden 3xl:flex'></div>


            <div className="step-description">
              <h1 className=" text-center mt-2 text-white text-3xl bg-orange-800 border rounded-full w-10 mx-auto">5</h1>
              <div className="w-28">
                <p className="text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]">Save</p>
                <p className="text-sm text-justify text-zinc-50 mt-3  text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Save your projects locally or sync them with cloud storage for easy access.</p>
              </div>
            </div>
            <div className='   mx-auto rounded-2xl bg-emerald-600 mt-5 px-10 h-2 hidden 3xl:flex'></div>


            <div className="step-description">
              <h1 className=" text-center mt-2 text-white text-3xl bg-orange-800 border rounded-full w-10 mx-auto">6</h1>
              <div className="w-28">
                <p className="text-center mt-2 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-[#449aaf] font-[500]"> Collaborate</p>
                <p className="text-sm text-justify text-zinc-50 mt-3 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]">Work together in real-time with colleagues or friends by sharing your project with them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*last section */}
      <section className="max-w-[85%] mx-auto items-center justify-center py-20 lg:mr-9">
        <div className="flex items-center justify-center 2xl:space-x-40 sm:pb-6 md:pb-14 lg:pb-20 gap-10 2xl:gap-0 relative">
          <div className="flex flex-col flex-[1]">
            <div className="">
              {/* <p className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl text-[#a8834b]">Who we are</p> */}
              <div className="mt-1 md:mt-2 font-[700] text-white text-[16px] sm:text-[18px] md:text-xl xl:text-4xl">
                <p className="">DevBlend Unites Coders Worldwide</p>
              </div>
              <p className="mt-4 md:mt-6 lg:mt-7 text-justify leading-relaxed mb-10 text-slate-300 px-2 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px] " >
                "DevBlend redefines collaborative coding by uniting developers worldwide on a single platform.
                Our innovative tools foster seamless teamwork,
                allowing for efficient project development regardless of geographical boundaries.
                With DevBlend, coding becomes a collective endeavor, driving innovation and creativity to new heights."
              </p>
            </div>
          </div>

          <div className=" flex-[1] hidden md:flex  ">
            <img src={about3} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Link
            to={'/contact'}
            className="text-center border border-zinc-400 cursor-pointer text-white transition-transform hover:scale-95 duration-500  rounded-lg px-6 py-3 sm:px-8 sm:py-3 md:px-14 md:py-4 lg:px-20 lg:py-6 font-[700] text-2xl"
          >
            Contact Us
          </Link>
        </div>
      </section>



    </main>
  );
};
export default About;
