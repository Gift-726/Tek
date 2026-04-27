'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import { GeistSans } from 'geist/font/sans'

const showcaseDefaultMarkers = [
  {
    id: 'default-sf',
    location: [37.7595, -122.4367] as [number, number],
    label: 'Enterprise Infrastructure',
  },
  // {
  //   id: 'default-nyc',
  //   location: [40.7128, -74.006] as [number, number],
  //   label: 'São Paulo',
  // },
  {
    id: 'default-tokyo',
    location: [35.6762, 139.6503] as [number, number],
    label: 'Application Development',
  },
  {
    id: 'default-sydney',
    location: [-33.8688, 151.2093] as [number, number],
    label: 'Intelligent Building',
  },
  {
    id: 'default-capetown',
    location: [-33.9249, 18.4241] as [number, number],
    label: 'Telephony Solutions',
  },
  {
    id: 'default-dubai',
    location: [25.2048, 55.2708] as [number, number],
    label: 'IT Support',
  },
  {
    id: 'default-paris',
    location: [48.8566, 2.3522] as [number, number],
    label: 'Enterprise Security',
  },
]

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    let phi = 0
    let theta = 0.2
    const width = canvasRef.current.offsetWidth

    const dpr = Math.min(
      window.devicePixelRatio || 1,
      window.innerWidth < 640 ? 1.8 : 2,
    )
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: width,
      height: width,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.5,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [1, 1, 1],
      markerColor: [0.3, 0.45, 0.85],
      glowColor: [0.94, 0.93, 0.91],
      markerElevation: 0.01,
      markers: showcaseDefaultMarkers.map((m) => ({
        location: m.location,
        size: 0.03,
        id: m.id,
      })),
      opacity: 0.7,
    })

    let animationId: number
    let isDragging = false
    let lastX = 0
    let lastY = 0

    function animate() {
      if (!isDragging) {
        phi += 0.003
      }
      globe.update({
        phi: phi,
        theta: theta,
      })
      animationId = requestAnimationFrame(animate)
    }

    function handleMouseDown(e: MouseEvent) {
      isDragging = true
      lastX = e.clientX
      lastY = e.clientY
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isDragging) return

      const deltaX = e.clientX - lastX
      const deltaY = e.clientY - lastY

      phi += deltaX * 0.01
      theta += deltaY * 0.005

      lastX = e.clientX
      lastY = e.clientY
    }

    function handleMouseUp() {
      isDragging = false
    }

    canvasRef.current.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    animate()

    setTimeout(
      () => canvasRef.current && (canvasRef.current.style.opacity = '1'),
    )
    return () => {
      cancelAnimationFrame(animationId)
      globe.destroy()
      canvasRef.current?.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <section className={`hero ${GeistSans.className}`}>
      <div className='showcases-demo'>
        <div className='showcases-globe'>
          <canvas
            ref={canvasRef}
            className='showcases-canvas'
          />
          <div className='globe-overlay'>
            <h1>TEKSPHERE</h1>
          </div>
          <div className='orbit-ring' aria-hidden='true'>
            <svg className='orbit-svg' viewBox='0 0 300 300'>
              <defs>
                <path
                  id='showcaseOrbitPath'
                  d='M 150,150 m -130,0 a 130,130 0 1,0 260,0 a 130,130 0 1,0 -260,0'
                />
              </defs>
              <text className='orbit-text'>
                <textPath href='#showcaseOrbitPath'>
                  {'Powering Business With Intelligent Technology · '.repeat(6)}
                </textPath>
              </text>
            </svg>
          </div>
          {showcaseDefaultMarkers.map((m) => (
            <div
              key={m.id}
              className='showcase-default-label'
              style={
                {
                  positionAnchor: `--cobe-${m.id}`,
                  opacity: `var(--cobe-visible-${m.id}, 0)`,
                  filter: `blur(var(--cobe-visible-${m.id}, 10px))`,
                } as React.CSSProperties
              }
            >
              {m.label}
            </div>
          ))}
        </div>
      </div>
      <p className='hero-tagline'>COBE: The 5KB WebGL globe</p>
    </section>
  )
}
