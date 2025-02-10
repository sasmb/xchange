"use client"

import styled from "styled-components"
import Footer from "../Footer"
import AnimationSection from "../ui/AnimationSection"

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const TopSection = styled.div`
  flex: 7;
  width: 100%;
  background-color: black;
  color: white;
  overflow-y: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`

const BottomSection = styled.div`
  flex: 3;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: white;
`

export default function LandingPage() {
  return (
    <PageContainer
      className="relative h-[800px]"
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <TopSection>
        <Footer />
      </TopSection>
      <BottomSection>
        <AnimationSection title="Collinsco." />
      </BottomSection>
    </PageContainer>
  )
}

