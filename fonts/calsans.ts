import localFont from "next/font/local";
import { Geist } from 'next/font/google';

export const calsans = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calsans',
});

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});