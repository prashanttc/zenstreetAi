"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import Link from 'next/link'

type Props = {
    therapy: string
}
const Session = ({ therapy }: Props) => {
    const [selectDuration, setSelectDuration] = useState("")
    return (
        <div className='session-card px-[62px] py-[40px] flex flex-col items-center '>
            <div className='flex gap-2 items-center mb-6'>
                <Image src='/assets/ruppee.png' height={20} width={20} alt='money' className='h-[24px]' />
                <h1 className='text-4xl font-semibold text-white'>3,200</h1>
                <h3 className='text-xl text-white/40'>/session</h3>
            </div>
            <div className='flex gap-3 '>
                <Button variant='ghost' className={` border-[2px] border-white/30 rounded-[42px] w-[72px] h-[25px] text-white/60 px-[6px] py-[13px] text-[10px] font-inter mb-10 ${selectDuration === '45 min' && 'border-white text-white'}`} onClick={() => setSelectDuration('45 min')}>45 mins</Button>

                <Button variant='ghost' className={` border-[2px] border-white/30 rounded-[42px] w-[72px] h-[25px] text-white/60 px-[6px] py-[13px] text-[10px] font-inter mb-10 ${selectDuration === '60 min' && 'border-white text-white'}`} onClick={() => setSelectDuration('60 min')}>60 mins</Button>

                <Button variant='ghost' className={` border-[2px] border-white/30 rounded-[42px] w-[72px] h-[25px] text-white/60 px-[6px] py-[13px] text-[10px] font-inter mb-10 ${selectDuration === '90 min' && 'border-white text-white'}`} onClick={() => setSelectDuration('90 min')}>90 mins</Button>

            </div>
            <h1 className='font-inter font-[600] text-white text-[20px]'>{therapy}</h1>
            <Separator className='w-[90%] mt-2 mb-5 bg-white/40' />
            <ol className='list-disc text-white text-[14px] flex flex-col gap-[12px] mb-10'>
                <li className=''>Joint Evaluation</li>
                <li className=''>Communication Exercises</li>
                <li className=''>Conflict Resolution</li>
                <li className=''>Goal Setting</li>
                <li className=''>Follow up plan</li>
            </ol>
            <Link href='/slot-selection'>
                <Button variant='ghost' className='w-[206px] h-[50px] bg-white text-brand px-[34px] py-[14px] rounded-[80px] font-inter font-[600] text-[18px]'>Proceed</Button>
            </Link>
        </div>
    )
}

export default Session
