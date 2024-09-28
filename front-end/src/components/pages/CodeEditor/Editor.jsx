import React, { useContext, useEffect, useRef, useState } from 'react'
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { color } from '@uiw/codemirror-extensions-color';
import {
  abyss,
  abyssInit,
  // androidStudio,
  andromeda,
  // atomOne,
  aura,
  bbedit,
  basicLight,
  basicDark,
  bespin,
  copilot,
  consoleLight,
  consoleDark,
  dracula,
  darcula,
  duotoneLight,
  duotoneDark,
  eclipse,
  githubLight,
  githubDark,
  gruvboxDark,
  gruvboxLight,
  materialLight,
  materialDark,
  monokai,
  monokaiDimmed,
  // kimbieDark,
  noctisLilac,
  nord,
  okaidia,
  quietlight,
  red,
  solarizedLight,
  solarizedDark,
  sublime,
  tokyoNight,
  tokyoNightStorm,
  tokyoNightDay,
  tomorrowNightBlue,
  whiteLight,
  whiteDark,
  // vsCode,
  xcodeLight,
  xcodeDark,
} from '@uiw/codemirror-themes-all';

import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
// import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
// import * as themes from '@uiw/codemirror-themes-all';


import logo from '../../../assets/logo1.png'
import { IoSearch } from "react-icons/io5";
import { MdLaunch } from "react-icons/md";
import { LuFolderTree } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SlArrowRight } from 'react-icons/sl';
import { RxOpenInNewWindow } from "react-icons/rx";

import htmlSymbol from '../../../assets/htmlSymbol.png'
import cssSymbol from '../../../assets/cssSymbol.png'
import jsSymbol from '../../../assets/jsSymbol.png'
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { VscScreenFull } from 'react-icons/vsc';
import { BiExitFullscreen } from 'react-icons/bi';
import { MdOutlineEmergencyShare } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";



import PermitVideoConferencing from './VideoConferencing/PermitVideoConferencing'
import JoinRoom from './VideoConferencing/JoinRoom';
import PermitCollaboration from './Collaboration/PermitCollaboration';
import { FaArrowRightFromBracket, FaPersonCirclePlus } from "react-icons/fa6";
import Participants from './Collaboration/Participants';

import {
  useNavigate,
  useLocation,
  Navigate,
  useParams,
  Link,
} from "react-router-dom";
import { toast } from "react-hot-toast";
import { initSocket } from '../../../Socket';
import { ACTIONS } from '../../../Actions';
import { useGetCodeSnippetHook } from '../../../Hooks/useGetCodeSnippet';
import { useSaveCodeSnippetHook } from '../../../Hooks/useSaveCodeSnippet';
import { useAuthContext } from '../../../Hooks/UseAuthContext';
import SnippetContext from '../../../Context/SnippetContext';
import { useUpdateCodeSnippetHook } from '../../../Hooks/useUpdateCodeSnippet';






