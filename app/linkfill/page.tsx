"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Footerbase from "@/components/ui/footerbase";
import React from "react";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Access",
    },
    {
      text: "education, ",
    },
    {
      text: "travel &amp; exchange",
    },
    {
      text: "in seconds.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col pt-40 mar overflow-hidden">
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="https://cal.com/samogb">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Reach out
          </button>
        </Link>
        <Link href="/contact">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Exchange
          </button>
        </Link>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    <div className="container mx-auto py-10 pb-30">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Fill out the form below to send us a message.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
    <Footerbase />
    </div>

  );
}

export default function Page() {
  return <TypewriterEffectSmoothDemo />;
}
