import React from "react";
import ide from "../../../assets/ide.jpg";
import { IoIosCloudDone } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Hooks/UseAuthContext";
import toast from "react-hot-toast";

const BrowserIDE = () => {

  const { user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <section className="min-h-screen font-poppins homeSection text-white pt-52">
      {/* Heading */}

      <div className=" w-[85%] mx-auto ">
        <div className="flex flex-col gap-10">
          <p className="text-4xl font-[700]">
            Broswer-based IDE: <span className="text-[#04e384]">DevBlend</span>
          </p>
          <p className="text-[18px] font-[500] text-justify leading-relaxed text-gray-300">
            An Integradted Development Environment (IDE), an essential software
            application for any software developer.Among various types of IDEs
            available, browser-based IDEs have gained significant popularity
            among development teams due to their convenient and intuitive
            development experience.{" "}
          </p>
        </div>

        {/* <img src={ide} alt="" className="rounded-3xl mt-10 w-full " /> */}
      </div>

      {/* ----- */}

      <div className="mt-32">
        <p className="text-4xl font-[700] text-center text-[#04e384]">
          Core DevBlend Characteristics & Features
        </p>
      </div>

      {/* Swiper component */}
      <div className="">
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false} // Hide the navigation arrows
          modules={[Autoplay, Pagination, Navigation]}
          className="py-20 w-[90%]"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10, // Adjust the space between slides for smaller screens
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20, // Adjust the space between slides for medium screens
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30, // Adjust the space between slides for larger screens
            },
          }}
          slidesPerView={"auto"}
        >
          <SwiperSlide>
            <div className="w-[520px] mx-auto bg-transparent px-10 py-12 text-black rounded-3xl bg-white cursor-pointer">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-[700] text-[#985df2]">Speed</p>
                <p className="text-justify leading-relaxed">
                  DevBlend increases your coding speed, such as automatic code
                  completion, indentation, syntax highlighting.
                </p>
                <p className="text-justify leading-relaxed">
                  These features streamline the development process by providing
                  suggestions, improving code readability, ensuring consistent
                  formatting, facilitating quick code optimization. These
                  features collectively contribute to a more efficient and
                  productive coding experience.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[520px] mx-auto bg-transparent px-10 py-12 text-black rounded-3xl bg-white cursor-pointer">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-[700] text-[#985df2]">
                  Supported Languages
                </p>
                <p className="text-justify leading-relaxed">
                  DevBlend offer comprehensive support for multiple languages
                  including JavaScript, HTML and CSS for developers.
                </p>
                <p className="text-justify leading-relaxed">
                  These languages, namely JavaScript, HTML, and CSS, play a
                  crucial role in shaping interactive and dynamic designs within
                  DevBlend. They serve as the backbone for empowering
                  developers, providing the necessary tools to create
                  captivating user experiences.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[520px] mx-auto bg-transparent px-10 py-12 text-black rounded-3xl bg-white cursor-pointer">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-[700] text-[#985df2]">Pricing</p>
                <p className="text-justify leading-relaxed">
                  DevBlend kickstarts its journey by offering free services,
                  tailored to cater to the diverse needs of code developers.
                </p>
                <p className="text-justify leading-relaxed">
                  By conducting a comprehensive assessment, users can
                  effectively compare the offerings of DevBlend against other
                  platforms, striking a balance between cost-effectiveness and
                  the provision of essential tools for streamlined development
                  workflows.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[520px] mx-auto bg-transparent px-10 py-12 text-black rounded-3xl bg-white cursor-pointer">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-[700] text-[#985df2]">
                  Collaboration
                </p>
                <p className="text-justify leading-relaxed">
                  DevBlend fosters seamless teamwork by enabling multiple
                  individuals to precisely collaborate on a single file.
                </p>
                <p className="text-justify leading-relaxed">
                  This collaborative environment facilitates synchronized
                  efforts, allowing team members to collectively contribute,
                  review, and refine code in real-time.This promotes effecient
                  communication and synergy among team members to enhance
                  productivity.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[520px] mx-auto bg-transparent px-10 py-12 text-black rounded-3xl bg-white cursor-pointer">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-[700] text-[#985df2]">
                  Video Conferencing
                </p>
                <p className="text-justify leading-relaxed">
                  Incorporating video conferencing into code editors offers a
                  variety of benefits to developers to work collaboratively.
                </p>
                <p className="text-justify leading-relaxed">
                  This fosters enhanced communication and teamwork, as
                  face-to-face interactions facilitate clearer discussions and
                  more efficient problem-solving.This facilitates immediate
                  feedback on code, enabling developers to iterate and improve
                  rapidly.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* next section */}
      <div className="pb-10 w-[90%] mx-auto">
        <div className="flex bg-transparent py-20 gap-10 mt-10">
          <div className="flex flex-col items-center gap-7">
            <div className="bg-[#261145] rounded-full p-6">
              <IoIosCloudDone className="w-[50px] h-[50px] text-[#a571f2]" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-2xl font-[700] text-green-500">
                Faster than local
              </p>
              <p className="text-justify leading-relaxed">
                Get rid of slow build times and time lost in context-switching.
                Our powerful DevBlend platform runs your code up to 200x faster
                than local machines, ensuring efficient workflows and rapid
                deployment.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-7">
            <div className="bg-[#261145] rounded-full p-6">
              <IoCheckmarkSharp className="w-[50px] h-[50px] text-[#a571f2]" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-2xl font-[700] text-green-500">
                Works on everyone's machiene
              </p>
              <p className="text-justify leading-relaxed">
                DevBlend ensures seamless compatibility across all machines,
                eliminating the common frustration of "works on my machine"
                issues. With DevBlend, your code runs consistently and reliably,
                regardless of the environment.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-7">
            <div className="bg-[#261145] rounded-full p-6">
              <FaPersonCirclePlus className="w-[50px] h-[50px] text-[#a571f2]" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-2xl font-[700] text-green-500">
                Collaborative 24/7
              </p>
              <p className="text-justify leading-relaxed">
                Our platform fosters continuous teamwork, enabling users to
                collaborate seamlessly around the clock, regardless of their
                location or time zone, for unparalleled productivity and
                efficiency.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-7">
            <div className="bg-[#261145] rounded-full p-6">
              <MdSecurity className="w-[50px] h-[50px] text-[#a571f2]" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-2xl font-[700] text-green-500 ">
                Reliable and secure
              </p>
              <p className="text-justify leading-relaxed">
                Our platform prioritizes reliability and security, ensuring that
                your data and operations are safeguarded against threats. With
                robust measures in place, you can trust in the integrity of our
                services.
              </p>
            </div>
          </div>

          {/* ---- */}
        </div>
      </div>

      {/* next section */}
      <div className="flex flex-col gap-10 items-center py-14">
        <p className="text-4xl font-[700] text-[#04e384]">Still unsure? See for yourself.</p>
        
        <button
          className="text-center transition-transform hover:scale-95 bg-transparent border border-[#a571f2] py-5 px-10 rounded-lg font-[700] text-[20px] shadow-2xl"
          onClick={() => navigate("/setupeditor")}
          disabled={!user}
          style={{ cursor: !user ? 'not-allowed' : 'pointer' }}
        >
          CREATE A NEW PROJECT
        </button>
      </div>
    </section>
  );
};

export default BrowserIDE;
