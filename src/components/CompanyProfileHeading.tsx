"use client";
import { MoreOutlined } from '@ant-design/icons'
import React from 'react'
import { ComponyProfileSvg } from './SVG/CompanyProfile';

type Props = {}

export default function CompanyProfileHeading() {
  return (
    <div className="flex justify-between p-2 w-full ">
        <p className='font-bold text-[#233735] text-[16px] sm:text-2xl'>Company Profile</p>
        <MoreOutlined  className='sm:hidden '/>
       <div className=" hidden sm:flex">
       <ComponyProfileSvg/>
       </div>
      </div>
  )
}