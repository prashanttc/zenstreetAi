"use client";

import Image from "next/image";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronUpIcon } from "lucide-react";

const Testimonial = () => {
    const [toggle, setToggle] = useState(false);

    const toggleReadmore = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-[24px] font-[500]'>Client Testimonials</h1>
                <span className='text-[18px] flex items-center gap-[9px] font-[500] text-[#3D3D3D] cursor-pointer' onClick={toggleReadmore}>
                    {!toggle ? "Show more" : "Show less"}
                    {!toggle ? <Image src='/assets/dropdown.png' height={26} width={36} alt="dropdown" /> :
                        <ChevronUpIcon />}

                </span>
            </div>
            <div className="grid grid-cols-2 gap-10 ">
                <TestimonialCard quote="The guidance I received helped me manage my stress and live a more balanced life." author="Anoymous" />
                <TestimonialCard quote="Therapy helped me build self-esteem and confidence that I never thought possible." author="Anoymous" />
                {toggle && <>
                    <TestimonialCard quote="The guidance I received helped me manage my stress and live a more balanced life." author="Anoymous" />
                    <TestimonialCard quote="Therapy helped me build self-esteem and confidence that I never thought possible." author="Anoymous" />
                    <TestimonialCard quote="The guidance I received helped me manage my stress and live a more balanced life." author="Anoymous" />
                    <TestimonialCard quote="Therapy helped me build self-esteem and confidence that I never thought possible." author="Anoymous" />
                </>}

            </div>
        </>
    )
}

export default Testimonial
