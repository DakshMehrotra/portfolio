import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let glowX = 0, glowY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      if (glowRef.current) {
        glowRef.current.style.left = glowX + 'px'
        glowRef.current.style.top = glowY + 'px'
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: '8px', height: '8px', borderRadius: '50%',
        background: 'var(--neon-green)', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px var(--neon-green)',
        transition: 'width 0.2s, height 0.2s',
      }} />
      <div ref={glowRef} style={{
        position: 'fixed', width: '40px', height: '40px', borderRadius: '50%',
        border: '1.5px solid rgba(0,255,136,0.4)', pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 20px rgba(0,255,136,0.15)',
      }} />
    </>
  )
}
