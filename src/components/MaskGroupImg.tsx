"use client";
import React from 'react'
import Image from "next/image";
import { BtnCompact } from './BtnCompact'
import maskGroup from "@/images/Mask group.png";
import weworkLogo from "@/images/wework-logo-1 2.png";
import { MsgShare } from './MsgShare';
import { BtnAnt } from './BtnCompactAntdesign';



export  function MaskGroupImg() {
  return (
    <div className="  relative bg-black 
     w-full h-[238px] border-2 border-red-300  flex justify-center flex-col ">
    <Image src={maskGroup} alt="" className="absolute   
    h-full w-full" />
    <div className="flex flex-col absolute left-16 top-6 gap-14  border-2 border-red-300">
      {/* <BtnCompact /> */}
      <BtnAnt/>
      <div className="flex flex-col justify-center items-center p-2 bg-slate-200">
        <Image src={weworkLogo} alt=""  className='h-[43.02px] w-44'/>
        <p className='font-bold text-sm'>For all the ways you work, we're here</p>
      </div>
    </div>
    {/* <div className='absolute top-[160px]'><MsgShare /></div> */}
    {/* <p className='absolute top-36 left-5 text-white bg-green-500 h-5 w-5 text-center rounded-full'>3</p> */}
    
  </div>
  )
}