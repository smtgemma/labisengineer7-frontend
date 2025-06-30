'use client'
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { CgArrowsV } from 'react-icons/cg';
import Link from 'next/link';

const templatesData = [
    {
        id: 1,
        templateName: 'Invoice Template',
        serviceType: 'Finance',
        lastModified: 'Jun 28, 2025',
        description: 'Used for generating invoices',
        createdBy: 'Admin'
    },
    {
        id: 2,
        templateName: 'Project Report',
        serviceType: 'Engineering',
        lastModified: 'Jun 22, 2025',
        description: 'Summary report template',
        createdBy: 'John Smith'
    }
];

const ActionButton = () => (
    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
        <MoreHorizontal size={16} className="text-gray-500" />
    </button>
);

export default function SimpleTemplatesTable() {
    return (
        <div className="md:px-12 min-h-screen">
            {/* Header */}
            <div className="py-4 border-gray-200 flex justify-between">
                <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">Templates</h2>

                <Link className='bg-neutral-950 px-4 py-3 text-white  rounded-lg' href={"/admin/document-template/add-templete"}>
                Add New Templete
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                {/* Table Header */}
            <div className="min-w-[600px]">
                <div className="bg-primary px-6 rounded-t-lg">
                    <div className="grid grid-cols-12 gap-4 py-3 text-white text-sm lg:text-xl">
                        <div className="col-span-2 ">Template </div>
                        <div className="col-span-2  flex">Service <CgArrowsV className="my-auto" /></div>
                        <div className="col-span-2  flex">Last Modified <CgArrowsV className="my-auto" /></div>
                        <div className="col-span-3  flex">Description <CgArrowsV className="my-auto" /></div>
                        <div className="col-span-2  flex">Created By <CgArrowsV className="my-auto" /></div>
                        <div className="col-span-1  flex">Action <CgArrowsV className="my-auto" /></div>
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                    {templatesData.map((row) => (
                        <div key={row.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="grid grid-cols-12 gap-4 items-center text-sm md:text-[16px] text-info">
                                <div className="col-span-2">{row.templateName}</div>
                                <div className="col-span-2">{row.serviceType}</div>
                                <div className="col-span-2">{row.lastModified}</div>
                                <div className="col-span-3">{row.description}</div>
                                <div className="col-span-2">{row.createdBy}</div>
                                <div className="col-span-1">
                                    <ActionButton />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}
