import React, { useEffect, useState } from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
import logo1 from '../../../assets/logo1.png'
import profile from '../../../assets/profile.png'
import Notifications from '../MainPages/Notifications';
import { IoMdNotifications } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { MdOutlineFolderShared } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { MdJoinRight } from "react-icons/md";
import Login from '../MainPages/Login';
import Signup from '../MainPages/Signup';
import Home from './Dashboard/Home';
import Challenges from './Dashboard/Challenges';
import MyActivity from './Dashboard/MyActivity';
import MyScripts from './Dashboard/MyScripts';
import Team from './Dashboard/Team';
import CreateScript from './Dashboard/CreateScript';
import { Link } from 'react-router-dom';



const SetupEditor = () => {

  const [notification, setNotification] = useState(false);
  const [createScriptVisible, setCreateScriptVisible] = useState(false);

  const handleCreateScript = () => {
    setCreateScriptVisible(true);
  }

  //handle notification button
  const handleNotification = () => {
    setNotification(!notification);
  };
  const handleHideNotification = () => {
    setNotification(false);
  };


  const [data, setData] = useState([
    {
      id: 1,
      name: 'Home',
      icon: <MdHome />,
      isActive: true
    },
    {
      id: 2,
      name: 'My Scripts',
      icon: <MdOutlineFolderShared />,
      isActive: false
    }
  ])

  const changeActive = (id) => {
    setData(
      data.map(item => item.id === id ? { ...item, isActive: true } : { ...item, isActive: false })
    );
  };





  return (
    <>
      <main className={`min-h-screen font-poppins bg-[#0e1525] text-white overflow-hidden ${createScriptVisible ? 'blurIn' : 'blurOut'}`}>

        <section className='flex items-center justify-between px-8 py-3 border-zinc-500 border-b-[1px] fixed top-0 left-0 w-full bg-[#0e1525] z-10'>
          <div className='flex items-center gap-1'>
            <img src={logo1} alt="" className='w-[60px]' />
            <Link
              to={'/'}
              className='text-2xl font-bold cursor-pointer'>DevBlend</Link>
          </div>

          <div className='flex items-center gap-4 bg-[#252e43] py-3 px-5 rounded-lg'>
            <IoSearch />
            <input type="text" placeholder='Search for projects' className='bg-transparent w-[700px] text-[14px] outline-none' />

          </div>

          <div className='flex items-center gap-5'>
            <LuPlus className="h-[20px] w-[20px] cursor-pointer" onClick={handleCreateScript} />

            {/* {notification ? (
              <IoMdNotificationsOff
                className="cursor-pointer w-[25px] h-[25px]"
                onClick={handleHideNotification}
                title="Notifications"
              />
            ) : (
              <IoMdNotifications
                className="cursor-pointer w-[25px] h-[25px]"
                onClick={handleNotification}
                title="Notifications"
              />
            )} */}


            {/* <div>
              <motion.img
                whileTap={{ scale: 0.9 }}
                src={profile}
                alt=""
                className="w-[25px] cursor-pointer"
                title="Profile"
              />
            </div> */}
          </div>

        </section>


        {/* next section */}
        <section className='flex pl-[calc(100vw/6)]'>
          <div className='flex-[1.2] py-28 px-8 border-zinc-500 border-r-[1px] space-y-8 fixed top-0 left-0 h-screen overflow-y-auto'>
            <div className='flex items-center gap-3 w-fit bg-[#252e43] py-3 px-5 rounded-lg cursor-pointer' onClick={handleCreateScript}>
              <LuPlus />
              <p className='capitalize text-[14px] font-semibold ' >Create new script</p>
            </div>


            <div className='flex flex-col gap-3'>
              {data && data.map(item => (
                <div key={item.id} className={`flex items-center py-2 px-5 w-fit justify-center  rounded-lg gap-3 cursor-pointer ${item.isActive ? 'bg-[252e43] text-white' : ''} `} onClick={() => changeActive(item.id)}>
                  <div className='w-[20px] h-[20px]'>
                    {item.icon}
                  </div>
                  <p> {item.name}</p>
                </div>
              ))}

            </div>

            <div className='flex items-center gap-3 absolute bottom-3 p-4 rounded-lg border border-zinc-500 cursor-pointer'>
              <MdJoinRight className='text-xl text-green-500' />
              <p className='text-[16px] font-bold'>Join DevBlend</p>
            </div>
          </div>

          <div className='flex-[9]'>
            {data[0].isActive && <Home />}
            {data[1].isActive && <MyScripts />}
            {/* {data[2].isActive && <MyActivity/>} */}
            {/* {data[2].isActive && <Team />} */}
            {/* {data[3].isActive && <Challenges />} */}
          </div>
        </section>

      </main>

      {createScriptVisible && <CreateScript setCreateScriptVisible={setCreateScriptVisible} />}
    </>
  )
}

export default SetupEditor
