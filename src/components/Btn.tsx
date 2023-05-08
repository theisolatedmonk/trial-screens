"use client";
import React from "react";
import { Button, Space } from "antd";
const headerLinks = [
  { link: "Basic Info", active: true },
  { link: "File", active: false },
  { link: "Mutual Action Plan", active: false },
  { link: "Contact", active: false },
];

export const Btn: React.FC = () => (
  <div className=" flex text-[#BDC3C2]  justify-center sm:justify-between">
    <section className="flex gap-1">
      {headerLinks.map(({ link, active }, i) => (
        //   <Button className={`rounded-b-none`}>{link}</Button>
        <>
          {/* will render on mobile screen  */}
          <Button
            size="small"
            style={ {borderBottomLeftRadius: '0%',
            borderBottomRightRadius: '0%'}} 
            key={i}
            className={`   sm:hidden rounded-b-none font-semibold  sm:font-bold text-sm sm:text-lg ${
              active ? "text-[#00B686]" : "text-[#BDC3C2]"
            }`}
          >
            {link}
          </Button>
          {/* will render on tablet screen  */}
          <Button
            // size=""
            key={i}
            className={` hidden sm:flex  rounded-b-none font-semibold  sm:font-bold text-sm sm:text-lg ${
              active ? "text-[#00B686]" : "text-[#BDC3C2]"
            }`}
          >
            {link}
          </Button>
        </>
      ))}
    </section>
    <Button className="hidden text-[#BDC3C2] text-lg font-bold sm:flex text-center rounded-b-none">
      Internal Actions
    </Button>
  </div>
);
