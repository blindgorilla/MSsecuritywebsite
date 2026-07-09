'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './mission-hero.module.css'

type SceneId = 'cruise' | 'cargo' | 'piracy' | 'port'

interface Mission {
  id: SceneId
  title: string
  description: string
  image: string
  icon: React.ReactNode
}

const MISSIONS: Mission[] = [
  {
    id: 'cruise',
    title: 'Cruise Security',
    description: "Discreet protection aboard the world's finest passenger vessels.",
    image: '/careers/scene-cruise.jpg',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16l2 4h12l2-4" />
        <path d="M6 16V9h12v7" />
        <path d="M9 9V6h6v3" />
        <path d="M12 6V4" />
        <path d="M2 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      </svg>
    ),
  },
  {
    id: 'cargo',
    title: 'Cargo Vessel Protection',
    description: "Escort high-value cargo through the world's busiest corridors.",
    image: '/careers/scene-cargo.jpg',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 15l1.5 4h15L21 15z" />
        <path d="M5 15v-3h4v3M10 15v-5h4v5M15 15v-3h4v3" />
        <path d="M2 19.5h20" />
      </svg>
    ),
  },
  {
    id: 'piracy',
    title: 'Anti-Piracy Operations',
    description: 'Front-line transits across the Gulf of Aden and Indian Ocean.',
    image: '/careers/scene-piracy.jpg',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z" />
        <path d="M9 12l2.2 2.2L15.5 9.5" />
      </svg>
    ),
  },
  {
    id: 'port',
    title: 'Port Security',
    description: 'Secure terminals, anchorages and shoreside operations.',
    image: '/careers/scene-port.jpg',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M7 20V8l7-4v16" />
        <path d="M14 8h5v4" />
        <path d="M19 12v3" />
        <path d="M19 15l-2 2" />
      </svg>
    ),
  },
]

export default function MissionHero() {
  const [activeScene, setActiveScene] = useState<SceneId>('cruise')

  const heroRef = useRef<HTMLElement>(null)
  const scenesRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  /* Cursor-based depth: background drifts opposite the cursor, copy drifts
     with it. Desktop pointers only; skipped entirely under reduced motion. */
  useEffect(() => {
    const hero = heroRef.current
    const scenes = scenesRef.current
    const copy = copyRef.current
    if (!hero || !scenes || !copy) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopPointer = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (min-width: 640px)'
    )
    if (reduceMotion.matches || !desktopPointer.matches) return

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let raf = 0

    const onMouseMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      tx = (e.clientX - r.left) / r.width - 0.5
      ty = (e.clientY - r.top) / r.height - 0.5
    }

    const drift = () => {
      cx += (tx - cx) * 0.04
      cy += (ty - cy) * 0.04
      scenes.style.transform = `translate(${-cx * 22}px, ${-cy * 14}px)`
      copy.style.transform = `translate(${cx * 7}px, ${cy * 5}px)`
      raf = requestAnimationFrame(drift)
    }

    hero.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(drift)

    return () => {
      hero.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      scenes.style.transform = ''
      copy.style.transform = ''
    }
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Cinematic scene layers — only the active one is visible */}
      <div ref={scenesRef} className={styles.scenes} aria-hidden="true">
        {MISSIONS.map((mission) => (
          <div
            key={mission.id}
            className={`${styles.scene} ${
              activeScene === mission.id ? styles.sceneActive : ''
            }`}
          >
            <div className={styles.zoom}>
              <Image
                src={mission.image}
                alt=""
                fill
                sizes="110vw"
                className="object-cover"
                priority={mission.id === 'cruise'}
                loading={mission.id === 'cruise' ? undefined : 'lazy'}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.shimmer} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div>
        <div className={styles.bar}>
          <div className={styles.brand}>
            <Image
              src="/careers/logo-white.png"
              alt="MS Security Group"
              width={122}
              height={120}
              className={styles.brandMark}
              priority
            />
            <div className={styles.brandName}>MS&nbsp;SECURITY&nbsp;GROUP</div>
          </div>
          <div className={styles.barRight}>CAREERS · MARITIME OPERATIONS</div>
        </div>

        <div ref={copyRef} className={styles.copy}>
          <p className={styles.eyebrow}>NOW RECRUITING · WORLDWIDE DEPLOYMENTS</p>
          <h1 className={styles.heading}>
            Choose Your Mission
            <br />
            <span className={styles.serif}>at Sea.</span>
          </h1>
          <p className={styles.sub}>
            Join international maritime security teams protecting vessels,
            ports, and crews across the world.
          </p>
          <div className={styles.ctas}>
            <a href="#apply" className={`${styles.btn} ${styles.btnGold}`}>
              Apply Now
            </a>
            <a
              href="#requirements"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              View Requirements
            </a>
          </div>
        </div>
      </div>

      <div className={styles.missions}>
        {MISSIONS.map((mission) => (
          <button
            key={mission.id}
            type="button"
            className={`${styles.card} ${
              activeScene === mission.id ? styles.cardActive : ''
            }`}
            aria-pressed={activeScene === mission.id}
            onMouseEnter={() => setActiveScene(mission.id)}
            onFocus={() => setActiveScene(mission.id)}
            onClick={() => setActiveScene(mission.id)}
          >
            <div className={styles.icon}>{mission.icon}</div>
            <div>
              <h3 className={styles.cardTitle}>{mission.title}</h3>
              <p className={styles.cardDesc}>{mission.description}</p>
              <div className={styles.go}>EXPLORE ROLE ›</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
