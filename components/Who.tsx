import React from "react";
import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import styled from "styled-components"
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

const Section = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, rgb(250,250,250) 0%, transparent 100%);
    pointer-events: none;
    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: radial-gradient(#2EB9DF 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    pointer-events: none;
    opacity: 0.2;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0;
`
const Compo = styled.div`
  display: flex;
  max-width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(-10px);
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`

export default function Who() {
  const dummyContent = [
    {
      title: "Step 1: Enter Amount",
      description: (
        <>
          <p>
            Start by entering the amount you want to exchange. Whether you're 
            exchanging a small sum or a large amount, our platform provides 
            competitive rates with zero hidden fees.
          </p>
          <p>
            Simply input the amount, and we'll show you the best available 
            exchange rate in real time.
          </p>
        </>
      ),
      badge: "Amount",
      image: "/money.svg",
    },
    {
      title: "Step 2: Choose Currency",
      description: (
        <>
          <p>
            Select the currency you want to exchange into. We support a wide 
            range of currencies, ensuring you get the best exchange rates 
            no matter where you're sending or receiving money.
          </p>
          <p>
            Compare rates instantly and lock in the best deal for your transaction.
          </p>
        </>
      ),
      badge: "Currency",
      image: "/currency.svg",
    },
    {
      title: "Step 3: Get Your Money",
      description: (
        <>
          <p>
            Choose how you want to receive your exchanged money. You can opt 
            for cash delivery to your doorstep or have the funds securely 
            transferred to your bank account.
          </p>
          <p>
            Our process is fast, secure, and ensures a hassle-free experience 
            with complete transparency.
          </p>
        </>
      ),
      badge: "Delivery",
      image: "/transfer.svg",
    },
  ];
  

  return (
    <Section>   
      <Container>
        <div className="flex flex-col items-center pt-[1vh]">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-1xl md:text-2xl lg:text-3xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            <Button
              borderRadius="1.75rem"
              containerClassName="w-auto min-w-[1rem]"
              className="flex font-calsans font-light items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6"
            >
            How it works
            </Button>
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-4xl lg:text-6xl font-calsans max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
           We&apos;re dedicated to helping you <Cover> Xchange your currency <br /> at warp speed</Cover>
          </motion.h1>
        </div>
      </Container><br/><br/>
      <Compo>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={twMerge(calsans.className, "text-xl mb-4")}>
                  {item.title}
                </p>
                <br/>
                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <StyledImage
                      src={item.image}
                      alt="blog thumbnail"
                      height="900"
                      width="900"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </Compo>
    </Section>
  );
}
