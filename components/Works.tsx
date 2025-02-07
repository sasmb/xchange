import React from "react";
import styled from "styled-components"
import { MaskContainer } from "./ui/svg-mask-effect";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Works() {
  return (
    <Section>
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
              Exchange money seamlessly with the best rates and zero hidden fees. 
              Choose your currency, set your amount, and get your cash quickly and securely.
            </p>
          }
          className="h-full w-full font-calsans"
        >
          Exchange money <span className="text-sky-500">quickly</span> and 
          <span className="text-sky-500"> securely</span>. Get the best rates and 
          choose between <span className="text-green-500">cash delivery or bank transfer </span>for your convenience.
        </MaskContainer>
      </div>
    </Section>
  );
}
