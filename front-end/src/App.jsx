import "./App.css";
import Navbar from "./components/pages/MainPages/Navbar";
import Home from "./components/pages/MainPages/Home";
import About from "./components/pages/MainPages/About";
import Blog from "./components/pages/MainPages/Blog";
import Contact from "./components/navLinks/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/pages/MainPages/Footer";
import Signup from "./components/pages/MainPages/Signup";
import Editor from "./components/pages/CodeEditor/Editor";
import BrowserIDE from "./components/pages/BoxPages/BrowserIDE";
import CollaborationBox from "./components/pages/BoxPages/CollaborationBox";
import Multilanguage from "./components/pages/BoxPages/Multilanguage";
import Login from "./components/pages/MainPages/Login";
import ForgotPassword from "./components/pages/MainPages/ForgotPassword";
import VerifyCode from "./components/pages/MainPages/VerifyCode";
import SetNewPassword from "./components/pages/MainPages/SetNewPassword";
import SetupEditor from "./components/pages/CodeEditor/SetupEditor";
import Resources from "./components/pages/BoxPages/Resources";
import JoinRoom from "./components/pages/CodeEditor/VideoConferencing/JoinRoom";
import { Toaster } from "react-hot-toast";
import VideoStream from "./components/pages/CodeEditor/VideoConferencing/VideoStream";
import MyScripts from "./components/pages/CodeEditor/Dashboard/MyScripts";
import { useState } from "react";
import SnippetContext from "./Context/SnippetContext";
import Teams from "./components/pages/MainPages/Teams";
import Conferencing from "./components/pages/MainPages/Conferencing";

const App = () => {

  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [trigger, setTrigger] = useState(false);





  return (

    <div className="">

      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            }
          }
        }}
      ></Toaster>

        <SnippetContext.Provider value={{ selectedSnippet, setSelectedSnippet, trigger, setTrigger }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/verifycode" element={<VerifyCode />} />
              <Route path="/setnewpassword" element={<SetNewPassword />} />
              <Route path="/editor/*" element={<Editor />} />
              <Route path="/browseride" element={<BrowserIDE />} />
              <Route path="/collaboration" element={<CollaborationBox />} />
              <Route path="/multilanguage" element={<Multilanguage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/setupeditor" element={<SetupEditor />} />
              <Route path="/joinroom" element={<JoinRoom />} />
              <Route path="/videostream" element={<VideoStream />} />
              <Route path="/myscripts" element={<MyScripts />} />
              <Route path="/Teams" element={<Teams />} />
              <Route path="/Conferencing" element={<Conferencing />} />
            </Routes>
            <Footer />
          </Router>
        </SnippetContext.Provider>
    </div>
  );
};

export default App;
