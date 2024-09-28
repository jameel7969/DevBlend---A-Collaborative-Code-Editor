import React, { useContext, useEffect } from 'react';
import { useAuthContext } from '../../../../Hooks/UseAuthContext';
import { useGetCodeSnippetHook } from '../../../../Hooks/useGetCodeSnippet';
import sourcecode from '../../../../assets/sourcecode.png';
import { useNavigate } from 'react-router-dom';
import SnippetContext from '../../../../Context/SnippetContext';
import deleteIcon from '../../../../assets/deleteIcon.png'
import { useDeleteSnippetHook } from '../../../../Hooks/useDeleteHook';
import toast from 'react-hot-toast';


const MyScripts = () => {
  const { user } = useAuthContext();
  const { getCodeSnippets, isLoading, error, codeSnippets } = useGetCodeSnippetHook();
  const { deleteSnippet } = useDeleteSnippetHook()
  const navigate = useNavigate();
  const { setSelectedSnippet, trigger, setTrigger } = useContext(SnippetContext);



  useEffect(() => {
    if (user) {
      getCodeSnippets(user.id);
    }
  }, [user, getCodeSnippets]);


  const handleGoToEditor = (snippetId) => {
    const snippet = codeSnippets.find(snippet => snippet._id === snippetId);
    setSelectedSnippet(snippet);
    setTrigger(true)
    navigate('/editor');
  };

  const handleDeleteData = async (snippetId) => {
    try {
      await deleteSnippet(snippetId);
      getCodeSnippets(user.id);
    } catch (error) {
      toast.error('An error occurred while deleting the snippet.');
    }
  };


  return (
    <main className='py-40 w-[1200px] mx-auto space-y-14 font-poppins'>
      <div className='flex items-center justify-between'>
        <p className='text-3xl font-bold'> {user.name} My Projects</p>
        <div className='bg-transparent border w-fit p-3 border-zinc-600 rounded-lg'>
          <p className='text-[16px]'>Created by : <span className='underline text-green-500 cursor-pointer'>{user.email}</span></p>
        </div>
      </div>

      <div className='flex flex-col gap-5 w-[1200px]'>
        {codeSnippets.map((snippet) => (
          <div key={snippet._id} className='flex items-center justify-between gap-5 bg-[#252e43] p-8 rounded-2xl hover:bg-[#20283a]'>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-5 items-center'>
                <img src={sourcecode} alt="" className='h-[45px] w-[45px]' />
                <p className='text-[16px] font-bold'>{snippet.title}</p>
                <p className='text-[12px] text-zinc-400'>
                  {(() => {
                    const date = new Date(snippet.timestamp);
                    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                    return formattedDate;
                  })()}
                </p>

              </div>
              <div className='flex flex-col gap-3 w-[900px] text-justify px-16'>
                <p className='text-[14px]'>{snippet.description}</p>
              </div>
            </div>
            <div>

            </div>
            <div className='flex items-center gap-2 bg-transparent border py-2 px-4 border-[#a571f2] rounded-lg cursor-pointer transition-transform hover:scale-95 w-[250px] justify-center'>
              <p className='text-[16px]' onClick={() => handleGoToEditor(snippet._id)}>Try Now</p>
            </div>
            <img src={deleteIcon} alt="" className='transition-transform hover:scale-95 cursor-pointer' onClick={() => handleDeleteData(snippet._id)} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyScripts;
