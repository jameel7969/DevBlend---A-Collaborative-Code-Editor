import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import html from '../../../../assets/htmlSymbol.png';
import css from '../../../../assets/cssSymbol.png';
import js from '../../../../assets/jsSymbol.png';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSaveCodeSnippetHook } from '../../../../Hooks/useSaveCodeSnippet';
import { useAuthContext } from '../../../../Hooks/UseAuthContext';

const CreateScript = ({ setCreateScriptVisible }) => {
    const [sectionClose, setSectionClose] = useState(false);
    const [title, setTitle] = useState(''); // Add state for title
    const [description, setDescription] = useState(''); // Add state for description

    const navigate = useNavigate();

    const handleSectionClose = () => {
        setSectionClose(true);
        setCreateScriptVisible(false);
    };

    const { saveCodeSnippet, error } = useSaveCodeSnippetHook()
    const { user } = useAuthContext()

    const handleGoToEditor = async () => {
        // if (title.trim() !== '' && description.trim() !== '') {
        //     navigate(`/editor`, {
        //         state: {
        //             title,
        //             description 
        //         }
        //     })
        // } else {
        //     toast.error("Please fill the Title and Description fields.");
        // }

        const timestamp = new Date().toISOString();


        await saveCodeSnippet(user.id, html, css, js, title, description, timestamp)

        if (error) {
            toast.error(error);
        } else {
            navigate('/editor')
        }

    }

    return (
        <main>

            <section className="flex absolute z-10 top-0 bottom-0 left-[700px] justify-center items-center h-screen font-poppins">
                <div className='bg-gray-700 w-[700px] h-[500px] rounded-2xl px-9 py-10'>
                    <div className='flex items-center justify-between'>
                        <p className='text-2xl text-white font-bold'>Create a Script</p>
                        <RxCross2 className='text-white cursor-pointer transition-transform hover:scale-95 w-6 h-6' onClick={handleSectionClose} />
                    </div>

                    <div className='mt-10 flex'>
                        <div className='flex-[1] text-white flex flex-col gap-5'>
                            <p className='text-lg font-semibold mb-2 text-green-400'>Blueprints</p>
                            <div className='flex items-center gap-3'>
                                <img src={html} alt="" className='h-[30px] w-[30px]' />
                                <p className='text-[16px]'>HTML</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={css} alt="" className='h-[30px] w-[30px]' />
                                <p className='text-[16px]'>CSS</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={js} alt="" className='h-[30px] w-[30px]' />
                                <p className='text-[16px]'>JavaScript</p>
                            </div>
                        </div>

                        <div className='flex-[1.7] flex flex-col gap-5'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-white'>Title</label>
                                <input
                                    type="text"
                                    className='required bg-transparent border border-zinc-500 outline-none rounded-lg py-3 px-3 text-white text-[14px]'
                                    placeholder='Name your Script'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col gap-3'>
                                <label className='text-white'>Description</label>
                                <textarea
                                    className='h-[130px] resize-none bg-transparent border border-zinc-500 outline-none rounded-lg py-3 px-3 text-white text-[14px]'
                                    placeholder='Write short script description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className='flex items-center justify-center mt-2 cursor-pointer' onClick={handleGoToEditor}>
                                <p className="text-white hover:bg-blue-700 duration-500 bg-blue-500 py-3 w-[400px] text-center rounded-lg font-[600] text-[16px] shadow-2xl capitalize">
                                    Start building today
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreateScript;
