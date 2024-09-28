import React, { useState, useEffect, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { initSocket } from '../../../../Socket';
import { ACTIONS } from '../../../../Actions';




const JoinCollaboration = ({ setPermitCollaboration }) => {
    const [sectionVisible, setSectionVisible] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const [roomCreated, setRoomCreated] = useState(false);


    const navigate = useNavigate();


    const handleSectionClose = () => {
        setSectionVisible(true);
        setPermitCollaboration(false)
    }

 


    const generateRandomId = () => {
        setRoomId(''); // Clear the input field
        const id = Math.random().toString(36).substr(2, 12); // Generate random alphanumeric string
        setRoomId(id); // Set the random ID to state
        toast.success('Random Id Created successfully!')
    };

    const handleCreateNewRoom = () => {
        if (!roomId || !username) {
            toast.error('Room Id and Username is not defined!')
            return;
        }

        setRoomCreated(true)
        console.log(roomId,username)
        // redirect
        navigate(`/editor/${roomId}`, {
            state: {
                roomId,
                username,
                roomCreated:true

            },
        });

        setSectionVisible(true);
    }




    return (
        (
            !sectionVisible && (
                <section className='flex items-center justify-center h-screen text-white absolute top-0 right-0 left-9 z-10'>
                    <div className='bg-gray-800 h-[470px] w-[550px] rounded-2xl'>

                        <div className='flex items-center justify-between px-10 pt-12'>
                            <p className='capitalize text-2xl font-bold'>real time Collaboration</p>
                            <RxCross2 className='text-2xl text-gray-300 hover:text-white cursor-pointer transition-transform hover:scale-95' onClick={handleSectionClose} />
                        </div>

                        <div className='px-10 mt-6'>

                            <div className='flex flex-col gap-4 mt-6'>
                                <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Collaboration ID</label>
                                <div className='border border-zinc-600 w-full py-4 px-4 rounded-lg flex items-center justify-between'>
                                    <input type="text"
                                        value={roomId}
                                        onChange={(e) => setRoomId(e.target.value)} // Update this line
                                        className='bg-transparent outline-none w-full' placeholder='Enter your ID or Generate random ID ' />
                                    <p className='underline text-gray-400 cursor-pointer transition-transform hover:scale-95 hover:text-white' title='Generate Random id' onClick={generateRandomId}>Generate</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 mt-4'>
                                <label htmlFor="" className='text-[18px] font-bold text-zinc-300'>Username</label>
                                <input
                                    type="text"
                                    className='bg-transparent border border-zinc-600 w-full py-4 px-4 outline-none rounded-lg'
                                    placeholder='Enter username:'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className='mt-8'>
                                <button className='bg-blue-500 w-full p-3 rounded-lg text-xl font-semibold transition-transform hover:bg-blue-600 duration-500 cursor-pointer' onClick={handleCreateNewRoom}>Create New Room</button>
                            </div>

                        </div>

                    </div>

                </section>
            )
        )


    )
}

export default JoinCollaboration