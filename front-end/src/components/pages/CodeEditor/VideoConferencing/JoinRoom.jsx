import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


const JoinRoom = ({ setPermitVideo }) => {
    const [sectionVisible, setSectionVisible] = useState(false);
    const [toggleSection, setToggleSection] = useState(true);

    const handleSectionClose = () => {
        setSectionVisible(true);
        setPermitVideo(false)
    }

    const handleToggleSection = () => {
        setToggleSection(false)
    }
    const handleToggleInvitationSection = () => {
        setToggleSection(true)
    }

    const [randomId, setRandomId] = useState('');

    // Function to generate random ID
    const generateRandomId = () => {
        setRandomId(''); // Clear the input field
        const id = Math.random().toString(36).substr(2, 12); // Generate random alphanumeric string
        setRandomId(id); // Set the random ID to state
    };



    return (
        (
            !sectionVisible && (
                <section className='flex items-center justify-center h-screen text-white absolute top-0 right-0 left-9 z-10'>
                    <div className='bg-gray-800 h-[500px] w-[550px] rounded-2xl'>

                        <div className='flex items-center justify-between px-10 pt-12'>
                            <p className='capitalize text-2xl font-bold'>real time video conference</p>
                            <RxCross2 className='text-2xl text-gray-300 hover:text-white cursor-pointer transition-transform hover:scale-95' onClick={handleSectionClose} />
                        </div>

                        {
                            toggleSection ? (
                                <div className='px-10 mt-6'>

                                    <div className='flex flex-col gap-4 mt-6'>
                                        <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Meeting ID</label>
                                        <div className='border border-zinc-600 w-full py-4 px-4 rounded-lg flex items-center justify-between'>
                                            <input type="text"
                                                value={randomId}
                                                onChange={(e) => setRandomId(e.target.value)} // Update this line
                                                className='bg-transparent outline-none w-full' placeholder='Enter your ID or Generate random ID ' />
                                            <p className='underline text-gray-400 cursor-pointer transition-transform hover:scale-95 hover:text-white' title='Generate Random id' onClick={generateRandomId}>Generate</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-4 mt-4'>
                                        <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Username</label>
                                        <input type="text" className='bg-transparent border border-zinc-600 w-full py-4 px-4 outline-none rounded-lg' placeholder='Enter username:' />
                                    </div>

                                    <div className='mt-8'>
                                        <button className='bg-blue-500 w-full p-3 rounded-lg text-xl font-semibold transition-transform hover:bg-blue-600 duration-500 cursor-pointer'>Create New Room</button>
                                    </div>

                                    <div className='flex justify-end mt-4'>
                                        <p className='text-zinc-300 text-sm'>Have an inivtation  <span className='underline text-green-400 cursor-pointer' onClick={handleToggleSection}>Link</span> ?</p>
                                    </div>
                                </div>
                            )
                                :
                                (
                                    <div className='px-10 mt-6'>

                                        <div className='flex flex-col gap-4 mt-6'>
                                            <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Meeting ID</label>
                                            <input type="text" className='bg-transparent border border-zinc-600 w-full py-4 px-4 outline-none rounded-lg' placeholder='Paste your invitation id ' />
                                        </div>

                                        <div className='flex flex-col gap-4 mt-4'>
                                            <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Username</label>
                                            <input type="text" className='bg-transparent border border-zinc-600 w-full py-4 px-4 outline-none rounded-lg' placeholder='Write your username:' />
                                        </div>

                                        <div className='mt-8'>
                                            <button className='bg-blue-500 w-full p-3 rounded-lg text-xl font-semibold transition-transform hover:bg-blue-600 duration-500 cursor-pointer'>Join Room</button>
                                        </div>

                                        <div className='flex justify-end mt-4'>
                                            <p className='text-zinc-300 text-[15px]'>Does not have an   <span href="" className='underline text-green-400 cursor-pointer' onClick={handleToggleInvitationSection}>ID</span> ?</p>
                                        </div>
                                    </div>
                                )

                        }





                    </div>

                </section>
            )
        )


    )
}

export default JoinRoom
