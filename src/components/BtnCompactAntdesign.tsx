import React from "react";


import { Button,  Tooltip } from "antd";
import { DownloadSvg, NumSvg, PdfSvg, ShareSvg, ZoomInSvg, ZoomOutSvg } from "@/components/SVG/CompactSvg";

export const BtnAnt: React.FC = () => (
  <div className="flex gap-4 border-1 rounded-md items-center px-1 text-[#D3D7D7] bg-blur-lg bg-opacity-70 bg-white h-9">
    
      <Tooltip title="">
        <Button icon={<PdfSvg />}className=" border-none " />
      </Tooltip>
     
      <Tooltip title="">
      <Button icon= {<NumSvg />}  className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-[#D3D7D7]"/>
      <Tooltip title="">
        <Button icon={<DownloadSvg />}className=" border-none" />
      </Tooltip>
      <div className="w-[1px] h-5 items-center bg-[#D3D7D7]"/>
      <Tooltip title="">
        <Button icon={<ZoomOutSvg />} className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-[#D3D7D7]"/>
      <Tooltip title="">
        <Button icon={<ZoomInSvg />} className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-[#D3D7D7]"/>
      <Tooltip title="">
        <Button icon={<ShareSvg />} className=" border-transparent "/>
      </Tooltip>
    
  </div>
);
