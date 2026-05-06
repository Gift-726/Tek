import { useEffect, useRef, useState } from 'react'
import { processStats, processSteps } from './data'
import styles from './landing.module.css'

export function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [pathD, setPathD] = useState('')
  const [activePathD, setActivePathD] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [badges, setBadges] = useState<{ x: number; y: number }[]>([])
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const updatePath = () => {
      if (!timelineRef.current) return
      const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`)
      if (items.length < 2) return

      const badges = Array.from(items).map(item => {
        const badge = item.querySelector(`.${styles.timelineBadge}`)
        if (!badge) return null
        const rect = badge.getBoundingClientRect()
        const parentRect = timelineRef.current!.getBoundingClientRect()
        return {
          x: rect.left + rect.width / 2 - parentRect.left,
          y: rect.top + rect.height / 2 - parentRect.top
        }
      }).filter(Boolean) as { x: number, y: number }[]

      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      setBadges(badges)
      const padding = mobile ? 30 : 0
      const parentRect = timelineRef.current!.getBoundingClientRect()
      const leftEdge = padding
      const rightEdge = parentRect.width - padding

      let d = ""

      if (mobile) {
        // Square Zigzag Path
        for (let i = 0; i < badges.length; i++) {
          const current = badges[i]
          if (i === 0) {
            d += `M ${leftEdge} ${current.y} L ${rightEdge} ${current.y}`
          } else {
            const dropX = i % 2 !== 0 ? rightEdge : leftEdge
            d += ` L ${dropX} ${current.y}`
            d += ` L ${i % 2 !== 0 ? leftEdge : rightEdge} ${current.y}`
          }
        }
      } else {
        // Straight line for desktop
        d = `M ${badges[0].x} ${badges[0].y}`
        for (let i = 1; i < badges.length; i++) {
          d += ` L ${badges[i].x} ${badges[i].y}`
        }
      }
      setPathD(d)
    }

    updatePath()
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [])

  useEffect(() => {
    if (badges.length < 1 || hoveredIndex === -1) {
      setActivePathD('')
      return
    }

    const targetIndex = hoveredIndex
    const padding = isMobile ? 30 : 0
    const parentRect = timelineRef.current?.getBoundingClientRect() || { width: 0 }
    const leftEdge = padding
    const rightEdge = parentRect.width - padding

    let d = ""
    if (isMobile) {
      for (let i = 0; i <= targetIndex; i++) {
        const current = badges[i]
        if (i === 0) {
          d += `M ${leftEdge} ${current.y} L ${rightEdge} ${current.y}`
        } else {
          const dropX = i % 2 !== 0 ? rightEdge : leftEdge
          d += ` L ${dropX} ${current.y}`
          d += ` L ${i % 2 !== 0 ? leftEdge : rightEdge} ${current.y}`
        }
      }
    } else {
      d = `M ${badges[0].x} ${badges[0].y}`
      for (let i = 1; i <= targetIndex; i++) {
        d += ` L ${badges[i].x} ${badges[i].y}`
      }
    }
    setActivePathD(d)
  }, [hoveredIndex, badges, isMobile])



  const activePathRef = useRef<SVGPathElement>(null)
  const [totalLength, setTotalLength] = useState(0)

  useEffect(() => {
    if (activePathRef.current) {
      setTotalLength(activePathRef.current.getTotalLength())
    }
  }, [pathD])

  return (
    <section className={`${styles.section} ${styles.processSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleBlock}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>Our Process</p>
            </div>
            <h2 className={styles.title}>A Proven Approach to Delivering Excellence</h2>
          </div>
          <p className={styles.sectionLead}>
            We follow a structured process that ensures every project is
            delivered on time, within budget, and beyond expectations.
          </p>
        </div>

        <div 
          className={styles.timeline} 
          ref={timelineRef}
          onMouseMove={(e) => {
            if (!timelineRef.current || badges.length < 1) return
            const rect = timelineRef.current.getBoundingClientRect()
            let progress = 0
            if (isMobile) {
              const y = e.clientY - rect.top
              const startY = badges[0].y
              const endY = badges[badges.length - 1].y
              progress = Math.max(0, Math.min(1, (y - startY) / (endY - startY)))
            } else {
              const x = e.clientX - rect.left
              const startX = badges[0].x
              const endX = badges[badges.length - 1].x
              progress = Math.max(0, Math.min(1, (x - startX) / (endX - startX)))
            }
            timelineRef.current.style.setProperty('--progress', progress.toString())
          }}
          onMouseLeave={() => {
            setHoveredIndex(-1)
            if (timelineRef.current) {
              timelineRef.current.style.setProperty('--progress', '0')
            }
          }}
        >
          {/* Main SVG path for desktop/mobile */}
          <svg 
            className={styles.processLineSvg} 
          >
            <path className={styles.processLinePath} d={pathD} />
            <path 
              ref={activePathRef}
              className={`${styles.processLinePathActive} ${hoveredIndex !== -1 || true ? styles.isVisible : ''}`} 
              d={pathD} 
              style={{ 
                strokeDasharray: totalLength,
                strokeDashoffset: `calc(${totalLength} * (1 - var(--progress, 0)))` 
              } as any}
            />
          </svg>




          
          {processSteps.map((step, index) => (
            <article 
              key={step.number} 
              className={styles.timelineItem}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className={styles.timelineMarker}>
                <span className={`${styles.timelineBadge} ${hoveredIndex === index ? styles.badgeActive : ''}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--landing-primary)' }}>
                    {step.icon}
                  </span>
                </span>
              </div>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardCopy}>{step.description}</p>
            </article>
          ))}

        </div>

        {/* <div className={styles.statsGrid}>
          {processStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statIconWrapper}>
                <span className="material-symbols-outlined" style={{ fontSize: '26px', color: 'var(--landing-secondary)' }}>
                  {stat.icon}
                </span>
              </span>
              <div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
