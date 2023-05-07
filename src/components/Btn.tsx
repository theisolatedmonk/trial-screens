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
  <Space size={[4, 16]}>
    {headerLinks.map(({ link, active }) => (
      //   <Button className={`rounded-b-none`}>{link}</Button>
      <Button
        className={`rounded-b-none ${
          active ? "text-[#00B686]" : ""
        }`}
      >
        {link}
      </Button>
    ))}
  </Space>
);
