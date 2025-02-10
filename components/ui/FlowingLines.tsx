import type React from "react"
import { motion } from "framer-motion"

const FlowingLines: React.FC = () => {
  // Use fixed values instead of random
  const lines = [
    { id: 0, pathOffset: 0.2, pathLength: 0.7 },
    { id: 1, pathOffset: 0.4, pathLength: 0.8 },
    { id: 2, pathOffset: 0.6, pathLength: 0.6 },
    { id: 3, pathOffset: 0.8, pathLength: 0.7 },
    { id: 4, pathOffset: 0.3, pathLength: 0.9 }
  ]

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
      {lines.map((line) => (
        <motion.path
          key={line.id}
          d={`M ${-10 + line.id * 30} 110 Q 50 20 ${110 + line.id * 30} 110`}
          stroke="black"
          strokeWidth="0.5"
          fill="none"
          initial={{
            pathLength: line.pathLength,
            pathOffset: line.pathOffset,
          }}
          animate={{
            pathLength: [line.pathLength, 0.8, line.pathLength],
            pathOffset: [line.pathOffset, line.pathOffset + 1, line.pathOffset + 2],
          }}
          transition={{
            duration: 10 + line.id * 2,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </svg>
  )
}

export default FlowingLines

