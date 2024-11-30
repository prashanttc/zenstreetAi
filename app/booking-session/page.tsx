
"use client";
import Session from '@/components/Session';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const BookingSession = () => {
    const [iscancel, setIscancel] = useState(false);
    const handlecross = () => {
        setIscancel(true)
    }
    return (
        <div className='w-screen h-screen relative p-20 py-16'>

             <div className='flex gap-6'>
                <Link href='/'><Image src="/assets/back-black.png" width={28} height={20} alt='back' className='h-auto' /></Link>
                <h1 className='font-[600] font-inter text-[18px]'>Available Sessions</h1>
            </div>

            {!iscancel &&
                <div className='booking-session-info'>
                    <Image src='/assets/info.png' height={24} width={24} alt='info' className='text-[#0085D0]' />
                    <h1 className='text-[12px] font-inter font-[500] text-[#0085D0]'>Click on the duration to see the pricing details</h1>
                    <Button variant='ghost' onClick={handlecross}>
                        <Image src='/assets/cross.png' height={24} width={14} alt='cross' className='text-[#0085D0] cursor-pointer' />
                    </Button>
                </div>
            }

            <div className=' w-[80%] ml-[10%] mt-[90px] h-[500px] items-center flex justify-evenly'>
                  <Session therapy='Group Therapy'/>
                  <Session therapy='Individual Therapy'/>
                  <Session therapy='Couple Therapy'/>
            </div>
        </div>
    )
}

export default BookingSession
