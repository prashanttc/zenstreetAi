"use client";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Calendarbox = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const handleDateClick = (day: number) => {
    if (selectedDate === day) {
      setSelectedDate(null);
    } else {
      setSelectedDate(day); 
    }
  };
 const handleclick=()=>{
  router.push('/booking-confirmation')
 }
  return (
    <>
      <div className="w-[600px] bg-white p-6 rounded-lg shadow-lg font-sans text-center drop-shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-[16px] font-[600] text-black">Available date</span>
            <span className="h-3 w-3 bg-blue-500 "></span>
          </div>
          <div className="flex gap-3">
            <span className="text-base font-semibold text-gray-800">2024 Aug</span>
            <ChevronRight className="text-brand" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {weekdays.map((day) => (
            <div
              key={day}
              className="text-xs font-bold uppercase text-black"
            >
              {day}
            </div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`text-sm text-gray-600 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200
              ${selectedDate === day
                  ? "bg-brand !text-white font-bold"
                  : "hover:bg-gray-100"
                }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <Button disabled={selectedDate===null} className={`${selectedDate=== null?'bg-offwhite border-none ':'bg-brand '} my-32 text-white w-[630px] h-[64px] border-[2px] border-brand cursor-pointer`} onClick={handleclick}>Proceed</Button>
    </>
  );
};

export default Calendarbox;
