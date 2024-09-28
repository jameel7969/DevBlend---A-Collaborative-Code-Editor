import React from 'react'

import blogpost from '../../../assets/Blogs.jpeg'
import smith from '../../../assets/smith.jpg'
// import emily from '../../../assets/emily.jpg'
import david from '../../../assets/david.jpg'
import henry from '../../../assets/henry.jpg'
import sarah from '../../../assets/sarah.jpg'
import sophia from '../../../assets/sophia.jpg'
// import jessica from '../../../assets/jessica.jpg'
import max from '../../../assets/max.jpg'
import jorge from '../../../assets/jorge.jpg'

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


const Blog = () => {


  return (
    <main className='font-poppins homeSection text-white'>

      <section className='pt-40 space-y-20'>
        <div>
          <p className='text-center text-5xl font-[600]'>
            Innovation Unleashed
          </p>
        </div>
        <div className='w-[70%] mx-auto'>
          <div className='flex items-center'>
            <div className='flex-[1] flex flex-col gap-[9px] text-white text-justify leading-none '>
              <p className="text-2xl font-[600]">Elevate your coding experience with DevBlend: </p>
              <p className="text-[22px] ">Where collaboration fuels innovation and every</p>
              <p className="text-[22px] ">line of code sparks seamless teamwork</p>
            </div>
            <div className='flex-1'>
              <img src={blogpost} alt='image goes here' className='rounded-full' />
            </div>
          </div>
        </div>
      </section>


      {/* Reviews section */}
      <section className='pt-40'>
        <div className=''>
          <div className=''>
            <h1 className='font-[600] text-center capitalize text-5xl' >Trending Reviews</h1>
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
              className="py-20 max-w-[90%]"
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
                <div className="w-[520px] h-[640px] mx-auto bg-transparent p-8 text-black rounded-3xl bg-white cursor-pointer ">
                  <div className="flex flex-col gap-3">
                    <img src={jorge} alt="" className='w-[470px] h-[350px] rounded-xl' />
                    <p className="text-3xl text-center font-[600] text-[#985df2]">Jorge</p>
                    <p className="text-justify ">
                      DevBlend has completely transformed how our team collaborates on projects. Its real-time editing and seamless communication features have significantly improved our productivity.
                    </p>
                    <div className='flex items-center justify-center mt-3'>
                      <button className='bg-slate-600 hover:bg-slate-700 text-teal-50 text-lg px-8 py-2 rounded-full'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[520px] h-[640px] mx-auto bg-transparent p-8 text-black rounded-3xl bg-white cursor-pointer">
                  <div className="flex flex-col gap-3">
                    <img src={sophia} alt="" className='w-[470px] h-[350px] rounded-xl' />
                    <p className="text-3xl text-center font-[600] text-[#985df2]">Sophia</p>
                    <p className="text-justify ">
                      I've tried many code editors, but none compare to DevBlend. Video conferencing integration is a game changer for remote teams, and the customization options make it a pleasure to use.
                    </p>
                    <div className='flex items-center justify-center mt-8'>
                      <button className='bg-slate-600 hover:bg-slate-700 text-teal-50 text-lg px-8 py-2 rounded-full'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[520px] h-[640px] mx-auto bg-transparent p-8 text-black rounded-3xl bg-white cursor-pointer">
                  <div className="flex flex-col gap-3">
                    <img src={sarah} alt="" className='w-[470px] h-[350px] rounded-xl' />
                    <p className="text-3xl text-center font-[600] text-[#985df2]">Sarah</p>
                    <p className="text-justify">
                      With DevBlend, real-time editing and intuitive features make coding collaborations a pleasure, leading to faster project completion and higher-quality code, and the customization options make it a pleasure to use.
                    </p>
                    <div className='flex items-center justify-center mt-3'>
                      <button className='bg-slate-600 hover:bg-slate-700 text-teal-50 text-lg px-8 py-2 rounded-full'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[520px] h-[640px] mx-auto bg-transparent p-8 text-black rounded-3xl bg-white cursor-pointer">
                  <div className="flex flex-col gap-3">
                    <img src={david} alt="" className='w-[470px] h-[350px] rounded-xl' />
                    <p className="text-3xl text-center font-[600] text-[#985df2]">David</p>
                    <p className="text-justify ">
                      DevBlend is the backbone of our development process, providing us with the tools we need to collaborate effectively and deliver exceptional resultsenabling us to achieve more in less time.
                    </p>
                    <div className='flex items-center justify-center mt-3'>
                      <button className='bg-slate-600 hover:bg-slate-700 text-teal-50 text-lg px-8 py-2 rounded-full'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[520px] h-[640px] mx-auto bg-transparent p-8 text-black rounded-3xl bg-white cursor-pointer">
                  <div className="flex flex-col gap-3">
                    <img src={max} alt="" className='w-[470px] h-[350px] rounded-xl' />
                    <p className="text-3xl text-center font-[600] text-[#985df2]">Emily</p>
                    <p className="text-justify ">
                      Using DevBlend has simplified our development process, enabling us to iterate quickly and work together seamlessly, resulting in faster project delivery and happier clients.
                    </p>
                    <div className='flex items-center justify-center mt-8'>
                      <button className='bg-slate-600 hover:bg-slate-700 text-teal-50 text-lg px-8 py-2 rounded-full'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </section>



      {/* 3rd section */}
      <section className='w-[60%] mx-auto py-20'>
        <div className=''>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-4xl font-[700]'>News Letter</h2>
            <div className='text-justify text-white text-[18px]'>
              <p className='text-white font-poppins'>
                "Stay ahead of the curve with the latest updates and exclusive insights
              </p>
              <p>
                Subscribe to our newsletter for the freshest news and tips from the DevBlend team!"
              </p>
            </div>
            <p className='text-3xl font-[600]'>Stay Connected for our latest Blogs</p>
            <div className='flex items-center pt-2'>
              <input type="text" name="" id="" className='p-2 sm:p-3 md:p-4 lg:p-5 w-[200px] sm:w-[280px] md:w-[350px] bg-transparent border border-zinc-500 text-white outline-none rounded-tl-lg rounded-bl-lg' placeholder='Enter your email address' />
              <div className='bg-green-500 p-[19px] w-[150px] text-center rounded-tr-lg rounded-br-lg hover:bg-green-600 duration-500'>
                <button className='text-lg font-[600]'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;