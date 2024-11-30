"use client";
import { Credentials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react'
import Testimonial from './Testimonial';

const MainContent = () => {

    const [toggle, isToggle] = useState(false)

    const toggleReadmore = () => {
        isToggle(!toggle)
    }
    return (
        <div className='w-[777px] h-[1752px] absolute top-[100px] left-[641px] gap-[96px] flex flex-col'>

            {/* about me */}
            <div className='w-[704px] gap-[8px] flex flex-col relative '>
                <h1 className='text-[24px] font-[500]'>About me</h1>
                <p className='text-aboutme'>Hello, I&apos;m Shweta, a licensed therapist dedicated to guiding individuals through life&apos;s challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices</p>
                {toggle && <p className='text-aboutme'>
                    My commitment to continuous learning keeps me updated with the latest therapeutic techniques, allowing me to provide the best possible care. Whether you seek stress management strategies or personal growth, I am here to empower you on your journey towards emotional well-being. I offer convenient online consultation bookings, making it easier for you to take the first step towards a healthier, happier life
                </p>}
                <span className='bottom-0 right-[3px] text-sm absolute underline text-brand cursor-pointer' onClick={toggleReadmore}>
                    {!toggle ? "read more" : "read less"}
                </span>
            </div>

            {/* credentials */}
            <div className='flex flex-col gap-[24px]'>
                <h1 className='text-[24px] font-[500]'>Credentials</h1>
                <div className='w-[542px] h-[249px]'>
                    <ul className='flex flex-col gap-[24px]'>
                        {Credentials.map((cred, index) => (
                            <li className='flex gap-[14px]' key={index}>
                                <div className='text-[24px] text-[#1776E0]'>{cred.icon}</div> <h1 className='text-credentials text-[18px]'>{cred.desc}</h1></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/*available */}
            <div className='flex flex-col gap-[24px]'>
                <h1 className='text-[24px] font-[500]'>Available on</h1>
                <div className='flex gap-[64px]'>
                    <div className='w-[102px] h-[127px] flex flex-col gap-[6px] text-center'>
                        <div className='w-[102px] h-[102px] bg-[#C6E3FF] rounded-[11px] flex justify-center items-center'>
                            <Image src='/assets/home.png' height={30} width={30} alt='home' />
                        </div>
                        <h3 className='text-[16px] text-[#516E8A] font-inter'>In-person</h3>
                    </div>
                    <div className='w-[134px] items-center  h-[127px] flex flex-col gap-[6px]  text-center'>
                        <div className='w-[102px] h-[102px] bg-[#C6E3FF] rounded-[11px] flex justify-center items-center'>
                            <Image src='/assets/phone.png' height={30} width={30} alt='home' />
                        </div>
                        <h3 className='text-[16px] text-[#516E8A] font-inter'>Voice/Video call</h3>
                    </div>
                </div>
            </div>
            {/*therapy offer */}
            <div className='flex flex-col gap-[18px]'>
                <h1 className='text-[24px] font-[500]'>I offer therapy for</h1>
                <div className='w-[745px] flex gap-[18px] flex-wrap '>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Stress Management</div>
                    </div>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Relationship Skills</div>
                    </div>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Anxiety Reduction</div>
                    </div>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Depression Relief</div>
                    </div>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Behavioral</div>
                    </div>
                    <div className='border-gradient'>
                        <div className='therapy-offer'>Trauma Healing</div>
                    </div>
                </div>
            </div>
            {/*iam from section */}
            <div className='flex items-center w-[623px] justify-between'>
                <div className='flex flex-col gap-[14px]'>
                    <div className='flex gap-[6px]'>
                        <h1 className='text-[24px] font-[500]'>Iam from</h1>
                        <Image src='/assets/Region.png' height={20} width={40} alt='region' />
                    </div>
                    <h2 className='text-[20px] text-gray-500'>Chennai, India</h2>
                </div>

                <div className='flex flex-col gap-[14px]'>
                    <h1 className='text-[24px] font-[500]'>Languages</h1>
                    <h2 className='text-[20px] text-gray-500'>English, Hindi</h2>
                </div>


            </div>
            {/*client testimonial */}
            <div className=' mr-10 h-[409px] flex flex-col gap-[38px]'>
          <Testimonial/>
            </div>
        </div>
    )
}

export default MainContent