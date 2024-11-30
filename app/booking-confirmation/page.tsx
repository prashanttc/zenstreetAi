import Bookingform from '@/components/Bookingform'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookingConfirm = () => {
    return (
        <div className='w-screen h-screen py-[108px] px-[146px] relative flex justify-center items-center '>
            <Link href='/'><Image src="/assets/back-black.png" width={28} height={20} alt='back' className='h-auto absolute left-20 top-20  ' /></Link>
            <div className='rounded-3xl h-fit pb-20 w-[874px] drop-shadow-2xl bg-white flex flex-col items-center mt-32'>
                <div className='h-[141px] px-[51px] w-full bg-brand rounded-t-3xl flex items-center justify-between'>
                    <div className='w-[127px] h-[100px] flex flex-col gap-[14px] items-center '>
                        <div className='flex flex-col items-center'>
                            <Image src='/assets/calendar.png' height={21} width={21} alt='calendar' />
                            <h1 className='text-[12px] text-white font-inter'>Change date</h1>
                        </div>
                        <div className='flex flex-col gap-[6px] text-white items-center'>
                            <h1 className='text-[18px] font-[600] font-inter'>Sat, 06 Aug</h1>
                            <h1 className='text-[14px] font-[500] font-inter'>3:30 PM - 4:20 PM</h1>
                        </div>
                    </div>
                    <h1 className='text-white font-[600] text-[24px]'>2,400/-</h1>
                </div>
                <div className='w-[624px] h-[594px] mt-[51px] flex flex-col gap-[26px]'>
                    <Bookingform />
                 </div>
             
            </div>
        </div>
    )
}

export default BookingConfirm
