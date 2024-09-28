import React from 'react'
import teamplan from '../../../assets/Teamplans.jpeg'
import { VscAccount } from "react-icons/vsc";
import { SiCodereview } from "react-icons/si";
import { SiMaterialdesignicons } from "react-icons/si";
import { FcDataEncryption } from "react-icons/fc";
import { TiTick } from "react-icons/ti";

import { Link } from 'react-router-dom'

const Teams = () => {
    return (
        <main className='font-poppins homeSection text-white'>
            <h1 className='text-4xl text-center font-[700] pt-40'>Empowering <span className='text-[#04e384]'>Team Collaboration</span></h1>
            <section className='w-[1300px] mx-auto flex items-center gap-28'>
                <div className='flex-1 py-40 space-y-4'>
                    <p className='text-[32px] font-[600]'>Team Innovators</p>
                    <p className='text-[16px] text-justify text-gray-300'>Just because you are on a Team doen't mean that you can only use DevBlend as part of that Team. In fact, you can switch back and forth in and out of Team Context with a single click.No logging in and out.</p>
                </div>

                <div className='flex-1 pt-20'>
                    <img src={teamplan} alt="" className='rounded-xl' />
                </div>
            </section>

            <section className='w-[1300px] mx-auto pt-36'>
                <div className='w-[1300px] mx-auto space-y-5 text-start'>
                    <h1 className='text-[18px] text-center sm:text-[22px] md:text-[26px] lg:text-4xl font-[700]'>Teams are a way to work together on DevBlend.</h1>
                    <p className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[21px] text-center'>People who are on the same team have shared access to DevBlend in a way that allows you to work together better.</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Host in DevBlend Code Editor.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Host controls access privileges.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Share servers,terminals, and consoles.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Everyone can create and edit Team Pens.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Audio, video, text chat and Collaborations.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Code alone or with a group.</p>
                        </div>
                        <div className='flex items-center gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                            <TiTick className='border border-[#04e384] bg-[#04e384] rounded-full w-5 h-5' />
                            <p>Same-file simultaneous editing.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='2xl:max-w-[1300px] mx-auto pt-36'>
                <h1 className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-4xl font-[700] text-center mb-5'>Perfect for All Kinds of Teams</h1>
                <p className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[21px] text-center mb-12'>No two teams look alike. Regardless of how your team chooses to collaborate. DevBlend Teams can Help!</p>
                <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div className='space-y-5'>
                        <div className='flex justify-center'>
                            <VscAccount className='w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 text-[#04e384]' />
                        </div>
                        <h1 className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-[600] text-center'>Pairing & Mobbing</h1>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-justify leading-relaxed'>Perfect for collaboratin across the officeor around the globe. Supports multiple groups coding at the same time with a seamless flow for moving between groups.</p>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex justify-center'>
                            <SiCodereview className='w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 text-[#04e384]' />
                        </div>
                        <h1 className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-[600] text-center'>Code Review</h1>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-justify leading-relaxed'>It's simple to host a peer review, even if everyone uses different IDEs. The host maintains control, granting read-only access or letting others code too.</p>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex justify-center'>
                            <SiMaterialdesignicons className='w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 text-[#04e384]' />
                        </div>
                        <h1 className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-[600] text-center'>Project Design</h1>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-justify leading-relaxed'>Nowhere is team collaboration more important than in design. CodeTogether is great for designing the object model to start your project off right.</p>
                    </div>
                    <div className='hidden lg:flex'>
                        <div className='space-y-5'>
                            <div className='flex justify-center'>
                                <FcDataEncryption className='w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 text-[#04e384]' />
                            </div>
                            <h1 className='text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-[600] text-center'>End-to-end encryption</h1>
                            <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-justify leading-relaxed'>Devblend is designed to keep code safe and secure by keeping the source code on the host system and only relaying necessary information using end-to-end encryption. </p>
                        </div>
                    </div>

                </div>
                <p className='border-2 mt-10 border-[#04e384] rounded-full' ></p>
            </section>

            <section className='flex items-center justify-center py-14'>
                <div className='w-[900px] mx-auto space-y-4'>
                    <h1 className='text-4xl font-[700]'>Any questions?</h1>
                    <p className='text-[18px]'>We're happy to answer any questions you might have.</p>
                    <p className='text-[16px] text-justify leading-relaxed'>We're also happy to try and accommodate any special needs your Team might have. For example, we know that some organizations need to pay for things via purchase order with special terms. We'll do our best to accommodate things like that.</p>
                    <p className='text-[17px]'>Email us! <Link to={'/Contact'} className='text-[#04e384] underline cursor-pointer'>support@DevBlend</Link></p>
                </div>
            </section>
        </main>
    )
}

export default Teams
