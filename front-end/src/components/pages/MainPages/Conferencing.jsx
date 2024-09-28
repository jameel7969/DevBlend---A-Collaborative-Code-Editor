import React from 'react'
// import video4 from '../../../assets/video4.png'
import video7 from '../../../assets/video7.jpeg'
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import { GoCodeReview } from "react-icons/go";




const Conferencing = () => {
    return (
        <main className='homeSection font-poppins text-white pt-40'>
            <section className='w-[70%] mx-auto space-y-10'>
                <p className='text-center text-4xl font-[700]'>
                    Seamless Meetings, <span className='text-[#04e384]'>Boundless Collaboration.</span>
                </p>
                <div className="w-[1300px] mx-auto flex items-center justify-center gap-20">
                    <div className="flex-[1] py-40 space-y-8">
                        <p className="font-[600] text-3xl capitalize">Real-Time video collaboration.</p>
                        <div className="font-poppins text-[16px] sm:text-[18px] md:text-xl xl:text-3xl">
                            {/* <p className="text-[#a8834b]">will be the best choice for your next project</p> */}
                        </div>
                        <p className="text-[18px] text-justify text-gray-300">
                            The video conferencing page in DevBlend enables
                            real-time communication and collaboration,
                            featuring video, screen sharing,
                            and integrated collaborative tools.
                        </p>

                    </div>
                    <div className="flex-[1]">
                        <img src={video7} alt="" className='rounded-xl' />
                    </div>
                </div>
            </section>


            {/* 2nd section */}
            <section className="w-[70%] mx-auto">
                <div className="pt-32 space-y-16">
                    <p className="text-center font-[700] text-4xl ">
                        Solutions We are provided
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
                                <GoCodeReview className="h-9 w-9 text-blue-500" />
                                <h3 className="text-[21px] font-[600]">Code Review Integration</h3>
                                <p className="text-[18px] text-gray-300">
                                    Seamless integration for collaborative feedback on code.
                                </p>
                            </div>

                            <div className="bg-[#1C2333]  border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
                                <MdLiveTv
                                    className="h-9 w-9 text-blue-500" />
                                <h3 className="text-[21px] font-[600]">Live Code Demos</h3>
                                <p className="text-[18px]  text-gray-300">
                                    Real-time demonstrations showcasing functional code
                                </p>
                            </div>

                            <div className="bg-[#1C2333] border-2 border-[#004182] rounded-lg cursor-text transition-transform duration-400 transform hover:scale-95 hover:bg-[#181f35] boxShadow  space-y-8 py-16 px-10">
                                <GiDiscussion className="h-9 w-9 text-blue-500" />
                                <h3 className="text-[21px] font-[600]">Enhanced Communication</h3>
                                <p className="text-[18px] text-gray-300">
                                    Web hub for better team collaboration and communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* last section */}
            <section className='w-[70%] mx-auto py-32'>
                <div className=' flex flex-col items-center justify-center gap-4'>
                    <p className='text-[18px] sm:text-xl md:text-2xl lg:text-3xl font-[700] leading-relaxed'>Your Team, <span className='text-[#04e384]'>Connected in Real-Time</span></p>
                    <p className='leading-relaxed text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]'>Engage,  connect, and collaborate instantly with our user-friendly platform.</p>

                    <div className='bg-white text-center text-black w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px] xl:w-[350px] mt-6 p-2 sm:p-3 md:p-3 lg:p-4 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-95 cursor-pointer'>
                        <Link to={'/setupeditor'}
                            className='text-[15px] sm:text-[16px] md:text-[18px] lg:text-xl font-semibold text-center'
                        // onClick={() => navigate("/setupeditor")}
                        >Let's Start a Meeting!
                        </Link>
                    </div>
                </div>
                {/* <div>
                    <img src={video4} alt="" className='flex-[1] h-[500px] w-[400px] hidden lg:flex' />
                </div> */}
            </section>
        </main>
    )
}

export default Conferencing