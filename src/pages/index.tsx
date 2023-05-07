import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import HearderTxt from "@/components/HearderTxt";

import bannerImg from "@/images/bannerImg.png";
import maskGroup from "@/images/Mask group.png";
import { MoreOutlined, RightOutlined } from "@ant-design/icons";
import {SubHeading} from "@/components/SubHeading";
import { Btn } from "@/components/Btn";
import CompanyProfileHeading from "@/components/CompanyProfileHeading";
import { BtnCompact } from "@/components/BtnCompact";
import { MaskGroupImg } from "@/components/MaskGroupImg";
import { MsgShare } from "@/components/MsgShare";

// import { Button } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-2 font-Figtree ">
      <Navbar />
      <hr className="w-full" />
      <HearderTxt />
      <Image src={bannerImg} alt="" />
      {/* <Button>Button</Button> */}

      <SubHeading />
      <Btn />
      <hr className="w-full" />
      <CompanyProfileHeading />
      <MaskGroupImg/>
      <MsgShare/>

     
    
    </main>
  );
}
