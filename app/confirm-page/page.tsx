import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Heading */}
      <h1 className="text-[55px] font-bold text-black mb-4 text-center">
        Booking Confirmed!
      </h1>
      <p className="text-[18px] w-[705px] text-gray-600 text-center mb-8">
        Congratulations! Your therapy session has been successfully scheduled.
        We’re looking forward to helping you on your journey to better mental
        health.
      </p>

      {/* Instructions */}
      <div className="mb-10 mt-32">
        <h2 className="italic text-gray-700 mb-4">i. Instructions</h2>
        <ul className="list-disc list-inside text-black">
          <li className="font-inter font-[500] text-[16px]">
            A confirmation email with all the session details has been sent to{" "}
            <div className="font-semibold text-blue-500">aman123@gmail.com</div> 
          </li>
          <li className="font-inter font-[500] text-[16px] ">  
            If this is your first session, consider jotting down any key points
            or questions you want to discuss.
          </li>
        </ul>
      </div>

      {/* Back to Home Button */}
      <Link href="/">
        <Button className="bg-brand w-[500px] mt-20 text-white px-8 py-6 rounded-md text-lg font-medium hover:bg-blue-600 transition">
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default ConfirmationPage;
