"use client";
import React from "react";
import { Button, Space } from "antd";
const headerLinks = [
  { link: "Basic Info", active: true },
  { link: "File", active:false  },
  { link: "Mutual Action Plan", active: false },
  { link: "Contact", active: false },
  
];

export const Btn: React.FC = () => (
  <div className=" flex  text-[#BDC3C2] font-bold text-xl justify-center sm:justify-between">
    <Space size={[8, 16]}>
    {headerLinks.map(({ link, active }) => (
      //   <Button className={`rounded-b-none`}>{link}</Button>
      <Button
        className={`rounded-b-none font-bold text-sm justify-center sm:justify-between ${
          active ? "text-[#00B686]" : "text-[#BDC3C2] "
        }`}
      >
        {link}
      </Button>
    ))}
  </Space>
  <Button className="hidden text-[#BDC3C2] font-bold text-sm justify-center sm:justify-between  sm:flex">Internal Actions</Button>
  </div>
);
