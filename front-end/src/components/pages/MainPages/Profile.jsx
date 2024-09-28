import React from 'react';
import logo from "../../../assets/logo1.png";
import { GrAnnounce } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import toast from 'react-hot-toast';
import { useLogout } from '../../../Hooks/useLogoutHook';
import { useAuthContext } from '../../../Hooks/UseAuthContext';

const Profile = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext(); // Fixed: Added parentheses to call the hook

    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully!");
    };

    return (
        user && (
            <main className='z-10 absolute top-[110%] right-[1%] w-[300px] text-black bg-white font-poppins rounded-lg shadow-lg'>
                <section className='py-4'>
                    <div className='flex items-center justify-center'>
                        <img src={logo} alt="" className='h-16 w-16' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <p className='text-sm font-semibold mb-1'>{user.fullname}</p>
                        <p className='text-sm '>{user.email}</p>
                        <div className='mt-4 border border-zinc-400 py-2 px-10 rounded-lg bg-zinc-300 cursor-pointer transition-transform hover:scale-95'>
                            <p className='text-sm'>Manage Your Account</p>
                        </div>
                    </div>
                </section>
                <div className="h-[0.5px] bg-zinc-300 w-full"></div>
                <section className='flex flex-col py-2'>
                    <div className='flex items-center gap-4 cursor-pointer hover:bg-gray-200 py-3 px-8 w-full'>
                        <GrAnnounce className='h-6 w-6 text-green-600' />
                        <p className='text-sm'>Support Us</p>
                    </div>
                    <div className='flex items-center gap-4 cursor-pointer hover:bg-gray-200 py-3 px-8 w-full'>
                        <GrAnnounce className='h-6 w-6 text-green-600' />
                        <p className='text-sm'>Give us Feedback</p>
                    </div>
                    <div className='flex items-center gap-4 cursor-pointer hover:bg-gray-200 py-3 px-8 w-full' onClick={handleLogout}>
                        <IoMdLogOut className='h-6 w-6 text-green-600' />
                        <p className='text-sm'>Logout</p>
                    </div>
                </section>
            </main>
        )
    );
};

export default Profile;
