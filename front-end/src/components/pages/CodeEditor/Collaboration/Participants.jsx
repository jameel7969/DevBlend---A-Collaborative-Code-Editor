import React, { useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Participants = ({ clients, setClients, roomId }) => {

  const [hideParticipants, setHideParticipants] = useState(false)

  const navigate = useNavigate();
  const sectionRef = useRef(null); // Ref to the section

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setHideParticipants(true); // Hide the section if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
 }, []);


  const handleCopyRoomID = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success('Room ID copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy Room ID. Please try again.');
    }
  };

  const handleLeaveRoom = () => {
    navigate('/editor');
    setHideParticipants(true)
  }


  return (
    (
      !hideParticipants &&
      (
        <main className='absolute top-16 left-[370px] bg-white text-black rounded-lg  w-[220px] font-poppins p-4 space-y-5' ref={sectionRef}>

          <div className='text-center '>
            <p className='text-xl font-bold'>Participants</p>
          </div>


          <div className='flex flex-col gap-2'>
            {clients.map(item => {
              const initial = item.username.split(' ')[0].charAt(0).toUpperCase();
              return (
                <div key={item.socketId} className='flex items-center gap-4 '>
                  <Avatar
                    name={initial}
                    size="40"
                    round="14px"
                    color="#34D340"
                    className="avatar"

                  />
                  <p className='text-sm font-semibold'>{item.username}</p>
                </div>

              );
            })}
          </div>

          <div className='flex justify-center cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 duration-500' onClick={handleCopyRoomID}>
            <p className='font-bold text-[15px] px-5 py-3'>Copy Room ID</p>
          </div>

          <div className='flex justify-center cursor-pointer text-white bg-green-500 rounded-lg hover:bg-green-600 duration-500' onClick={handleLeaveRoom}>
            <p className='font-bold text-[15px] px-5 py-3'>Leave Room</p>
          </div>

        </main>
      )
    )

  );
};

export default Participants;
