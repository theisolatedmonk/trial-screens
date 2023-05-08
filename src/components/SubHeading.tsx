"use client";
import React from 'react'

export  function SubHeading() {
  return (
    <div className='flex justify-between w-full'>
        <h1 className="text-[#233735] font-bold text-[16px] sm:text-2xl">Project Scope Recap</h1>

     <div className='flex flex-col'>
     <div className='flex text-[10px] justify-between   '>
            <p className='text-[10px]'>Mutual Action Plane</p>
            <p className='text-green-400 font-extrabold'>3%</p>
        </div>
        <div className='flex h-1 gap-1'>
          <div className='w-1 h-1 rounded-l-full bg-green-500'></div>
        {new Array(15).fill(null).map((_, index) => ( <p key={index} className='flex h-1 w-1 bg-gray-500'></p>
        
          
            ))}
            <div className='w-1 h-1 rounded-r-full bg-gray-500'></div>
            
        </div>
     </div>
    </div>
  )
}
// const App: React.FC = () => (
//   <Space size={[2, 16]} wrap>
//     {new Array(17).fill(null).map((_, index) => (
//       // eslint-disable-next-line react/no-array-index-key
//       <Button key={index} className="w-1 h-1">Button</Button>
//     ))}
//   </Space>
// );

