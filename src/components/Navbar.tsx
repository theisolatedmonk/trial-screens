// "use client";
import React from "react";
import RightAngletag from "./SVG/RightAngletag";
import Image from "next/image";
import ellips from "@/images/Ellipse 704.png";
import {
  DeleteSVG,
  HelpSVG,
  InboxSVG,
  NotificationsSvg,
  SearchSVG,
} from "@/components/AndroidMenu/MobileMenuSVG";
import { MenuBtn } from "./SVG/MenuBtn";

export function Navbar() {
  return (
    <div className="flex justify-between items-center  w-full ">
      <div className="flex pl-2 gap-2 items-center">
        <p className="h-6 w-6 bg-[#00B686] rounded-full ring-8 ring-[#04433B] "></p>
        <RightAngletag />
      </div>

      <div className=" hidden gap-2 items-center sm:flex">
        <SearchSVG />
        <InboxSVG />
        <NotificationsSvg />
        <HelpSVG />
        <Image src={ellips} alt={""} />
      </div>
      <div className="sm:hidden">
        {" "}
        <MenuBtn />
      </div>
    </div>
  );
}
