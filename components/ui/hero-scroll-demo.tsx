'use client';

import { CardContent } from "./card";
import { ContainerScroll } from "./container-scroll-animation"; 
import { Card } from "./card";
import Footerbase from "./footerbase";
import { Input } from "./input";
import { ArrowLeftRight, PiggyBank, Building, DollarSign } from "lucide-react";
import { useState } from 'react';

interface Step {
  icon: any; // or use a more specific type for icon
  title: string;
  description: string;
}

const steps = [
    {
      icon: Building,
      title: "Find an Exchange Service",
      description: "Choose from banks, online platforms, or local exchange offices. Compare rates for the best deal.",
    },
    {
      icon: ArrowLeftRight,
      title: "Check the Exchange Rate",
      description: "Understand the current rate between currencies. Rates fluctuate based on economic factors.",
    },
    {
      icon: DollarSign,
      title: "Make the Exchange",
      description: "Convert your currency. Be aware of any fees or commissions charged by the service.",
    },
  ]

export function HeroScrollDemo() {
  const [amount, setAmount] = useState("100");
  const rate = 0.85;

  return (
    // your component content
    <div className="flex flex-col overflow-hidden">
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Get started <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
            Exchanging currency
            </span>
          </h1>
        </>
      }
    >
      <div className="flex justify-center items-center">
      <video src={require('../../public/video.mp4')} autoPlay muted loop />
    </div>
    </ContainerScroll>
    <div className="flex justify-center items-center">
      <button className="bg-black text-white px-4 py-2 rounded-md">
        <ArrowLeftRight className="h-8 w-8 text-white" />
      </button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
    <Card className="w-[1400px] h-[720px] mx-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <CardContent className="p-12 h-full">
      <div className="grid grid-cols-2 gap-12 h-full">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-white-200">
            How Currency Exchange Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Currency exchange is the process of trading one country&apos;s money for another&apos;s at an agreed rate.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {steps.map((step: Step, index: number) => (
              <Card
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <step.icon className="h-8 w-8 text--500" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 to-purple-500 opacity-10 dark:opacity-20" />
          <div className="relative h-full flex flex-col justify-between">
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Try It Out</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="usd" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    USD Amount
                  </label>
                  <Input
                    id="usd"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="eur" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    EUR Equivalent
                  </label>
                  <Input
                    id="eur"
                    type="number"
                    value={(Number.parseFloat(amount) * rate).toFixed(2)}
                    readOnly
                    className="mt-1"
                  />
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl">
              <div className="flex items-start gap-4">
                <PiggyBank className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Example</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If the USD to EUR rate is 1:0.85, then &dollar;100 USD would give you &euro;85 EUR. Always check for the most
                    current rates before exchanging.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  <Footerbase />
  </div>
);
}   