import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { calsans, geist } from "@/fonts/calsans";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xchange | the best way to exchange crypto",
  description: "xchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="preload" href="/menu.png" as="image" type="image/png" />
      </head>
      <body
        className={`${calsans.variable} ${geist.variable} font-geist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
