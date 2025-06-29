
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/landing-page/main-logo.png'; 

export default function Logo({ width = 119, height = 44 }) {
  return (
    <div >
      <Image src={logo} alt="Logo" width={width} height={height} />
    </div>
  );
}
