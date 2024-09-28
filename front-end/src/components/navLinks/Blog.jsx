import React from 'react'
import Collaboration from '../../assets/collaboration.jpeg'
import communication from '../../assets/communication.jpeg'
import teamPic from '../../assets/teamPic.jpeg'

const Blog = () => {
  return (
    <main>
      <section className='homeSection bg-gray-700 min-h-screen'>
        <div className="">
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">DevBlend Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Unleash Productivity: The Power of Collaborative Coding</h2>
                <p className="mb-4">Learn how DevBlend's collaborative code editor revolutionizes teamwork, streamlining development processes and boosting productivity.</p>
               <img src={teamPic} alt="Team Collaboration" className="w-full rounded-lg" />
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Elevate Communication: Real-time Chat Integration</h2>
                <p className="mb-4">Explore how DevBlend's integrated chat feature enhances communication, enabling seamless collaboration and faster decision-making.</p>
                <img src={communication} alt="Real-time Chat" className="w-full rounded-lg" />
             </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Connect Anywhere: Video Conferencing for Remote Teams</h2>
                 <p className="mb-4">Discover the benefits of DevBlend's video conferencing integration, bringing remote teams closer together for more effective collaboration.</p>
                <img src={Collaboration} alt="Video Conferencing" className="w-full rounded-lg" />
              </div>
           </div>
          </div>
       </div>
     </section>

     {/* 2nd section */}
      <section className='mt-8 mx-auto bg-zinc-700 py-7 w-[60%]'>
        <div className="">
         <div className='ml-10'>
           <h2 className="text-2xl font-semibold ">Latest Updates</h2>
            <ul className="list-disc list-inside ">
             <li className=''>New Feature: <span className='cursor-pointer hover:underline '>Dark Mode Support</span> </li>
             <li>Enhanced Performance: Optimized Code Editor</li>
             <li>Improved Security: Two-Factor Authentication</li>
           </ul>
             <img src="url_to_image_here" alt="Latest Updates" className="w-full mt-4 rounded-lg" />
         </div>
       </div>
     </section>

     {/* 3rd section */}
     <section className='mt-8 text-center bg-gray-400 py-6 w-[60%] ml-10 mx-auto'>
       <div className=""> 
          <h2 className="text-2xl font-semibold mb-4">Get Started with DevBlend</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Sign Up Now
           </button>
        </div>
     </section>
     
     <section className='mb-9'>
       <div className="mt-8 flex justify-center px-20 ">
         <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
       </div> 

        <div className="flex justify-center">
         <a href="#" className="mr-4">
           <img src="" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="mr-4">
           <img src="" alt="Twitter" className="w-8 h-8" />
           </a>
         <a href="#">
           <img src="" alt="LinkedIn" className="w-8 h-8" />
         </a>
       </div>
      </section>
    </main>
        
  
    
  );
};

export default Blog;
