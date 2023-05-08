// "use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import RightAngletag from "./SVG/RightAngletag";
import Image from "next/image";
import ellips from "@/images/Ellipse 704.png";
import MenuSvg from "@/assets/menu.svg";

import {
  DeleteSVG,
  HelpSVG,
  InboxSVG,
  NotificationsSvg,
  SearchSVG,
} from "@/components/AndroidMenu/MobileMenuSVG";
import { MenuBtn } from "./SVG/MenuBtn";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <MobileMenu menu={menu} setMenu={setMenu} />
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
        <div className="sm:hidden"  onClick={() => setMenu(true)}>
          {" "}
          <MenuBtn  onClick={() => setMenu(true)} />
        </div>
      </div>
    </>
  );
}

// function MobileMenu({
//   menu,
//   setMenu,
// }: {
//   menu: boolean;
//   setMenu: Dispatch<SetStateAction<boolean>>;
// }) {
//   return (
//     <div
//       className={`w-72 text-black h-screen bg-black   gap- z-30 fixed top-0 bg-opacity-70 text-xs font-bold  ${
//         menu ? "flex" : "hidden"
//       } `}
//     >
//       <div className="w-[190px] bg-white p-4 flex flex-col gap-8">
//         <Image
//           className="h-3 w-3"
//           src={close}
//           alt=""
//           onClick={() => setMenu(false)}
//         />
//         <ul className="gap-4 flex flex-col ">
//           <li>Collection</li>
//           <li>'Men'</li>
//           <li>Women</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

export function MobileMenu({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`flex flex-col w-full  h-full  font-Figtree p-2  gap- z-30 fixed top-0 bg-white ${
        menu ? "flex" : "hidden"
      }`}
    >
      <section
        className="flex justify-end w-full p-4"
       
      >
        <DeleteSVG onClick={() => setMenu(false)} />
      </section>
      <div
        className="gap-4 flex flex-col p-10"
      >
        <div className="flex gap-2 items-center px-4">
          <Image src={ellips} alt={""} />
          <div className="flex flex-col  ">
            <p className=" font-bold">Jane Smith</p>
            <p className="">Sales Executive</p>
          </div>
        </div>
        <hr className="w-full" />
        <div className=" flex gap-2 items-center px-4">
          <SearchSVG />
          <p>Search</p>
        </div>
        <hr className="w-full" />
        <div className=" flex gap-2 items-center px-4">
          <InboxSVG />
          <p>Inbox</p>
        </div>
        <hr className="w-full" />
        <div className=" flex gap-2 items-center px-4">
          <NotificationsSvg />
          <p>Notifications</p>
        </div>
        <hr className="w-full" />
        <div className=" flex gap-2 items-center px-4">
          <HelpSVG />
          <p>Help</p>
        </div>
        <hr className="w-full" />
      </div>
    </div>
  );
}
