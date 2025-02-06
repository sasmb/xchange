import React from "react";
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: -2;
    height: 100vh;
    width: 100vw;
    background: white;
    background-image: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0));
    pointer-events: none; 
  }
`

export default function Works() {
  return <Section>Works</Section>;
}