const Editor = () => {

  const [timeLine, setTimeLine] = useState(false);
  const [fileExplorer, setFileExplorer] = useState(true);
  const [selectedHTMLFile, setSelectedHTMLFile] = useState(null);
  const [selectedCSSFile, setSelectedCSSFile] = useState(null);
  const [selectedJSFile, setSelectedJSFile] = useState(null);
  const [livePreview, setLivePreview] = useState(false);
  const [editorWidth, setEditorWidth] = useState('83.8vw');
  const [screenMode, setScreenMode] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [permitvideo, setPermitVideo] = useState(false);
  const [permitCollaboration, setPermitCollaboration] = useState(false);
  const [participants, setParticipants] = useState(false);
  const [settingComponent, setSettingComponent] = useState(false);
  const [themeList, setThemeList] = useState(false);
  const [editorTheme, setEditorTheme] = useState(githubDark); // Default theme
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [output, setOutput] = useState("")
  const [times, setTimes] = useState([]);
  const [clients, setClients] = useState([]);
  const [isVisible, setIsVisible] = useState(true);


  const { saveCodeSnippet, isLoading, error } = useSaveCodeSnippetHook()
  const { user } = useAuthContext();
  const { selectedSnippet, trigger, setTrigger } = useContext(SnippetContext);
  const { updateCodeSnippet } = useUpdateCodeSnippetHook()

  useEffect(() => {
    if (selectedSnippet && trigger) {

      // localStorage.setItem('selectedSnippet', JSON.stringify(selectedSnippet));

      // console.log('Selected Snippet:', selectedSnippet.html, selectedSnippet.css, selectedSnippet.js);
      setSelectedHTMLFile(true)
      setHtml(selectedSnippet.html);
      setCss(selectedSnippet.css);
      setJs(selectedSnippet.js);
    }

    else {
      // localStorage.removeItem('selectedSnippet');
    }
  }, [selectedSnippet, trigger]);





  const sectionRef = useRef(null);
  const Location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();



  const title = Location.state?.title || 'DevBlend'
  const description = Location.state?.description || 'DevBlend is a platform that allows you to collaborate and code on the same page.'



  const socketRef = useRef(null);

  const pathSegments = Location.pathname.split('/');
  const RoomID = pathSegments[pathSegments.length - 1];

  const data = [
    { "id": 1, "name": "Abcdef", theme: abyss },
    { "id": 2, "name": "Abyss", theme: abyssInit },
    // { "id": 3, "name": "Android Studio", theme: androidStudio },
    { "id": 4, "name": "Andromeda", theme: andromeda },
    // { "id": 5, "name": "Atom One", theme: atomOne },
    { "id": 6, "name": "Aura", theme: aura },
    { "id": 7, "name": "Bbedit", theme: bbedit },
    { "id": 8, "name": "Basic Light", theme: basicLight },
    { "id": 9, "name": "Basic Dark", theme: basicDark },
    { "id": 10, "name": "Bespin", theme: bespin },
    { "id": 11, "name": "Copilot", theme: copilot },
    { "id": 12, "name": "Console Light", theme: consoleLight },
    { "id": 13, "name": "Console Dark", theme: consoleDark },
    { "id": 14, "name": "Dracula", theme: dracula },
    { "id": 15, "name": "Darcula", theme: darcula },
    { "id": 16, "name": "Duotone Light", theme: duotoneLight },
    { "id": 17, "name": "Duotone Dark", theme: duotoneDark },
    { "id": 18, "name": "Eclipse", theme: eclipse },
    { "id": 19, "name": "Github Light", theme: githubLight },
    { "id": 20, "name": "Github Dark", theme: githubDark },
    { "id": 21, "name": "Gruvbox Dark", theme: gruvboxDark },
    { "id": 22, "name": "Gruvbox Light", theme: gruvboxLight },
    { "id": 23, "name": "Material Light", theme: materialLight },
    { "id": 24, "name": "Material Dark", theme: materialDark },
    { "id": 25, "name": "Monokai", theme: monokai },
    { "id": 26, "name": "Monokai Dimmed", theme: monokaiDimmed },
    // { "id": 27, "name": "Kimbie Dark", theme: kimbieDark },
    { "id": 28, "name": "Noctis Lilac", theme: noctisLilac },
    { "id": 29, "name": "Nord", theme: nord },
    { "id": 30, "name": "Okaidia", theme: okaidia },
    { "id": 31, "name": "Quietlight", theme: quietlight },
    { "id": 32, "name": "Red", theme: red },
    { "id": 33, "name": "Solarized Light", theme: solarizedLight },
    { "id": 34, "name": "Solarized Dark", theme: solarizedDark },
    { "id": 35, "name": "Sublime", theme: sublime },
    { "id": 36, "name": "Tokyo Night", theme: tokyoNight },
    { "id": 37, "name": "Tokyo Night Storm", theme: tokyoNightStorm },
    { "id": 38, "name": "Tokyo Night Day", theme: tokyoNightDay },
    { "id": 39, "name": "Tomorrow Night Blue", theme: tomorrowNightBlue },
    { "id": 40, "name": "White Light", theme: whiteLight },
    { "id": 41, "name": "White Dark", theme: whiteDark },
    // { "id": 42, "name": "VS Code", theme: vsCode },
    { "id": 43, "name": "Xcode Light", theme: xcodeLight },
    { "id": 44, "name": "Xcode Dark", theme: xcodeDark },
  ];


  useEffect(() => {
    if (Location.state && Location.state.roomCreated === true) {
      const init = async () => {
        socketRef.current = await initSocket();
        socketRef.current.on("connect_error", (err) => handleErrors(err));
        socketRef.current.on("connect_failed", (err) => handleErrors(err));

        const handleErrors = (err) => {
          console.log("Error", err);
          toast.error("Socket connection failed, Try again later");
          navigate("/setupeditor");
        };

        socketRef.current.emit(ACTIONS.JOIN, {
          roomId: Location.state?.roomId,
          username: Location.state?.username,
        });

        socketRef.current.on(
          ACTIONS.JOINED,
          ({ clients, username, socketId }) => {
            if (username !== Location.state?.username) {
              toast.success(`${username} joined the room.`);
            }
            setClients(clients);

            socketRef.current.on('CODE_CHANGE', ({ fileType, newCode, roomId }) => {
              switch (fileType) {
                case 'html':
                  setHtml(newCode);
                  break;
                case 'css':
                  setCss(newCode);
                  break;
                case 'js':
                  setJs(newCode);
                  break;
                default:
                  console.error('Unknown file type:', fileType);
              }
            });

            // Listen for typing events from the server
            socketRef.current.on(ACTIONS.TYPING, (data) => {
              // Display the typing indicator, e.g., show the user's name next to the cursor
              console.log(`${data.username} is typing...`);
              toast.success(`${data.username} is typing....`)
              // Update your UI accordingly
            });

          }
        );

        // Listening for disconnected
        socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
          toast.success(`${username} left the room`);
          setClients((prev) => {
            return prev.filter((client) => client.socketId !== socketId);
          });
        });
      };
      init();
    }
    // Cleanup
    return () => {
      // Check if socketRef.current is not null before calling off
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNECTED);
      }

      // Disconnect the socket if it's not null
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    }
  }, [Location.state?.roomCreated]);



  const handleTyping = () => {
    if (socketRef.current) {
      socketRef.current.emit(ACTIONS.TYPING, {
        username: Location.state?.username,
        content: 'typing...',
      });
    } else {
      // console.error('Socket connection not established');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key and "." key are pressed
      if (event.ctrlKey && event.key === '.') {
        // Check if an input element is focused
        if (document.activeElement.tagName === 'INPUT') {
          return; // Do nothing if an input element is already focused
        }

        // Focus on the first input element on the page
        const inputElement = document.querySelector('input');
        if (inputElement) {
          inputElement.focus();
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setIsVisible(false); // Hide the section if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);


    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const attachLinkClickListener = () => {
  //   document.body.addEventListener('click', (event) => {
  //     // Check if the clicked element is a link
  //     if (event.target.tagName === 'A') {
  //       event.preventDefault(); // Prevent the default link behavior

  //       // Extract the target section ID from the link's href
  //       const targetId = event.target.getAttribute('href').substring(1);

  //       // Navigate to the target section
  //       scrollToSection(targetId);
  //     }
  //   });
  // };

  // // Function to scroll to a section by its ID
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };



  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const updateOutput = () => {
    setTimeout(() => {
      const combinedOutput = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `;

      setOutput(combinedOutput);

      // attachLinkClickListener();  

    }, 0); // Adjust the delay as needed
  };



  console.log()
  // handle the timeline toggle feature
  const handleTimeLineToggle = () => {
    setTimeLine(!timeLine)
  }



  const handleFileExplorer = () => {
    setFileExplorer(!fileExplorer)
  }


  const handleHTMLFileClicked = (file) => {
    setSelectedHTMLFile({ name: file.name, icon: file.icon });
    setSelectedCSSFile(false);
    setSelectedJSFile(false);
  };

  const handleCSSFileClicked = (file) => {
    setSelectedCSSFile({ name: file.name, icon: file.icon });
    setSelectedJSFile(false);
    setSelectedHTMLFile(false);

  };

  const handleJSFileClicked = (file) => {
    setSelectedJSFile({ name: file.name, icon: file.icon });
    setSelectedCSSFile(false);
    setSelectedHTMLFile(false);
  };

  const handleCSSFileClose = () => {
    setSelectedCSSFile(false);
  }

  const handleHTMLFileClose = () => {
    setSelectedHTMLFile(false);
  }

  const handleJSFileClose = () => {
    setSelectedJSFile(false);
  }

  const handleLivePreview = () => {
    setLivePreview(!livePreview)
    setEditorWidth('55vw')
  }
  const handleCancelLivePreview = () => {
    setLivePreview(false)
    setEditorWidth('83.8vw')
  }

  const handleFullScreen = () => {
    const element = document.documentElement; // Get the root element of the document
    if (document.fullscreenEnabled) {
      if (document.fullscreenElement) {
        document.exitFullscreen(); // Exit full-screen mode if already in full-screen
      } else {
        element.requestFullscreen(); // Request full-screen mode if not already in full-screen
      }
    } else {
      console.log('Full-screen mode is not supported in this browser.');
    }
    setScreenMode(!screenMode)
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handlePermitVideo = () => {
    setPermitVideo(!permitvideo)
  }

  const handlePermitCollaboration = () => {
    setPermitCollaboration(true)
  }

  const handleParticipants = () => {
    if (Location.state?.roomCreated) {
      setParticipants(!participants)
    }
    else {
      toast.error("Create a Room or Join by Invitation ID");
    }
  }

  const handleSettingsOpen = () => {
    setSettingComponent(true);
  }

  const handleThemeList = () => {
    setThemeList(true)
    setSettingComponent(false)
  }


  const handleCancelThemeList = () => {
    setThemeList(false)
    setSettingComponent(false)
  }

  const handleThemeSelect = (theme) => {
    setEditorTheme(theme); // Update the editor theme state
    // handleCancelThemeList(); // Close the theme list if it's open
  };

  // const id
  const handleSaveFilesToDatabase = async (e) => {
    e.preventDefault()
    try {
      await updateCodeSnippet(selectedSnippet._id, html, css, js);
      toast.success('Snippet updated successfully!');
    } catch (error) {
      toast.error('An error occurred while updating the snippet.');
      // console.error(error);

    }
  }

  useEffect(() => {
    const handleKeyDown = async (event) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();

        console.log(selectedSnippet)

        if (selectedSnippet) {
          try {
            await updateCodeSnippet(selectedSnippet, html, css, js);
            toast.success('Snippet updated successfully!');
          } catch (error) {
            toast.error('An error occurred while updating the snippet.');
            console.error(error);
          }

          const newTime = new Date().toLocaleTimeString();
          setTimes((prevTimes) => {
            const updatedTimes = [newTime, ...prevTimes];
            return updatedTimes.slice(0, 4);
          });
        } else {
          console.error('Selected snippet is not available.');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [html, css, js, selectedSnippet]);

  const [livePreviewOutput, setLivePreviewOutput] = useState(false)

  const handleLivePreviewWithIncrease = () => {
    setLivePreviewOutput(true)
    setLivePreview(false)
    setEditorWidth('82.8vw')
  }

  const handleCancelLivePreviewFullScreen=()=>{
    setLivePreviewOutput(false)
  }





  return (
    <main className='flex flex-col bg-gray-900 min-h-screen'>

      <section className='flex items-center justify-between px-4 py-2 border-b border-zinc-700'>

        <div className='flex items-center gap-5'>
          <img src={logo} alt="" className='h-[35px] w-[35px] cursor-pointer' onClick={() => navigate('/setupeditor')} />
          <p className='text-[14px] text-zinc-300 cursor-pointer' onClick={handleSaveFilesToDatabase}>Save</p>
          {/* <p className='text-[14px] text-zinc-300'>Help</p> */}
          {/* <p className='text-[14px] text-zinc-300'>Open</p> */}
        </div>

        <div className='flex items-center gap-10'>

          <div className='flex items-center lg:border-b hidden:border-b border-zinc-500 rounded-md px-3 py-1 cursor-pointer transition-transform hover:scale-95' onClick={handleParticipants}>
            {
              participants ? (
                <IoMdArrowDropdown className='text-green-600 h-5 w-5' />
              ) : (
                <IoMdArrowDropright className='text-green-600 h-5 w-5' />
              )
            }
            <p className='text-white text-sm'>Participants</p>
          </div>

          <div className='hidden lg:flex items-center gap-4 py-1 px-4 border border-zinc-500 rounded-md bg-[#1c2333]'>
            <IoSearch className='text-zinc-400' />
            <input type="search" name="" id="" className='bg-transparent outline-none w-[700px] text-white' placeholder='Search files by name :' />
            <p className='text-zinc-400'>Ctrl .</p>
          </div>

        </div>

        <div className='flex items-center gap-4'>

          <div className="">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={isChecked}
              onChange={handleToggle}
            />
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <div className={`w-12 h-5 bg-zinc-400 rounded-full flex items-center`}>
                <div className={`w-6 h-5 rounded-full transition-transform duration-500 ${isChecked ? 'transform translate-x-full bg-zinc-50 cursor-not-allowed' : 'bg-gray-600'}`} title='Enable video conferencing' onClick={handlePermitVideo}></div>
              </div>
            </label>
          </div>

          <div className='flex items-center text-zinc-300 hover:text-white  gap-1 px-2 py-[2px] border border-zinc-500 cursor-pointer rounded-lg transition-transform hover:scale-95' onClick={handlePermitCollaboration}>
            <MdOutlineEmergencyShare className='text-green-500 ' />
            <p className=''>Live share</p>
          </div>

          <div className='flex items-center text-zinc-300 hover:text-white gap-1 px-2 py-[2px] border border-zinc-400 cursor-pointer rounded-lg transition-transform hover:scale-95' onClick={handleLivePreview}>
            <MdLaunch className='text-green-500' />
            <p className='text-[14px] '>Go Live</p>
          </div>

          <div className='hidden lg:flex'>
            {
              !screenMode ?
                (
                  <VscScreenFull className='h-[25px] w-[25px] cursor-pointer text-white' title='Exit full screen' onClick={handleFullScreen} />
                )
                :
                <BiExitFullscreen className='h-[25px] w-[25px] cursor-pointer text-white' title='Get full screen' onClick={handleFullScreen} />
            }
          </div>

        </div>


      </section>

      <section className='flex flex-grow'>

        <div className='flex flex-col items-center justify-between py-4 w-[60px] border-r border-zinc-700'>
          <LuFolderTree className='text-zinc-400 h-7 w-7 cursor-pointer hover:text-zinc-200 duration-500' onClick={handleFileExplorer} />
          <div className='flex flex-col gap-3 text-zinc-400'>
            {/* <IoPersonCircleSharp className='h-7 w-7 cursor-pointer hover:text-zinc-200 duration-500' /> */}
            <IoSettingsSharp className='h-7 w-7 cursor-pointer hover:text-zinc-200 duration-500 ' onClick={handleSettingsOpen} />
          </div>

        </div>

        {
          fileExplorer &&
          (
            <div className='flex flex-col justify-between w-[250px] bg-transparent border-r border-zinc-700 p-4 text-white space-y-2'>

              <div className='flex flex-col gap-2'>

                <p className='font-bold text-[18px]'>{title}</p>

                <div className='flex items-center gap-2 px-2 cursor-pointer' onClick={() => handleHTMLFileClicked({ name: 'Index.html', icon: htmlSymbol })}>
                  <img src={htmlSymbol} alt="" className='h-[20px] w-[20px]' />
                  <p className='font-sembold text-[16px] text-zinc-200'>Index.html</p>
                </div>

                <div className='flex items-center gap-2 px-2 cursor-pointer' onClick={() => handleCSSFileClicked({ name: 'Index.css', icon: cssSymbol })}>
                  <img src={cssSymbol} alt="" className='h-[20px] w-[20px]' />
                  <p className='font-sembold text-[16px] text-zinc-200'>Index.css</p>
                </div>

                <div className='flex items-center gap-2 px-2 cursor-pointer' onClick={() => handleJSFileClicked({ name: 'Index.js', icon: jsSymbol })}>
                  <img src={jsSymbol} alt="" className='h-[20px] w-[20px]' />
                  <p className='font-sembold text-[16px] text-zinc-200'>Index.js</p>
                </div>
              </div>


              <div className='flex flex-col  gap-1' onClick={handleTimeLineToggle}>

                <div className='flex items-center'>
                  <IoMdArrowDropdown className='h-6 w-6 text-green-500' />
                  <p className='font-semibold text-[18px]'>Timeline</p>
                </div>


                {
                  timeLine &&
                  (
                    <div className='px-1'>
                      <div className='flex flex-col items-center justify-between'>
                        {times.map((time, index) => (
                          <div key={index} className='flex items-center gap-2'>
                            <MdOutlineDataSaverOff className='ml-1 h-3 w-3 text-green-500' />
                            <div className='flex items-center gap-4'>
                              <p className='text-[14px] text-zinc-300'>File Saved</p>
                              <p>{time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
              </div>

            </div>
          )
        }

        <div className='flex'>

          {
            selectedHTMLFile &&
            (
              <div className=''>
                <div className='flex items-center gap-5 text-white bg-gray-800 xl:w-fit px-3 py-1 border-t border-red-500 shadow-2xl'>
                  <div className='flex items-center gap-2'>
                    <img src={selectedHTMLFile.icon} alt="" className='h-5 w-5' />
                    <p className='text-[16px]'>{selectedHTMLFile.name}</p>
                  </div>
                  <RxCross2 className='text-green-500 cursor-pointer' onClick={handleHTMLFileClose} />
                </div>
                <CodeMirror
                  height='92.4vh'
                  width={editorWidth}
                  className='text-[16px] codemirror'
                  theme={editorTheme}
                  value={html}

                  onChange={(value, ViewUpdate) => {
                    setHtml(value);


                    // Call handleTyping here
                    // handleTyping();

                    if (socketRef.current) {
                      socketRef.current.emit('CODE_CHANGE', {
                        roomId: Location.state?.roomId,
                        fileType: 'html',
                        newCode: value
                      });
                    } else {
                      // console.error('Socket connection not established');
                    }
                  }}
                  extensions={[
                    loadLanguage(['html'])
                  ]}
                />

              </div>
            )
          }

          {
            selectedCSSFile &&
            (
              <div className='flex-grow flex-1'>
                <div className='flex items-center gap-5 text-white bg-gray-800 w-fit px-3 py-1 border-t border-red-500 shadow-2xl'>
                  <div className='flex items-center gap-2'>
                    <img src={selectedCSSFile.icon} alt="" className='h-5 w-5' />
                    <p className='text-[16px]'>{selectedCSSFile.name}</p>
                  </div>
                  <RxCross2 className='text-green-500 cursor-pointer' onClick={handleCSSFileClose} />
                </div>
                <CodeMirror
                  height='92.4vh'
                  width={editorWidth}
                  value={css}
                  onChange={(value, ViewUpdate) => {
                    setCss(value);

                    // Call handleTyping here
                    // handleTyping();

                    if (socketRef.current) {
                      socketRef.current.emit('CODE_CHANGE', {
                        roomId: Location.state?.roomId,
                        fileType: 'css',
                        newCode: value
                      });
                    } else {
                      // console.error('Socket connection not established');
                    }
                  }
                  }
                  className='text-[16px] codemirror'
                  theme={editorTheme}
                  extensions={[loadLanguage('css'), color]}

                />
              </div>
            )
          }


          {
            selectedJSFile &&
            (
              <div className='flex-grow flex-1'>
                <div className='flex items-center gap-5 text-white bg-gray-800 w-fit px-3 py-1 border-t border-red-500 shadow-2xl'>
                  <div className='flex items-center gap-2'>
                    <img src={selectedJSFile.icon} alt="" className='h-5 w-5' />
                    <p className='text-[16px]'>{selectedJSFile.name}</p>
                  </div>
                  <RxCross2 className='text-green-500 cursor-pointer' onClick={handleJSFileClose} />
                </div>
                <CodeMirror
                  height='92.4vh'
                  width={editorWidth}
                  value={js}
                  onChange={(value, ViewUpdate) => {
                    setJs(value);

                    // Call handleTyping here
                    // handleTyping();

                    if (socketRef.current) {
                      socketRef.current.emit('CODE_CHANGE', {
                        roomId: Location.state?.roomId,
                        fileType: 'js',
                        newCode: value
                      });
                    } else {
                      // console.error('Socket connection not established');
                    }
                  }
                  }
                  className='text-[16px] codemirror'
                  theme={editorTheme}
                  extensions={[
                    loadLanguage(['javascript'])
                  ]}
                />
              </div>
            )
          }


          {/* Live Preview */}
          {
            (selectedCSSFile || selectedHTMLFile || selectedJSFile) && livePreview &&
            (
              <div className='flex flex-col bg-white'>
                <div className='flex justify-end gap-2 bg-gray-900 p-[4px]'>
                  <RxOpenInNewWindow className='text-white cursor-pointer h-6 w-6' onClick={handleLivePreviewWithIncrease} />
                  <RxCross2 className='text-white cursor-pointer h-6 w-6' onClick={handleCancelLivePreview} />
                </div>
                <iframe
                  srcDoc={output}
                  className='w-[550px]'
                  height="100%"
                />


              </div>
            )
          }

        </div>

      </section>

      <section>
        {
          permitvideo && <PermitVideoConferencing setPermitVideo={setPermitVideo} setIsChecked={setIsChecked} permitvideo={permitvideo} />
        }

        {
          permitCollaboration && <PermitCollaboration setPermitCollaboration={setPermitCollaboration} />
        }

        {
          participants && <Participants clients={clients} setClients={setClients} roomId={RoomID} />
        }

        {
          settingComponent && isVisible &&
          (
            <main className='absolute bottom-4 left-16 bg-gray-700 w-[300px] rounded-lg z-10 py-2' ref={sectionRef}>

              <section className='flex flex-col gap-2'>
                <div className='flex items-center justify-between text-white cursor-pointer px-4 hover:bg-gray-600 py-2 rounded-lg'>
                  <p className='text-md font-semibold'>Notifications</p>
                  <IoIosNotificationsOutline className='text-green-500 mt-[2px] h-5 w-5' />
                </div>

                creates a horizontally line
                <div className='border-b border-gray-500'></div>

                <div className='flex items-center justify-between text-white cursor-pointer px-4 hover:bg-gray-600 py-2 rounded-lg' onClick={handleThemeList}>
                  <p className='text-md font-semibold '>Themes</p>
                  <FaArrowRightFromBracket className='text-green-500 mt-[2px] h-4 w-4' />
                </div>

                creates a horizontally line
                <div className='border-b border-gray-500'></div>

                <div className='flex items-center justify-between text-white cursor-pointer px-4 hover:bg-gray-600 py-2 rounded-lg'>
                  <p className='text-md font-semibold '>Keyboard Shortcuts</p>
                  <FaArrowRightFromBracket className='text-green-500 mt-[2px] h-4 w-4' />
                </div>
              </section>
            </main>
          )
        }

        {
          themeList && (
            <main className='absolute bottom-[250px] w-[600px] left-[680px] bg-gray-700 p-4 rounded-2xl z-10'>
              <div className='flex items-center justify-between '>
                <p className='text-center text-white text-[24px] ml-3 font-bold mb-6'>Select a Theme</p>
                <RxCross2 className='text-white mb-7 h-6 w-6 transition-transform hover:scale-95 cursor-pointer duration-500' onClick={handleCancelThemeList} />
              </div>

              <section className='text-white' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <ul>
                  {
                    data.map((item, index) => {
                      return (
                        <div className='py-1 flex flex-col gap-2' key={index}>
                          <div className='flex items-center justify-between cursor-pointer hover:bg-gray-600 p-2 rounded-lg' onClick={() => handleThemeSelect(item.theme)}>
                            <div className='flex items-center gap-8 px-4'>
                              <p className='text-green-500'>{item.id}.</p>
                              <li className='text-[16px] font-semibold'>{item.name}</li>
                            </div>
                            <IoIosArrowForward className='mr-4 text-green-500' />
                          </div>
                          <div className='border-b border-gray-600'></div>
                        </div>
                      );
                    })
                  }
                </ul>
              </section>
            </main>
          )
        }

        {
          livePreviewOutput &&
          <div>
            <p className='text-white text-end cursor-pointer mr-2' onClick={handleCancelLivePreviewFullScreen}>X</p>
            <iframe
              srcDoc={output}
              className='w-[99.1vw] h-[100vh] bg-white'
              height="100%"
            />
          </div>
        }

      </section>

    </main>
  )
}

export default Editor



