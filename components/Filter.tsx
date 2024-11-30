import React, { useState } from 'react';
import { Button } from './ui/button';

const Filter = () => {
    const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

    const toggleSlotSelection = (slot: string) => {
        if (selectedSlots.includes(slot)) {
            setSelectedSlots(selectedSlots.filter((s) => s !== slot));
        } else {
            setSelectedSlots([...selectedSlots, slot]);
        }
    };

    const renderSlotButton = (slot: string) => (
        <div
            className={`date-select-button cursor-pointer text-center px-4 py-2 rounded-[8px] ${selectedSlots.includes(slot) ? 'bg-brand text-white !border-brand' : 'bg-white text-black'
                }`}
            onClick={() => toggleSlotSelection(slot)}
        >
            {slot}
        </div>
    );

    return (
        <div className="w-full my-10">
            <h1 className="font-[500] text-[24px] mb-10">Filter by</h1>
            <div className="flex gap-[12px] items-center justify-center mb-10">
                <Button className="w-[220px] h-[57px] bg-black text-white rounded-[90px] px-[20px] py-[14px]">
                    Slot
                </Button>
                <Button
                    variant="ghost"
                    className="w-[220px] h-[57px] bg-white text-black rounded-[90px] px-[20px] py-[14px]"
                >
                    Date
                </Button>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h1 className="font-[500] text-[24px] mb-10">Select Slots</h1>
                <div className="flex gap-10">
                    {['Morning', 'Afternoon', 'Evening'].map((timeOfDay, index) => (
                        <div key={index} className="flex flex-col gap-5">
                            <h2 className="font-inter font-[500] text-[16px] text-offwhite capitalize">{timeOfDay}</h2>
                            <div className="grid grid-cols-2 gap-5">
                                {timeOfDay === 'Morning' &&
                                    ['8:00 - 8:45 AM', '9:00 - 9:45 AM', '10:00 - 10:45 AM', '11:00 - 11:45 AM'].map(
                                        (slot) => renderSlotButton(slot)
                                    )}
                                {timeOfDay === 'Afternoon' &&
                                    ['12:00 - 12:45 PM', '1:00 - 1:45 PM', '2:00 - 2:45 PM', '3:00 - 3:45 PM'].map(
                                        (slot) => renderSlotButton(slot)
                                    )}
                                {timeOfDay === 'Evening' &&
                                    ['4:00 - 4:45 PM', '5:00 - 5:45 PM', '6:00 - 6:45 PM', '7:00 - 7:45 PM'].map(
                                        (slot) => renderSlotButton(slot)
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedSlots.length === 0 && (
                    <h1 className="text-[#8E8E8E] font-[18px]">
                        i. Please select one or more slots to see when the slot or slots are next available
                    </h1>
                )}

            </div>
        </div>
    );
};

export default Filter;
