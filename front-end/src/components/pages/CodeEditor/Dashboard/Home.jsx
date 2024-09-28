import React from 'react'
import code from '../../../../assets/multicode1.png'
import htmllogo from '../../../../assets/htmllogo.png'
import csslogo from '../../../../assets/csslogo.png'
import jslogo from '../../../../assets/jslogo.png'
import { MdOutlinePreview } from "react-icons/md";
import { FaAffiliatetheme } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { LuPlus } from 'react-icons/lu'





const Home = () => {

  const data = [
    {
      id: 1,
      icon: <MdOutlinePreview />,
      name: 'Live Preview',
      description: 'Experience real-time changes with our dynamic live preview feature, ensuring seamless updates as you work.'
    },
    {
      id: 2,
      icon: <FaAffiliatetheme />,
      name: 'Themes',
      description: 'Customize your coding environment with a variety of themes, allowing you to personalize your workspace according to your preferences.'
    },
    {
      id: 3,
      icon: <BsMicrosoftTeams />,
      name: 'Live Collaboration',
      description: 'Team up with your fellow developers and collaborate effectively on your projects using pair programming sessions.'
    },
    {
      id: 4,
      icon: <MdIncompleteCircle />,
      name: 'Autocomplete',
      description: 'The autocomplete feature lets you view and insert possible completions to speed up your coding.'
    },
    {
      id: 5,
      icon: <MdFormatAlignJustify />,
      name: 'Code Formatting',
      description: 'Use an opinionated code formatter to automatically make your code more readable and consistent.'
    },
    {
      id: 6,
      icon: <VscListSelection />,
      name: 'Multiline selection',
      description: 'Enable multi-line selection to edit multiple lines of code at same time, during coding sessions.'
    }
  ]



  return (
    <main className='p-20 w-full space-y-32 font-poppins '>

      <section className='w-[1300px] mx-auto flex items-center justify-between'>
        <div className='flex flex-col gap-5 mt-20'>
          <p className='text-4xl font-bold'>An editor</p>
          <p className='text-4xl font-bold'>that helps you </p>
          <p className='text-4xl font-bold'>effeciently write clean code.</p>
        </div>
        <img src={code} alt="" />
      </section>

      <section className='w-[1300px] mx-auto'>

        <p className='text-3xl font-bold tex-center text-[#04e384] capitalize'>Browse our array of Supported languages </p>

        <div className='flex items-center justify-between'>

          <div className='mt-20 w-fit py-4 px-8 cursor-pointer hover:bg-[#252e43] hover:rounded-2xl hover:shadow-2xl transition duration-1000'>
            <img src={htmllogo} alt="hi" className='w-[250px] h-[250px]' />
            <p className='text-center text-xl font-bold'>HTML 5</p>
          </div>

          <div className='mt-20 w-fit py-4 px-8 cursor-pointer hover:bg-[#252e43] hover:rounded-2xl hover:shadow-2xl transition duration-1000'>
            <img src={csslogo} alt="hi" className='w-[250px] h-[250px]' />
            <p className='text-center text-xl font-bold'>CSS 3</p>
          </div>

          <div className='mt-20 w-fit py-4 px-8 cursor-pointer hover:bg-[#252e43] hover:rounded-2xl hover:shadow-2xl transition duration-1000'>
            <img src={jslogo} alt="hi" className='w-[250px] h-[250px]' />
            <p className='text-center text-xl font-bold'>JavaScript</p>
          </div>

        </div>

        {/* <div className='flex items-center justify-center mt-20'>
          <div className='flex items-center gap-2 bg-transparent w-fit py-6 px-8 border border-[#a571f2] rounded-lg transition-transform hover:scale-95 cursor-pointer'>
            <LuPlus />
            <p className='text-[16px] font-semibold'>Create New Script</p>
          </div>

        </div> */}

      </section>

      <section className='space-y-20'>


        <div className='flex flex-col gap-3'>
          <p className='text-2xl text-center  font-semibold'>Why DevBlend?</p>
          <p className='text-4xl text-center text-[#04e384] font-bold'>What are the benefits of DevBlend?</p>
        </div>

        <div className='grid grid-cols-3 gap-8'>
          {
            data && data.map((item, index) => (
              <div className='flex flex-col gap-4 bg-[#252e43] p-10 rounded-2xl cursor-pointer hover:bg-[#1a2131]' key={index}>
                <div className='text-[#e051a9]' style={{ fontSize: '3rem' }}>{item.icon}</div>
                <p className='text-2xl font-semibold text-[#e051a9]'>{item.name}</p>
                <p className='text-[16px] text-justify leading-relaxed'>{item.description}</p>
              </div>
            ))
          }
        </div>
        <p className='text-end'>copyright 2024 © <a className='underline text-green-500' href='#'>devblend.com</a></p>
      </section>

    </main>
  )
}

export default Home

