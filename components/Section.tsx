"use client";
import { MapPin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import SharePopUp from "./SharePopUp"
import { useRouter } from "next/navigation";

const Section = () => {
  const router = useRouter()
  const handleclick=()=>{
  router.push('/booking-session')
  }
  return (
    <div className="w-full h-full relative">
      {/*back button */}
      <Link href='/'
        className="profile-box">
        <Image src='/assets/back.png' height={20} width={20} alt="back button" />
        <h2 className="text-white text-[22px]">Back</h2>
      </Link>
      {/* main profile */}
      <div className="bg-white rounded-[16px] w-[415px] h-[500px] fixed top-[132px] left-[78px] flex items-center justify-center p-[54px]">
        <div className="w-[307px] h-[433px] flex gap-[12px] flex-col items-center ">
          <Image src='/assets/photo.jpeg' height={238} width={208} alt="photo" className="h-[238px] object-cover w-[238px] object-top rounded-[26px]" />
          <div className="w-[268px] h-[33px] flex gap-[10px] justify-center items-center">
            <h1 className="text-[22px] font-[600]">Shweta Verma</h1>
            <Image src='/assets/verify.png' height={20} width={22} alt="verify" />
          </div>
          <h2 className=" text-[17px] text-offwhite ">Consultant Clinical Psychologist</h2>
          <h1 className="font-semibold text-[16px]"> 10+ years of experince</h1>
          <div>
            <h1 className="font-medium"> starts at  <b className="text-[20px]">1,200</b><span className="text-offwhite ">/Session</span></h1>
          </div>
          <div className="w-[147px] flex gap-[12px] items-center justify-center">
            <MapPin className="text-[24px]" />
            <h3 className="font-light text-[14px] text-offwhite">Block A2,Delhi</h3>
          </div>
        </div>
        <SharePopUp />
      </div>
      {/*Submit buttom */}
      <Button variant='ghost' className="book-session-button" onClick={handleclick}>
        <h1 className="font-[600] text-[20px] text-brand">Book Session</h1>
      </Button>
    </div>
  )
}

export default Section
