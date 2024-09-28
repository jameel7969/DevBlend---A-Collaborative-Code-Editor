import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import JoinCollaboration from './JoinCollaboration';

const PermitCollaboration = ({ setPermitCollaboration }) => {

    const [joinCollaborationForm, setJoinCollaborationForm] = useState(false);


    const handleCancel = () => {
        setPermitCollaboration(false);
    }

    const handleJoinCollaboration = () => {
        setJoinCollaborationForm(true);
    }

    return (
        <main>
            {
                !joinCollaborationForm &&
                <section className='bg-white h-[200px] w-[300px] rounded-2xl absolute top-[68px] right-48 z-10 shadow-md shadow-gray-300'>
                    <div className='flex justify-end p-2'>
                        <MdCancel className='text-zinc-700 h-6 w-6 transition-transform hover:scale-105 cursor-pointer duration-1000' onClick={handleCancel} />
                    </div>
                    <div className='flex flex-col gap-6 px-10 py-2'>
                        <p className='leading-relaxed text-[16px] font-bold text-black capitalize'>Want to start live collaboration?</p>
                        <button className='text-white hover:bg-blue-700 duration-500 bg-blue-500 py-3 w-[200px] text-center rounded-lg font-[600] text-[16px]  capitalize cursor-pointer' onClick={handleJoinCollaboration}>Continue</button>
                    </div>
                </section>
            }



            {joinCollaborationForm && <JoinCollaboration setPermitCollaboration={setPermitCollaboration} />}


        </main>
    )
};

export default PermitCollaboration;
