'use client';

import ButtonGlobal from '@/components/shared/GlobalButton';
import { useState } from 'react';

export default function AddNewTemplateCard() {
    const [templateTitle, setTemplateTitle] = useState('');
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        // Replace with form submission logic
        console.log({ templateTitle, service, description });
    };

    return (
        <div className="max-w-[1079px] mx-auto bg-white  p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl text-info font-semibold   mb-6">
                Add New Template
            </h2>


            <div className='flex w-full flex-col md:flex-row gap-6 items-stretch'>

                {/* Upload Section */}
                <div className="w-1/2 h-full ">
                    <label className="block text-sm md:text-xl font-medium mb-2">Upload Image</label>
                    {/* <div className="  border border-zinc-300 p-6 rounded-lg text-center space-y-2 h-[475px] px-[73px] flex flex-col justify-center">
                        <p>Drop file or <span className="text-blue-600 cursor-pointer">browse</span></p>
                        <p className="text-xs">Format: jpg, jpeg, png · Max size: 25 MB</p>
                    </div> */}

                       <div className="w-full p-6 bg-gray-50 border border-[#c2c2c2] rounded-md flex flex-col items-center justify-center text-center h-[460px] px-[73px]">
                      <svg
                        className="w-10 h-10 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      <p className="text-gray-500 mb-2">Drop file or browse</p>
                      <p className="text-xs text-gray-400 mb-4">
                        Format: jpeg, png & Max file size: 25 MB
                      </p>
                      <div>
                        <label htmlFor="fileUpload" className="block mb-2 text-sm font-medium text-gray-700">
                          Upload File
                        </label>

                        <div className="relative">
                          <input
                            id="fileUpload"
                            type="file"
                            // onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            //  {...register(`education.${index}.achivement`, { required: true })}
                          />
                          <div className="px-4 py-2 bg-neutral-500 border border-gray-300 rounded-md text-center text-white">
                            {"Browse Files"}
                          </div>
                        </div>
                      </div>

                    </div>
                  
                </div>


                <div className='w-1/2 space-y-7'>
                    {/* Template Title */}
                    <div className=" ">
                        <label className="block text-sm md:text-xl font-medium   mb-1">
                            Template Title
                        </label>
                        <input
                            type="text"
                            value={templateTitle}
                            onChange={(e) => setTemplateTitle(e.target.value)}
                            placeholder="Enter template title"
                            className="w-full px-4  py-5 border border-zinc-300  rounded-lg bg-white text-gray-500"
                        />
                    </div>

                    {/* Service Selection */}
                    <div className="">
                        <label className="block text-sm md:text-xl font-medium  dark: mb-1">
                            Select Service
                        </label>
                        <input
                            type="text"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder="Select service"
                            className="w-full px-4  py-5 border border-zinc-300  rounded-lg   text-black"
                        />
                    </div>

                    {/* Description */}
                    <div className="">
                        <label className="block text-sm md:text-xl font-medium  ">
                            Description
                        </label>
                        <textarea
                            rows={8}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Instantly create and manage HTK files for your property. Upload your documents, and the platform does the rest—powered by AI."
                            className="w-full px-3 py-2 border border-zinc-300 rounded-lg resize-none"
                        />
                    </div>
                </div>


            </div>



            {/* Save Button */}
            <p className='flex justify-end mt-6'>
                <ButtonGlobal title='Save Templete' />

            </p>

        </div>
    );
}