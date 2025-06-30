'use client'
import React from 'react';
import { CgArrowsV } from 'react-icons/cg';

const activityData = [
  {
    id: 1,
    datetime: 'Jun 30, 2025 | 11:15 AM',
    userName: 'Arif Hossain',
    email: 'arif.hossain@example.com',
    action: 'Logged in to dashboard',
  },
  {
    id: 2,
    datetime: 'Jun 30, 2025 | 09:22 AM',
    userName: 'Tania Rahman',
    email: 'tania.rahman@example.com',
    action: 'Updated company profile',
  },
  {
    id: 3,
    datetime: 'Jun 29, 2025 | 04:45 PM',
    userName: 'Nabil Chowdhury',
    email: 'nabil.chowdhury@example.com',
    action: 'Viewed submission logs',
  },
];

export default function SimpleActivityFeedTable() {
  return (
    <div className="xl:px-12 min-h-screen overflow-x-auto mt-8">
      {/* Table Title */}
      <div className="py-4 border-gray-200 flex justify-between">
        <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">Activity Feed</h2>

        <div>
          <button className='underline mt-3'>See More</button>
        </div>
      </div>

      {/* Table Container */}
      <div className=" bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
        {/* Table Header */}

        <div className="min-w-[700px]">
          <div className="bg-primary px-6 rounded-t-lg">
            <div className="grid grid-cols-12 gap-4 py-3 text-white  text-md lg:text-xl ">
              <div className="col-span-3 flex  items-center md:justify-start ">Date & Time </div>
              <div className="col-span-3 flex  items-center">User Name <CgArrowsV className="my-auto ml-1" /></div>
              <div className="col-span-3  flex  items-center">Email <CgArrowsV className="my-auto ml-1" /></div>
              <div className="col-span-3 flex  items-center">Action <CgArrowsV className="my-auto ml-1" /></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {activityData.map((item) => (
              <div key={item.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center text-sm md:text-[16px] text-info">
                  <div className="col-span-3">{item.datetime}</div>
                  <div className="col-span-2">{item.userName}</div>
                  <div className="col-span-4">{item.email}</div>
                  <div className="col-span-3">{item.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
