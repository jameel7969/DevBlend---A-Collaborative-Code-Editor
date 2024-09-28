import Hero from "../HomePage/Hero";
import { useScroll, motion } from "framer-motion";
import Navbar from "./Navbar";



const Home = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  return (
    <div>
      {/* <Navbar/> */}
      <motion.div
        className="progressBar z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
     
    </div>
  );
};

export default Home;
