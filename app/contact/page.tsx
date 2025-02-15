import React, { useState } from "react"; 
import { Metadata } from 'next';
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroScrollDemo />
    </main>
  );
}

