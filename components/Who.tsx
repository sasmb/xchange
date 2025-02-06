import React from "react";
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

    &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    pointer-events: none; 
  }
`

export default function Who() {
  return <Section>Who</Section>;
}
