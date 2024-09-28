import React from "react";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa6";
import { GoVersions } from "react-icons/go";
import { FaAffiliatetheme } from "react-icons/fa";
import laptop from "../../../assets/laptop.jpg";
import cssSymbol from '../../../assets/cssSymbol.png';
import jsSymbol from '../../../assets/jsSymbol.png';
import htmlSymbol from '../../../assets/htmlSymbol.png';
import iconhtml from '../../../assets/htmllogo.png';
import iconcss from '../../../assets/csslogo.png';
import iconjs from '../../../assets/jslogo.png';

const Multilanguage = () => {
  return (
    <main className="homeSection font-poppins text-white">

      <section className="w-[1200px] mx-auto pt-40">
        {/* Headings of heros section */}
        <div className="flex flex-col space-y-2">
          <p className="text-center font-[600] text-[12px] sm:text-[13px] md:text-[18px] lg:text-[20px] ">
            Dive into the world of multilanguage coding
          </p>
          <p className="text-center font-[600] text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-[#04e384]">
            Embark, Innovate, Conquer
          </p>
          <p className="text-center font-[600] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
            Unlock the linguistic prowers of your code
          </p>
          <p className="text-center font-[600] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-zinc-50 ">
            where <span className="font-semibold text-[#04e384] hover:underline">HTML</span> builds the structure,
          </p>
          <p className="text-center font-[600] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]  text-zinc-50">
            <span className="font-semibold text-[#04e384] hover:underline">CSS</span>  adds the style, </p>
          <p className="text-center font-[600] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]  text-zinc-50">
            and <span className="font-semibold text-[#04e384] hover:underline">JavaScript</span> breathes life into your creations.
          </p>
        </div>
      </section>

      <section className='flex flex-col lg:max-w-[70%] mx-auto mt-14 sm:mt-16 md:mt-24 lg:mt-36 '>
        <div className='grid grid-col sm:grid-cols-3 justify-center gap-5 lg:gap-6 md:px-10 lg:px-10'>
          <div className='flex items-center gap-2 bg-white text-black w-[140px] sm:w-[170px] md:w-[230px] lg:w-[300px] xl:w-[350px] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 hover:text-gray-600 cursor-pointer'>
            <img src={htmlSymbol} alt="" className='w-[25px] h-[25px] lg:h-[30px] lg:w-[30px]' />
            <p className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-xl font-semibold'>Structure with HTML</p>
          </div>

          <div className='flex items-center gap-2 bg-white text-black w-[140px] sm:w-[170px] md:w-[230px] lg:w-[300px] xl:w-[350px] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 hover:text-gray-600  cursor-pointer'>
            <img src={cssSymbol} alt="" className='w-[25px] h-[25px] lg:h-[30px] lg:w-[30px]' />
            <p className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-xl font-semibold'>Style with CSS</p>
          </div>

          <div className='flex items-center gap-2 bg-white text-black w-[140px] sm:w-[170px] md:w-[230px] lg:w-[300px] xl:w-[350px] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 hover:text-gray-600  cursor-pointer'>
            <img src={jsSymbol} alt="" className='w-[25px] h-[25px] lg:h-[30px] lg:w-[30px]' />
            <p className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-xl font-semibold'>Interactivity with JS</p>
          </div>
        </div>
      </section>

      {/* <section className="lg:max-w-[85%] mx-auto pt-24 text-black">
        <p className='py-20 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-center text-[#04e384] pt-10 underline decoration-double'>Try this and explore the magic</p>
        <div className="grid grid-col sm:grid-cols-3 justify-center sm:gap-5 md:gap-7 lg:gap-9 px-7">
          First Scrollbar
          <div className="2xl:w-[500px] border-2 border-purple-800 rounded-lg sm:p-3 lg:p-4">
            <div className="flex gap-1">
              <h2 className="sm:text-[18px] lg:text-2xl font-[700] text-[#04e384] mb-4">HTML</h2>
              <img src={htmlSymbol} className="h-[26px] w-[26px] lg:h-[36px] lg:w-[36px]" />
            </div>
            <div className="h-64 overflow-y-auto bg-white rounded-lg text-[16px]">
              {Array.from(Array(3).keys()).map((index) => (
                <div key={index} className="p-3">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sagittis leo nec turpis tincidunt, vitae consectetur neque
                    iaculis. Integer sit amet accumsan dolor. In ultrices justo nec
                    neque convallis ultricies. Nam quis massa id justo posuere
                    vehicula eget vitae sapien. Cras sed nisi id justo volutpat
                    ullamcorper. Donec fringilla turpis id nunc posuere, sed
                    scelerisque felis pharetra. Aliquam erat volutpat.
                  </p>
                </div>
              ))}
            </div>
          </div>

          Second Scrollbar
          <div className="2xl:w-[500px] border-2 border-purple-800 rounded-lg sm:p-3 lg:p-4">
            <div className="flex gap-1">
              <h2 className="sm:text-[18px] lg:text-2xl font-[700] text-[#04e384] mb-4">CSS</h2>
              <img src={cssSymbol} className="h-[26px] w-[26px] lg:h-[36px] lg:w-[36px]" />
            </div>
            <div className="h-64 overflow-y-auto bg-white rounded-lg">
              {Array.from(Array(4).keys()).map((index) => (
                <div key={index} className="p-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sagittis leo nec turpis tincidunt, vitae consectetur neque
                    iaculis. Integer sit amet accumsan dolor. In ultrices justo nec
                    neque convallis ultricies. Nam quis massa id justo posuere
                    vehicula eget vitae sapien. Cras sed nisi id justo volutpat
                    ullamcorper. Donec fringilla turpis id nunc posuere, sed
                    scelerisque felis pharetra. Aliquam erat volutpat.
                  </p>
                </div>
              ))}
            </div>
          </div>

          Third Scrollbar
          <div className="2xl:w-[500px] border-2 border-purple-800 rounded-lg sm:p-3 lg:p-4">
            <div className="flex gap-1">
              <h2 className="sm:text-[18px] lg:text-2xl font-[700] mb-4 text-[#04e384] ">JavaScript</h2>
              <img src={jsSymbol} className="h-[26px] w-[26px] lg:h-[36px] lg:w-[36px]" />
            </div>
            <div className="h-64 overflow-y-auto bg-white rounded-lg">
              {Array.from(Array(4).keys()).map((index) => (
                <div key={index} className="p-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sagittis leo nec turpis tincidunt, vitae consectetur neque
                    iaculis. Integer sit amet accumsan dolor. In ultrices justo nec
                    neque convallis ultricies. Nam quis massa id justo posuere
                    vehicula eget vitae sapien. Cras sed nisi id justo volutpat
                    ullamcorper. Donec fringilla turpis id nunc posuere, sed
                    scelerisque felis pharetra. Aliquam erat volutpat.
                  </p>
                  <p>

                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}


      <section className="w-[70%] mx-auto pt-40 space-y-10">
        <div>
          <h2 className="text-4xl text-white text-center font-[700]">Essential Features for a Multilanguage</h2>
        </div>
        <div className='py-[40px] grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mx-auto leading-none'>
          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <MdLanguage className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Language Selection</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Dropdown or switch to select the preferred programming language.</p>
          </div>

          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <MdCode className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Code Highlighting</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Syntax highlighting for different programming languages.</p>
          </div>

          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <FcCollaboration className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Real-time Collaboration</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Multiple users can edit the code simultaneously.</p>
          </div>

          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <FaCommentDots className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Chat or Comment Section</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Allow users to communicate while coding.</p>
          </div>

          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <GoVersions className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Version Control</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Track changes and manage different versions of the code.</p>
          </div>

          <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
            <FaAffiliatetheme className="sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-6 text-blue-500" />
            <h2 className='text-[21px] font-[600]'>Themes</h2>
            <p className='text-[18px]  text-gray-300 leading-normal'>Offer different themes for the code editor (light, dark, etc.).</p>
          </div>
        </div>

      </section>

      <section className="pt-32 mx-auto w-[70%] space-y-16">
        <p className="text-[40px] font-[700] text-center text-[#04e384]">Code your dreams</p>
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center gap-16">
            <img src={iconhtml} alt="" className="h-[160px] w-[170px]" />
            <div className="flex flex-col gap-3 w-[480px]">
              <p className="text-3xl font-[600] text-[#04e384]">HTML</p>
              <p className="text-justify text-[17px] text-slate-300">
                "HTML serves as the foundational language for structuring web pages,
                providing the framework upon which content is organized and presented."
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-16">
            <div className="flex flex-col gap-3 w-[480px]">
              <p className="text-3xl font-[600] text-[#04e384]">CSS</p>
              <p className="text-justify text-[17px] text-slate-300">
                "CSS empowers web developers to breathe life into HTML elements,
                shaping their appearance and defining their visual style with precision and creativity."
              </p>
            </div>
            <img src={iconcss} alt="" className="h-[160px] w-[170px]" />
          </div>

          <div className="flex items-center justify-center gap-16">
            <img src={iconjs} className=" h-[140px] w-[150px]" />
            <div className="flex flex-col gap-3 w-[480px]">
              <p className="text-3xl font-[600] text-[#04e384]">JS</p>
              <p className="text-justify text-[17px] text-slate-300">
                "JavaScript unlocks the full potential of web development,
                adding interactivity and dynamic functionality to HTML and CSS,
                transforming static web pages into immersive and engaging experiences."
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-20">
          <div className='bg-white text-center text-black w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px] xl:w-[350px] mt-6 p-2 sm:p-3 md:p-3 lg:p-4 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-95 cursor-pointer'>
            <Link to={'/setupeditor'}
              className='text-[15px] sm:text-[16px] md:text-[18px] lg:text-xl font-semibold'>
              Start Empowering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Multilanguage;
