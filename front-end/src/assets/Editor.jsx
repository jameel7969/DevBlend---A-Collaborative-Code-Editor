import React, { useEffect, useState } from 'react'
import htmlSymbol from './assets/htmlSymbol.png'
import cssSymbol from './assets/cssSymbol.png'
import jsSymbol from './assets/jsSymbol.png'
import fileIcon from './assets/fileIcon.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import logo from './assets/logo1.png'
import profile from './assets/profile.png'
import { IoSearch } from "react-icons/io5";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { TbDeviceIpadHorizontalPlus } from "react-icons/tb";
import { FaRegFileCode } from "react-icons/fa6";
import { VscScreenFull } from "react-icons/vsc";
import { BiExitFullscreen } from "react-icons/bi";
import PermitVideoConferencing from './PermitVideoConferencing'







const Editor = () => {

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState('');
  const [dataVisibile, setDataVisible] = useState(false);
  const [isSectionVisible, SetisSectionVisible] = useState(false)
  const [showEditor, SetShowEditor] = useState(false)
  const [screenMode, SetScreenMode] = useState(false)
  const [currentFile, setCurrentFile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [permitvideo, setPermitVideo] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handlePermitVideo = () => {
    setPermitVideo(!permitvideo)
  }


  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const updateOutput = () => {
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

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function toggleInputVisibility() {
    setShowInput(true);
  }

  function handlekeyPress(e) {
    if (e.key === 'Enter') {
      addNewFile();
      setDataVisible(true)
      setShowInput(false);
      SetisSectionVisible(true);
      SetShowEditor(true)
      setCurrentFile(newFileName);
    }
  }

  function addNewFile() {
    if (newFileName.trim() !== '') {
      setFiles([...files, newFileName]);
      setNewFileName('');
    }
  }

  function toggleSectionVisibility() {
    SetisSectionVisible(!isSectionVisible);
  };

  function handleShowEditor() {
    SetShowEditor(true)
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
    SetScreenMode(!screenMode)
  };



  return (

    <main className='flex flex-col min-h-screen bg-[#2e3138] text-white '>

      <section className='flex items-center justify-between py-3 px-6'>
        <div className='flex items-center gap-5'>
          <img src={logo} alt="" className='h-[30px] w-[30px]' />
          <p className='text-[14px] text-zinc-300'>Save</p>
          <p className='text-[14px] text-zinc-300'>Help</p>
          <p className='text-[14px] text-zinc-300'>Open</p>
        </div>

        <div className='flex items-center gap-4 py-1 px-4 border border-zinc-500 rounded-md'>
          <IoSearch className='text-zinc-400' />
          <input type="search" name="" id="" className='bg-transparent outline-none w-[700px]' placeholder='Search files by name :' />
          <p className='text-zinc-400'>Ctrl .</p>
        </div>

        <div className='flex items-center gap-3'>

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
                <div className={`w-6 h-5 rounded-full transition-transform duration-500 ${isChecked ? 'transform translate-x-full bg-zinc-50' : 'bg-gray-600'}`} title='Enable video conferencing' onClick={handlePermitVideo}></div>
              </div>
            </label>
          </div>

          {
            permitvideo && <PermitVideoConferencing setPermitVideo={setPermitVideo} setIsChecked={setIsChecked} />
          }
         


          <img src={profile} alt="" className='h-[30px] w-[30px] cursor-pointer transition-transform hover:scale-105 ' />
          {
            !screenMode ?
              (
                <VscScreenFull className='h-[25px] w-[25px] cursor-pointer' title='Exit full screen' onClick={handleFullScreen} />
              )
              :
              <BiExitFullscreen className='h-[25px] w-[25px] cursor-pointer' title='Get full screen' onClick={handleFullScreen} />
          }

        </div>

      </section>


      {/* next section */}
      <section className='flex ml-14 flex-grow'>

        <div className='flex-[1] p-5 bg-[#202327]'>

          <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2 cursor-pointer w-fit' onClick={toggleSectionVisibility}>
              {
                isSectionVisible ?
                  (
                    <SlArrowDown className='text-zinc-400 mt-[2px] h-[12px] w-[12px]' />
                  )
                  :
                  (
                    <SlArrowRight className='text-zinc-400 mt-[2px] h-[12px] w-[12px]' />

                  )
              }
              <p className='text-[16px] font-bold text-zinc-200'>DevBlend</p>
            </div>
            <TbDeviceIpadHorizontalPlus className='h-[23px] w-[23px] cursor-pointer text-zinc-400 hover:text-zinc-200 duration-500' title='Create new file' onClick={toggleInputVisibility} />
          </div>

          {
            showInput &&
            (
              <div className='flex items-center gap-2 pt-3 px-6'>
                <img src={fileIcon} alt="" className='h-[20px] w-[20px]' />
                <input
                  type='text'
                  className='border border-zinc-600 outline-none bg-transparent px-2 w-full rounded-md'
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  onKeyDown={handlekeyPress}
                  autoFocus
                />
              </div>
            )
          }

          {
            dataVisibile && isSectionVisible &&
            (
              <div className='flex flex-col gap-2 py-3 px-6'>
                {
                  files.map((file, index) => {
                    const [fileName, extension] = file.split('.');
                    let icon = fileIcon;
                    if (extension === 'html') {
                      icon = htmlSymbol;
                    } else if (extension === 'css') {
                      icon = cssSymbol;
                    }
                    else if (extension === 'js') {
                      icon = jsSymbol;
                    }
                    return (
                      <div className='flex items-center gap-2 cursor-pointer' key={index} onClick={() => handleShowEditor(file)}>
                        <img src={icon} alt="" className='h-[20px] w-[20px]' />
                        <span className='hover:underline'>{fileName}.{extension}</span>
                      </div>
                    );
                  })
                }
              </div>

            )
          }


        </div>


        {/* codemirror editor */}
        {
          showEditor ?
            (
              <div className='flex-[5] bg-[#15181e]'>
                <p className="text-white text-xl">{currentFile}</p>
                <CodeMirror
                  value="console.log('hello world!');"
                  height="93.5vh"
                  className='text-[16px]'
                  theme="dark"
                  extensions={[javascript({ jsx: true })]}
                  basicSetup={
                    {
                      lineNumbers: true,
                      foldGutter: true,
                      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                      indentUnit: 2,
                      tabSize: 2,
                      indentWithTabs: true,
                      smartIndent: true,
                      matchBrackets: true,
                      autoCloseBrackets: true,
                      highlightSelectionMatches: true,
                      scrollbarStyle: null,
                      styleActiveLine: true,
                      highlightActiveLine: true,
                      readOnly: false,
                      showCursorWhenSelecting: true,
                      lineWrapping: true,
                    }
                  }
                />
              </div>
            )
            :
            (
              <div className='flex-[5] bg-[#15181e]'>
              </div>
            )
        }



      </section>

    </main>
  )
}

export default Editor







