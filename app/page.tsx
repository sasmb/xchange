"use client"

import styled from "styled-components"
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Who from "@/components/Who";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

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
    <Container >
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}
