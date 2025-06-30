import Image, { StaticImageData } from 'next/image'
import React from 'react'


export type CardItem = {
  label: string;
  value: string;
  delta: string;
  image: string | StaticImageData;
};
export default function CardDesign({item}:{item: CardItem}) {
    return (
        <div>
            <div
                className="bg-white  py-6 px-4 rounded-xl shadow flex justify-between gap-1"
            >
                <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-[42px] font-bold text-zinc-800">{item.value}</span>
                    <span className="text-sm text-zinc-500">{item.label}</span>
                </div>


                <div className="flex flex-col gap-3">

                    <Image
                        src={item.image}
                        alt="icons"
                        height={56}
                        width={56}
                    />
                    <span className="text-green-600  font-medium">{item.delta}</span>
                </div>


            </div>
        </div>
    )
}
