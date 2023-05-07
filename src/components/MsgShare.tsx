"use client";
import React from 'react';
import { Divider } from 'antd';
import { MessageOutlined, ShareAltOutlined } from '@ant-design/icons';

export const MsgShare: React.FC = () => (
  <>
  <div className='relative bg-yellow-300 w-full'>
  <div className=' flex absolute w-full ' >
    <Divider type="vertical" />
    <MessageOutlined />
    <Divider type="vertical" />
    <ShareAltOutlined  className=''/>
    </div>
   <p className='h-5 text-sm w-5 text-center left-5 rounded-full bg-green-300 absolute bottom-[-5px]'>3</p>
  </div>
    
  </>
);
