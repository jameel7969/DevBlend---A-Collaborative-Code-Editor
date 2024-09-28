// import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const Notifications = () => {
  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate(
      "main",
      {
        width: open ? 400 : 0,
        // height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "easeIn",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "div",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.3,
        delay: open ? staggerList : 0,
      }
    );
  }, []);


  return (
    <div className="App" ref={scope}>
      <div className="z-10 absolute top-[100%] right-[7%] text-white bg-[#101e37] font-poppins rounded-lg">
        <div className="py-3 px-7">
          <h1 className="font-bold text-[18px]">Notifications</h1>
          {/* <div className="flex items-center gap-2 border-white border-[1px] py-1 px-3 cursor-pointer rounded-lg">
            <p className="">View all</p>
            <FaArrowRight className="h-4 w-4" />
          </div> */}
        </div>

        <hr />


        <div className="flex py-3 px-7 gap-2">
          <button className="flex-[1] bg-gray-600 rounded-lg py-2 font-bold text-white hover:bg-gray-800 duration-500 cursor-pointer">
            Unread
          </button>
          <button className="flex-[1] bg-blue-500 text-white rounded-lg py-2 font-bold hover:bg-blue-800 duration-500 cursor-pointer">
            Read
          </button>
        </div>


        <hr />

        <main className="flex items-center justify-between py-5 cursor-pointer">
          <motion.div className="flex">
            <div className="text-white px-7">
              <p className="text-[11px] ">
                <strong className="text-blue-400 text-[13px] underline ">
                  johndoe83
                </strong>{" "}
                joined your DevBlend via invite link.
              </p>
              <p className="mt-2 text-[11px]">1 week ago</p>
            </div>
            <IoIosArrowForward className="text-white h-5 w-5 ml-9" />
          </motion.div>
        </main>

        <hr />

        <main className="flex items-center justify-between py-5 cursor-pointer">
          <motion.div className="flex">
            <div className="text-white px-7">
              <p className="text-[11px] ">
                <strong className="text-blue-400 text-[13px] underline">
                  johndoe83
                </strong>{" "}
                joined your DevBlend via invite link.
              </p>
              <p className="mt-2 text-[11px]">1 week ago</p>
            </div>
            <IoIosArrowForward className="text-white h-5 w-5 ml-9 " />
          </motion.div>
        </main>

        <hr />

        <main className="flex items-center justify-between py-5 cursor-pointer">
          <motion.div className="flex">
            <div className="text-white px-7">
              <p className="text-[11px] ">
                <strong className="text-blue-400 text-[13px] underline">
                  johndoe83
                </strong>{" "}
                joined your DevBlend via invite link.
              </p>
              <p className="mt-2 text-[11px]">1 week ago</p>
            </div>
            <IoIosArrowForward className="text-white h-5 w-5 ml-9 cursor-pointer" />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;

{
  /* <div className="">
          <p className="h-px bg-gray-400 w-full"></p>
        </div> */
}
