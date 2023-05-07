import React from "react";

import {
  DownloadOutlined,
  HeartOutlined,
  LikeOutlined,
  CommentOutlined,
  StarOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { DownloadSvg, NumSvg, PdfSvg, ShareSvg, ZoomInSvg, ZoomOutSvg } from "@/SVG/CompactSvg";

export const BtnAnt: React.FC = () => (
  <div className="flex gap-2 border-1 rounded-xl items-center">
    
      <Tooltip title="Like ">
        <Button icon={<PdfSvg />}className=" border-none " />
      </Tooltip>
     
      <Tooltip title="Comment">
      <Button icon= {<NumSvg />}  className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-black"/>
      <Tooltip title="Star">
        <Button icon={<DownloadSvg />}className=" border-none" />
      </Tooltip>
      <div className="w-[1px] h-5 items-center bg-black"/>
      <Tooltip title="Heart">
        <Button icon={<ZoomOutSvg />} className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-black"/>
      <Tooltip title="Share">
        <Button icon={<ZoomInSvg />} className=" border-none"/>
      </Tooltip>
      <div className="w-[1.5px] h-5 items-center bg-black"/>
      <Tooltip title="Download">
        <Button icon={<ShareSvg />} className=" border-none"/>
      </Tooltip>
    
  </div>
);

// /DownloadSvg,
//   PdfSvg,
//   ShareSvg,
//   ZoomOutSvg,
//   ZoomInSvg,
//   NumSvg,