import { useState, useEffect } from "react";
import logo from "../../../assets/logo1.png";
import profile from "../../../assets/profile.png";
import { motion } from "framer-motion";
import { IoMdNotifications } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

import Notifications from "./Notifications";
import { Link, useLocation } from "react-router-dom";
// import NavDown from "../../animations/NavDown";
import { useAuthContext } from '../../../Hooks/UseAuthContext'
import { useLogout } from "../../../Hooks/useLogoutHook";
import toast from "react-hot-toast";
import Profile from "./Profile";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [visible, setVisible] = useState(true);
  const [profileComponentVisible, setProfileComponentVisible] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  const location = useLocation();
  const { user } = useAuthContext()
  const navigate = useNavigate()
  // Hide Navbar in Signup and Login pages
  const hideNavbar =
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/forgotpassword") ||
    location.pathname.startsWith("/verifycode") ||
    location.pathname.startsWith("/setnewpassword") ||
    location.pathname.startsWith("/editor") ||
    location.pathname.startsWith("/setupeditor") ||
    location.pathname.startsWith("/livepreview");

  if (hideNavbar) {
    return null;
  }

  //handle notification button
  const handleNotification = () => {
    setNotification(!notification);
  };
  const handleHideNotification = () => {
    setNotification(false);
  };


  const hanldeProfileComponentVisible = () => {
    setProfileComponentVisible(!profileComponentVisible);
  };


  return (
    // <NavDown>
    <section
      className={`w-full fixed top-0 z-10 bg-[#03031c] text-white font-poppins py-[4px] ${visible ? "" : "hidden"
        }`}
    >
      <div className="flex justify-between items-center font-poppins px-4">
        {/* LeftSection */}
        <div className="flex items-center" onClick={() => navigate('/')}>
          <img src={logo} lg:alt="Logo appears here!" className="w-[70px]" />
          <p className="text-3xl font-Oswald font-bold cursor-pointer">
            DevBlend
          </p>
        </div>

        {/* center section */}
        <nav className="flex gap-10">
          <Link to="/" className="text-xl hover:underline ">
            Home
          </Link>
          <Link to="/about" className="text-xl hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-xl hover:underline">
            Contact
          </Link>
          <Link to="/blog" className="text-xl hover:underline">
            Blog
          </Link>
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">

          {/* {user && (
            notification ? (
              <IoMdNotificationsOff
                className="cursor-pointer"
                onClick={handleHideNotification}
                title="Notifications"
                style={{ fontSize: "2rem" }}
              />
            ) : (
              <IoMdNotifications
                className="cursor-pointer"
                onClick={handleNotification}
                // title="Notifications"
                style={{ fontSize: "2rem" }}
              />
            )
          )} */}


          {
            !user &&
            (
              <>
                {/* <Link
                  to={'/login'}
                  href="#"
                  className="text-xl p-3 font-semibold underline cursor-pointer"
                >
                  Sign In
                </Link> */}

                <motion.div
                  whileHover={{ scale: 0.7 }}
                  className="flex items-center gap-2 px-4 py-2 text-white bg-transparent border border-[#a571f2] duration-500 cursor-pointer rounded-lg shadow-2xl shadow-purple-800"
                  onClick={() => navigate('/signup')}>
                  <button className="text-xl font-semibold ">
                    Get Started
                  </button>

                  <FaArrowRight className="w-5" />
                </motion.div>
              </>
            )
          }

          <div>
            {user && (
              <>
                <motion.img
                  whileTap={{ scale: 0.9 }}
                  src={profile}
                  alt="Profile"
                  className="w-10 cursor-pointer"
                  title="Profile"
                  onClick={hanldeProfileComponentVisible}
                />
              </>
            )}
          </div>


        </div>

      </div>

      {/* handling the notifications */}
      {/* {notification && <Notifications />} */}
      {/* handling the profile component */}
      {profileComponentVisible && <Profile />}

    </section>
    // {/* </NavDown> */}
  );
};

  export default Navbar;
