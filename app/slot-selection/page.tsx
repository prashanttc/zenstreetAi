"use client";
import Calendarbox from '@/components/Calendarbox';
import Filter from '@/components/Filter';
import { MapPin } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SlotSelection = () => {
  return (
    <div className='w-screen h-screen py-[108px] px-[146px] relative'>
      <Link href='/'><Image src="/assets/back-black.png" width={28} height={20} alt='back' className='h-auto absolute left-20 top-20' /></Link>
      <div className=' w-full h-full flex flex-col items-center '>
        <div className='w-[527px] h-[330px] flex flex-col gap-[30px]'>
          <h1 className='text-center font-[500] text-[20px] mb-[40px]'>Select therapy mode</h1>
          <div className='flex gap-[79px]'>
            <div className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
              <div className=' bg-brand rounded-[12px] w-[123px] h-[123px] flex items-center justify-center'>
                <Image src="/assets/homewhite.png" width={24} height={24} alt='home' />
              </div>
              <h2 className='text-[14px] font-inter font-[600] text-brand'>In person</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className='bg-white rounded-[12px] w-[123px] h-[123px] flex items-center justify-center'>
                <Image src="/assets/video.png" width={29} height={29} alt='home' />
              </div>
              <h2 className='text-[14px] font-inter font-[600] text-brand'>Video</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className='bg-white rounded-[12px] w-[123px] h-[123px] flex items-center justify-center'>
                <Image src="/assets/call.png" width={29} height={29} alt='home' />
              </div>
              <h2 className='text-[14px] font-inter font-[600] text-brand'>Call</h2>
            </div>
          </div>
          <div className='flex gap-2'>
            <MapPin/>
<h2 className='font-inter font-[500] text-[16px] text-[#888888]'>3rd Floor, A2, 35, Block A2, Delhi</h2>
          </div>
        </div>
        <Filter/>
        <Calendarbox/>
      </div>
    </div>
  )
}

export default SlotSelection
