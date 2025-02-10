import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import styled from "styled-components"
import { Logotable } from "./Clientlogo";
import { Button } from "./ui/moving-border";
import Header from "./header";
const Section = styled.div`
  height: 100vh;
  background-color: #000;
  scroll-snap-align: center;
`

export function Hero() {
  return (
    <Section>
      <Header />
        <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: .8, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center "
      >
        <div className="flex flex-col items-center h-100 ">
        <Button
          borderRadius="1.75rem"
          containerClassName="w-auto min-w-[10rem]"
          className="flex font-calsans font-light items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6"
        >
          New to crypto? ⚡ Get started here.
        </Button>
        <div className="text-4xl md:text-7xl font-calsans dark:text-white text-center">
        Seamless Currency Exchange<br/> Secure. Fast. Reliable
        </div>
        <div className="flex flex-col font-extralight text-base md:text-1,5xl dark:text-neutral-200 py-4">
         Exchange currencies with confidence. Get the best rates, low fees, and fast transactions
        </div>
        <br />
        <div className="flex gap-4 font-calsans">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Buy
          </div>
        </button>
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Sell
        </button>
        </div>
        </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-50 ">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: .8, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 font-calsans"
      >
        <Logotable />
        </motion.div>
        </div>
        </AuroraBackground>
    </Section>
  );
}
