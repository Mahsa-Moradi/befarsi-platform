"use client"

import { useEffect, useRef } from "react"

export default function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseTrailRef = useRef<MouseTrailParticle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isMouseMovingRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
      isMouseMovingRef.current = true

      // Reset the flag after a short delay to detect when mouse stops moving
      setTimeout(() => {
        isMouseMovingRef.current = false
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Create background particles
    const particles: Particle[] = []
    const particleCount = Math.min(window.innerWidth, window.innerHeight) * 0.15

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      angle: number
      rotationSpeed: number
      colorTransitionSpeed: number
      colorPhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 2 // 2px by 2px as requested
        this.speedX = (Math.random() - 0.5) * 0.05
        this.speedY = (Math.random() - 0.5) * 0.05
        this.angle = Math.random() * 360
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.colorPhase = Math.random() * 360
        this.colorTransitionSpeed = 0.1 + Math.random() * 0.2
        this.color = this.getColor()
      }

      getColor() {
        // Create a color transition effect
        const hue = this.colorPhase % 360
        return `hsla(${hue}, 70%, 70%, 0.59)` // Using the requested opacity of 0.59
      }

      update() {
        // Update position with slight movement
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Update rotation
        this.angle += this.rotationSpeed

        // Update color
        this.colorPhase += this.colorTransitionSpeed
        this.color = this.getColor()
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.angle * Math.PI) / 180)
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()
      }
    }

    // Mouse trail particle class
    class MouseTrailParticle {
      x: number
      y: number
      size: number
      alpha: number
      color: string
      speedX: number
      speedY: number
      life: number
      maxLife: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = 10 // 10px by 10px as requested
        this.alpha = 0.31 // Opacity as requested
        this.color = `rgba(255, 255, 255, ${this.alpha})` // White color as requested

        // Random speed for more natural movement
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5 - 0.2 // Slight upward drift

        // Life in frames (60fps * 15s = 900 frames for 15s duration)
        this.maxLife = 900
        this.life = this.maxLife
      }

      update() {
        // Update position
        this.x += this.speedX
        this.y += this.speedY

        // Decrease life
        this.life--

        // Update alpha based on remaining life
        this.alpha = 0.31 * (this.life / this.maxLife)
        this.color = `rgba(255, 255, 255, ${this.alpha})`

        // Slightly decrease size as it fades
        this.size = 10 * (0.5 + 0.5 * (this.life / this.maxLife))

        return this.life <= 0
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize background particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw constellation lines between nearby particles
    function drawConstellationLines() {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.2

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Add new mouse trail particles
    function addMouseTrailParticles() {
      if (isMouseMovingRef.current) {
        // Add 1-3 particles per frame when mouse is moving
        const count = Math.floor(Math.random() * 3) + 1
        for (let i = 0; i < count; i++) {
          // Add slight randomness to position for more natural effect
          const offsetX = (Math.random() - 0.5) * 10
          const offsetY = (Math.random() - 0.5) * 10

          mouseTrailRef.current.push(
            new MouseTrailParticle(mousePositionRef.current.x + offsetX, mousePositionRef.current.y + offsetY),
          )
        }
      }
    }

    // Update and draw mouse trail particles
    function updateMouseTrail() {
      // Update particles and remove dead ones
      mouseTrailRef.current = mouseTrailRef.current.filter((particle) => !particle.update())

      // Draw all particles
      mouseTrailRef.current.forEach((particle) => particle.draw())
    }

    // Animation loop
    let animationId: number
    let frameCount = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw background particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      drawConstellationLines()

      // Add new mouse trail particles every few frames
      frameCount++
      if (frameCount % 2 === 0) {
        addMouseTrailParticles()
      }

      // Update and draw mouse trail
      updateMouseTrail()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        opacity: 0.59,
        animationDuration: "100s",
      }}
    />
  )
}
