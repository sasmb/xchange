"use client"

import styled from "styled-components"
import { Hero } from "@/components/Hero";
import Who from "@/components/Who";
import Works from "@/components/Works";
import { MouseMaskEffect } from "@/components/ui/mouse-mask-effect";
import Footerbase from "@/components/ui/footerbase";

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default function Home() {
  return (
    <>
      <Container>
        <MouseMaskEffect />
        <Hero />
        <Who />
        <Works />
        <Footerbase />
      </Container>
    </>
  );
}
