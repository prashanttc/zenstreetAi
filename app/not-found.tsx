import Link from 'next/link'
import React from 'react'

const Errorpage = () => {
  return (
    <div className='w-full h-screen justify-center items-center gap-5 flex flex-col'>
        <h1 className='text-[#1F86D03D] text-[120px] font-[600]'>404</h1>
        <h1 className='text-[44px] font-[500] text-brand'>Oops! Page Not Found</h1>
        <p className='text-[18px] text-center text-offwhite w-[487px]'>It seems we can't find the page you're looking for, Let's get you back on track!</p>
        <Link href="/">
        <div className='h-[61px] w-[233px] bg-brand text-[20px] rounded-[90px] px-[14px] flex justify-center items-center py-[10px] text-white'>
            Back to home
            </div>
            </Link>
    </div>
  )
}

export default Errorpage
