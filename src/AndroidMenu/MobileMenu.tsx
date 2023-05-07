import React from "react";
import ellips from "@/images/Ellipse 704.png";
import Image from "next/image";

import {
  DeleteSVG,
  HelpSVG,
  InboxSVG,
  NotificationsSvg,
  SearchSVG,
} from "./MobileMenuSVG";

export function MobileMenu() {
  return (
    <div className="flex flex-col w-full    font-Figtree p-2">
      <section
        className="flex justify-center w-full "
        style={{
          justifyContent: "flex-end",
        }}
      >
        <DeleteSVG />
      </section>
      <div className="gap-4 flex flex-col" style={{
          padding: "44px"
        }}>
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
