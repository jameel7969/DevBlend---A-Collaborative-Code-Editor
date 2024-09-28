// importing images from the assets folder
import logo from "../../../assets/logo1.png";
// importing react icons from react
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdAddToHomeScreen } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/forgotpassword") ||
    location.pathname.startsWith("/verifycode") ||
    location.pathname.startsWith("/setnewpassword") ||
    location.pathname.startsWith("/editor") ||
    location.pathname.startsWith("/setupeditor") ||
    location.pathname.startsWith("/livepreview");
  if (hideFooter) {
    return null;
  }

  return (
    <section className="relative w-full font-Poppins text-white bg-[#0a101c]  py-[30px]">
      <div className="w-[80%] flex mx-auto justify-between">
        {/* 1st div */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Logo of the website appears here"
            className="h-[300px] w-[300px] cursor-pointer"
          />
        </div>

        {/* 2nd div about the website- navLinks*/}
        <div className="flex flex-col gap-8 p-14">
          <p className="text-[20px] font-bold ">SITEMAP</p>
          <nav className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <RiHomeOfficeLine className="text-blue-400" />
              <Link to={'/'}>Home</Link>
            </div>
            <div className="flex items-center gap-2">
              <MdAddToHomeScreen className="text-blue-400" />
              <Link to={'/About'}>About</Link>
            </div>
            <div className="flex items-center gap-2">
              <FaPeoplePulling className="text-blue-400" />
              <a href="#">Collaboration</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="text-blue-400" />
              <a href="#">Editor</a>
            </div>
            {/* <div className="flex items-center gap-2">
              <SiGoogledocs className="text-blue-400" />
              <a href="#">Docs</a>
            </div> */}
          </nav>
        </div>
        {/* 3rd div */}
        <div className="flex flex-col gap-8 p-14">
          <p className="text-[20px] font-bold ">SOCIALS</p>
          <nav className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <FaFacebook className="text-blue-400" />
              <a href="#">Facebook</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-blue-400" />
              <a href="#">Linkedin</a>
            </div>
            <div className="flex items-center gap-2">
              <FaSquareInstagram className="text-blue-400" />
              <a href="#">Instagram</a>
            </div>
            <div className="flex items-center gap-2">
              <FaTwitterSquare className="text-blue-400" />
              <a href="#">Twitter</a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col gap-8 p-14">
          <p className="text-[20px] font-bold ">Contact</p>
          <nav className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <a href="#">Phone</a>
            </div>{" "}
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-blue-400" />
              <a href="#">Whatsapp</a>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-blue-400" />
              <a href="#">xyz@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MdEventAvailable className="text-blue-400" />
              <a href="#">Availability 24/7</a>
            </div>
          </nav>
        </div>
        {/* 4rth div */}
        <div className="flex flex-col gap-10 p-14">
          <p className="text-[20px] font-bold ">Head Office</p>
          <div className="">
            <p>Arid Barani Institue of Sciences Burewala Campus.</p>
            {/* <p> District Vehari Tehsil Burewala</p> */}
          </div>
          {/* <div className="flex items-center border-b">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-full outline-none bg-transparent py-3"
            />
            <MdOutlineMailOutline className="h-8 w-8 text-blue-400" />
          </div> */}
          <p className="mt-3">© 2024 Arid Media. All rights reserved.</p>
        </div>
      </div>
      {/* Terms & services */}
      <div className="flex items-center justify-center gap-10 mt-5">
        <ul className="list-disc underline">
          <li>
            <a href="#" className="">
              Terms & Service
            </a>
          </li>
        </ul>
        <ul className="list-disc underline">
          <li>
            <a href="#" className="">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
