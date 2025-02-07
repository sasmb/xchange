import { Icon, Link } from "lucide-react";
import React from "react";
import styled from "styled-components"
import Image from 'next/image';

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
const Container = styled.div`
  display: flex;   
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  width: 100%;
  background-color: transparent;
  border: none;
`
const Icons = styled.div`
    width: 32px;
    height: 32px;
`
const Links = styled.div`
  
`
const Logo = styled.div`
  width: 32px;
  height: 32px;
`
export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links className="text-2xl font-bold">
          CollinsCo.
        </Links>
        <Icons>
          <Image 
            src="/menu.png" 
            alt="menu"
            width={40}
            height={40}
            className="dark:invert"
          />
        </Icons>
      </Container>
    </Section>
  );
}
