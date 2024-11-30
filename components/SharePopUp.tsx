"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { share } from "@/constants";

const SharePopUp = () => {
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("http://www.therapist-swetha.com/profile/view").then(() => {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Share2 className="text-brand absolute top-10 right-10 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="max-w-[641px] pt-[32px] pl-[62px] flex flex-col gap-[40px] pb-0">
          <DialogHeader>
            <div className="flex gap-[110px] ">
              <DialogTitle className="text-[24px] mb-[40px]">Share</DialogTitle>
              {toast && (
                <div className="  w-[172px] h-[49px] bg-[#72C4FF] text-black rounded-[14px] flex justify-center items-center">
                  <h1 className="text-[14px]">Link copied!</h1>
                </div>
              )}
            </div>
            <DialogDescription>
              <div className="w-[489px] h-[58px] flex justify-between ">
                {share.map((share, index) => (
                  <div
                    key={index}
                    className="w-[64px] h-[58px] flex flex-col gap-[9px] justify-center items-center cursor-pointer"
                  >
                    {share.icon}
                    <h1 className="text-[#7F7F7F] text-[14px]"> {share.desc}</h1>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[16px] font-[600]">Page link</h2>
            <div className="flex items-center gap-5">
              <Input
                id="link"
                defaultValue="http://www.therapist-swetha.com/profile/view"
                readOnly
                className="h-[65px] w-[378px] text-[#686868] bg-[#EAEAEA]"
              />
              <Button
                type="button"
                onClick={handleClick}
                className="w-[140px] h-[50px] border-[2px] border-[#2C73DE] text-[#2C73DE] rounded-[80px] flex items-center justify-center"
              >
                Copy Link
              </Button>
            </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>

        </DialogContent>

      </Dialog>

    </>
  );
};

export default SharePopUp;
