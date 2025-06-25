"use client"
import React, { useEffect, useRef } from "react"

export default function GlowingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="glowing-cursor pointer-events-none fixed z-[9999]"
      style={{
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}