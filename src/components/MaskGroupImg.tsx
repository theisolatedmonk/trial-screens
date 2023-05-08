"use client";
import React from "react";
import Image from "next/image";
import maskGroup from "@/images/Mask group.png";
import weworkLogo from "@/images/wework-logo-1 2.png";
import { MsgShare } from "./MsgShare";
import { BtnAnt } from "./BtnCompactAntdesign";

export function MaskGroupImg() {
  return (
    <div
      className="  relative 
     w-full h-[238px]  sm:h-[459px] lg:flex justify-center flex-col "
    >
      <Image
        src={maskGroup}
        alt=""
        className="absolute   
    h-full w-full"
      />
      <div className="flex flex-col absolute justify-center items-center top-6 gap-14  w-full sm:top-28">
        <BtnAnt />
        <div className="flex flex-col p-4 justify-center items-center  bg-slate-200 p">
          <Image src={weworkLogo} alt="" className=" " />
          <p className="font-bold text-sm">{`For all the ways you work, we're here`}</p>
        </div>
      </div>
    </div>
  );
}
