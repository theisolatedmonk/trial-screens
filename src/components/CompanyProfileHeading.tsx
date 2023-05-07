"use client";
import { MoreOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {}

export default function CompanyProfileHeading({}: Props) {
  return (
    <div className="flex justify-between w-full">
        <p>Company Profile</p>
        <MoreOutlined />
      </div>
  )
}