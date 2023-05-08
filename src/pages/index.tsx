import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import HearderTxt from "@/components/HearderTxt";

import bannerImg from "@/images/bannerImg.png";
import { SubHeading } from "@/components/SubHeading";
import { Btn } from "@/components/Btn";
import CompanyProfileHeading from "@/components/CompanyProfileHeading";

import { MaskGroupImg } from "@/components/MaskGroupImg";


import { MobileMenu } from "@/components/AndroidMenu/MobileMenu";
import Msg from "@/components/SVG/Msg";
import  OverViewTable  from "@/components/OverviewTable";

export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-2 font-Figtree min-h- bg-[#F2FBF9]
     ">
      {/* <div className="hidden" ><MobileMenu /></div> */}
      <div className="flex flex-col gap-3" >
        <Navbar />
        <hr className="w-full " />
        <HearderTxt />
        <Image src={bannerImg} alt="" />
        
        <SubHeading />
        <div className="flex flex-col">
        <Btn />
        <hr className="w-full " />
        </div>
      <div className="flex gap-2 justify-start  w-full">
      <p className="sm:flex hidden h-[50%] 
        pt-3 overflow-hiddenow-">
        <OverViewTable/>
      </p>
      <div className="flex flex-col w-full">
       <CompanyProfileHeading />
        <MaskGroupImg />
       </div>
      </div>
        
        <Msg />
      </div>
    </main>
  );
}
