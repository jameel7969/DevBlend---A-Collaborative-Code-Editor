import React from 'react'
import codingAvatar from '../../../assets/coding.jpg'
import htmlSymbol from '../../../assets/htmlSymbol.png'
import cssSymbol from '../../../assets/cssSymbol.png'
import jsSymbol from '../../../assets/jsSymbol.png'
import compiler from '../../../assets/compiler.png'
import { FaListCheck } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { useAuthContext } from '../../../Hooks/UseAuthContext'
import { useNavigate } from 'react-router-dom'



const Resources = () => {

  const { user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <main className='homeSection text-white min-h-screen py-32 font-poppins'>

      <section className='flex items-center justify-between  w-[70%] mx-auto pt-16'>

        <div className='flex flex-col gap-4'>
          <p className='text-4xl font-bold'>Learn Programming</p>
          <p className='text-4xl font-bold'>for Free</p>
          <p className='text-[16px] mt-6 w-[600px] leading-9'>
            Learn to program with our beginner frienldy documents and examples.
            <span className='text-green-500 hover:underline cursor-pointer'> Read tutorials,</span>
            <span className='text-green-500 hover:underline cursor-pointer'> Try examples,</span>
            <span className='text-green-500 hover:underline cursor-pointer'> Write code </span>and learn to program
          </p>

          <div className='flex flex-col gap-5 mt-10'>
            <p className='text-xl font-semibold'>Get the latest tutorials and updates</p>
            <div className='flex items-center'>
              <input type="text" name="" id="" className='p-5 w-[350px] bg-transparent border border-zinc-500 text-white outline-none rounded-tl-lg rounded-bl-lg' placeholder='Enter your email address' />
              <div className='bg-green-500 p-5 w-[150px] text-center rounded-tr-lg rounded-br-lg hover:bg-green-600 duration-500'>
                <button className=''>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <img src={codingAvatar} alt="" className='flex-[1] rounded-[20%] h-[500px] w-[600px]' />
        </div>
      </section>

      <section className='flex flex-col gap-10 items-center justify-between w-[70%] mx-auto mt-36'>
        <div className='flex flex-col gap-4'>
          <p className='text-[16px] text-center text-zinc-300'>Start learning the best programming languages.</p>
          <p className='text-2xl font-bold'>Choose what to learn, what matters the most.</p>
          {/* <p className='text-xl font-bold'>what matters the most</p> */}
        </div>

        <div className='flex gap-6'>
          <div className='flex items-center gap-2 bg-white text-black w-[350px] p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 cursor-pointer'>
            <img src={htmlSymbol} alt="" className='h-[30px] w-[30px]' />
            <p className='text-xl font-semibold'>Structure with HTML</p>
          </div>

          <div className='flex items-center gap-2 bg-white text-black w-[350px] p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 cursor-pointer'>
            <img src={cssSymbol} alt="" className='h-[30px] w-[30px]' />
            <p className='text-xl font-semibold'>Style with CSS</p>
          </div>

          <div className='flex items-center gap-2 bg-white text-black w-[350px] p-6 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-105 cursor-pointer'>
            <img src={jsSymbol} alt="" className='h-[30px] w-[30px]' />
            <p className='text-xl font-semibold'>Interactivity with JS</p>
          </div>
        </div>
      </section>

      <section className='w-[70%] mx-auto mt-32'>
        <p className='text-3xl font-bold text-center'>Why DevBlend?</p>

        <div className='flex gap-10 mt-28'>

          <div className="flex flex-col gap-8 w-[1200px] border border-purple-800 shadow-2xl shadow-purple-900 p-10 cursor-pointer rounded-2xl">
            <FaListCheck className="w-[80px] h-[80px]" />
            <p className="text-2xl font-[700] text-[#04e384]">
              Programming made easy
            </p>
            <p className="text-justify leading-8">
              We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-[1200px] border border-purple-800 shadow-2xl shadow-purple-900 p-10 cursor-pointer rounded-2xl">
            <GiStarsStack className="w-[80px] h-[80px]" />
            <p className="text-2xl font-[700] text-[#04e384]">
              Content You Can Trust
            </p>
            <p className="text-justify leading-8">
              A dedicated group of experts continually working to create programming resources that is accurate and easier to understand.
            </p>
          </div>

          <div className="flex flex-col gap-8  w-[1200px] border border-purple-800 shadow-2xl shadow-purple-900 p-10 cursor-pointer rounded-2xl">
            <FaCode className="w-[80px] h-[80px]" />
            <p className="text-2xl font-[700] text-[#04e384]">
              Learn by Doing
            </p>
            <p className="text-justify leading-8">
              The only way to learn to program is by writing code. We provide a lot of complete examples so that run and edit code on your own.
            </p>
          </div>

        </div>




      </section>

      <section className='w-[70%] mx-auto flex items-center justify-between mt-40 gap-20'>

        <div>
          <img src={compiler} alt="" className='h-[600px] w-[800px]' />
        </div>

        <div className='flex flex-col gap-6 w-[500px]'>
          <p className='text-3xl font-bold text-green-500 leading-relaxed'>Practice with our online compilers</p>
          <p className='leading-relaxed'>We believe coding should be accessible to all. So we made our own compilers for web. And it's free!</p>

          <div className='bg-white text-center text-black w-[350px] p-4 rounded-[5px] shadow-2xl shadow-zinc-500 transition-transform hover:scale-95 cursor-pointer'>
            <button
              className='text-xl font-semibold text-center'
              onClick={() => navigate("/setupeditor")}
              disabled={!user}
              style={{ cursor: !user ? 'not-allowed' : 'pointer' }}
            >Start Coding with us!</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resources
