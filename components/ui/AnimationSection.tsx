import { motion } from "framer-motion"
import styled from "styled-components"
import FlowingLines from "./FlowingLines"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  overflow: hidden;
`

const AnimationWrapper = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
`

const TitleContainer = styled(motion.div)`
  max-width: 100%;
  position: relative;
  z-index: 1;
`

const TitleText = styled.h1`
  font-size: 12vw;
  font-weight: bold;
  line-height: 0.9;
  color: black;
  margin: 0;
  padding: 0;
  
  @media (min-width: 1200px) {
    font-size: 144px;
  }
`

interface AnimatedTitleProps {
  title: string
}

export default function AnimationSection({ title }: AnimatedTitleProps) {
  return (
    <Container>
      <AnimationWrapper>
        <FlowingLines />
      </AnimationWrapper>
      <TitleContainer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    </Container>
  )
}

