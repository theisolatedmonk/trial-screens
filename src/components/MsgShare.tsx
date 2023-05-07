"use client";
import React from 'react';
import { Divider } from 'antd';
import { MessageOutlined, ShareAltOutlined } from '@ant-design/icons';

export const MsgShare: React.FC = () => (
  <>
    <div className=' flex ' >
    <Divider type="vertical" />
    <MessageOutlined />
    <Divider type="vertical" />
    <ShareAltOutlined  className=''/>
    </div>
   
  </>
);
