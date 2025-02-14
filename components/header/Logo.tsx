'use client';
import { calsans } from "@/fonts/calsans";
import Link from 'next/link';

export default function Logo() {
  return (
    <div 
      className="fixed left-[50px] top-[50px] z-[1000]"
    >
      <Link href="/">
        <h1 
          className={`${calsans.className} text-[1.5rem] font-medium text-black cursor-pointer transition-all duration-300 hover:-translate-y-[2px]`}
        >
          CollinsCo.
        </h1>
      </Link>
    </div>
  );
} 