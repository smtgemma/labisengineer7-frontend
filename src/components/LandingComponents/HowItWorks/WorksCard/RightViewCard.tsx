'use client';

import React from 'react';
import Container from '@/components/shared/Container/Container';
import Image, { StaticImageData } from 'next/image';
import workImg from '@/assets/landing-page/login.png'
import stepShape from '@/assets/landing-page/Vector.png'
import StepTextBlock, { StepTextBlockProps } from './LeftViewCard';

interface RightViewCardProps extends StepTextBlockProps {
    className?: string;
    title: string;
    description: string;
    stepNumber?: string;
    buttonText?: string;
    buttonLink?: string;
    list?: string[];
    formats?: string[];
    workImg: string | StaticImageData;
}

export default function RightViewCard({
    className,
    stepNumber = "1",
    title = "Building IDs made effortless",
    description = "Our AI-powered solution handles HTK creation by scanning your uploaded documents and auto-populating data. Save time and stay compliant without the headache.",
    buttonText = "",
    buttonLink = "",
    list = [],
    formats,
    workImg
}: RightViewCardProps) {

    return (
        <div className="py-16 ">
            <Container>
                <div className={`${className} flex  items-center gap-10`}>

                    <div className="w-full md:w-1/2">
                        <Image
                            src={workImg}
                            alt="HTK solution overview"
                            className="w-full h-auto rounded-lg bg-primary shadow-md "
                        />
                    </div>


                    <StepTextBlock
                        stepNumber={String(stepNumber)}
                        title={title}
                        description={description}
                        buttonText={buttonText}
                        buttonLink={buttonLink}
                        list={list}
                        formats={formats}
                    />

                </div>
            </Container>
        </div>
    );
}