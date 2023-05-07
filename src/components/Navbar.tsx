// "use client";
import React from "react";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";

export function Navbar() {
  return (
    <div className="flex justify-between items-center  w-full ">
      <div className="flex gap-2 items-center">
        <p className="h-8 w-8 bg-green-700 rounded-full ring-4 ring-black"></p>
        <RightOutlined />
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center hidden">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="hidden">image</div>
        <MenuOutlined />
      </div>
    </div>
  );
}
