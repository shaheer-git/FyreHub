import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  LayoutGrid,
  BookOpen,
  Package,
  UtensilsCrossed,
  Megaphone,
  Globe,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import type { Variants } from 'framer-motion'
import './Hero3.css'

// ─── Local image imports ──────────────────────────────────────────────────────

// Social Media
import sm25 from '../../assets/social-media-design/25.webp'
import sm26 from '../../assets/social-media-design/26.webp'
import sm27 from '../../assets/social-media-design/27.webp'
import sm28 from '../../assets/social-media-design/28.webp'
import sm29 from '../../assets/social-media-design/29.webp'
import sm30 from '../../assets/social-media-design/30.webp'
import sm31 from '../../assets/social-media-design/31.webp'
import sm32 from '../../assets/social-media-design/32.webp'
import sm33 from '../../assets/social-media-design/33.webp'
import sm34 from '../../assets/social-media-design/34.webp'
import sm35 from '../../assets/social-media-design/35.webp'
import sm36 from '../../assets/social-media-design/36.webp'
import sm37 from '../../assets/social-media-design/37.webp'
import sm38 from '../../assets/social-media-design/38.webp'
import sm39 from '../../assets/social-media-design/39.webp'
import sm40 from '../../assets/social-media-design/40.webp'
import sm41 from '../../assets/social-media-design/41.webp'
import sm42 from '../../assets/social-media-design/42.webp'
import sm43 from '../../assets/social-media-design/43.webp'
import sm44 from '../../assets/social-media-design/44.webp'
import sm45 from '../../assets/social-media-design/45.webp'
import sm46 from '../../assets/social-media-design/46.webp'
import sm47 from '../../assets/social-media-design/47.webp'
import sm48 from '../../assets/social-media-design/48.webp'
import sm49 from '../../assets/social-media-design/49.webp'
import sm50 from '../../assets/social-media-design/50.webp'
import sm51 from '../../assets/social-media-design/51.webp'
import sm52 from '../../assets/social-media-design/52.webp'
import sm53 from '../../assets/social-media-design/53.webp'
import sm54 from '../../assets/social-media-design/54.webp'
import sm55 from '../../assets/social-media-design/55.webp'
import sm56 from '../../assets/social-media-design/56.webp'
import sm57 from '../../assets/social-media-design/57.webp'
import sm58 from '../../assets/social-media-design/58.webp'
import sm59 from '../../assets/social-media-design/59.webp'
import sm60 from '../../assets/social-media-design/60.webp'
import sm61 from '../../assets/social-media-design/61.webp'
import sm62 from '../../assets/social-media-design/62.webp'
import sm63 from '../../assets/social-media-design/63.webp'
import sm64 from '../../assets/social-media-design/64.webp'
import sm65 from '../../assets/social-media-design/65.webp'
import sm66 from '../../assets/social-media-design/66.webp'
import sm67 from '../../assets/social-media-design/67.webp'
import sm68 from '../../assets/social-media-design/68.webp'
import sm69 from '../../assets/social-media-design/69.webp'
import smSmc from '../../assets/social-media-design/Social media copy.webp'
import smU1 from '../../assets/social-media-design/Untitled-1 [Recovered].webp'

// Books
import bk1 from '../../assets/books-design/1ST.webp'
import bk2 from '../../assets/books-design/2ND.webp'
import bk3 from '../../assets/books-design/3RD.webp'
import bk4 from '../../assets/books-design/4TH.webp'
import bk5 from '../../assets/books-design/5TH.webp'
import bk6 from '../../assets/books-design/6TH.webp'
import bk7 from '../../assets/books-design/7TH.webp'
import bk8 from '../../assets/books-design/8th.webp'
import bk9 from '../../assets/books-design/9th.webp'
import bk10 from '../../assets/books-design/10.webp'

// Package
import pk1 from '../../assets/package-design/fd2g2yhgxxhhnxhpghzj.webp'
import pk2 from '../../assets/package-design/lw2o8b5rqdm4l5wmavbw.webp'

// Menu
import mn1 from '../../assets/menu-designs/1.webp'
import mn2 from '../../assets/menu-designs/2.webp'
import mn4 from '../../assets/menu-designs/4.webp'
import mn5 from '../../assets/menu-designs/5.webp'
import mn6 from '../../assets/menu-designs/6.webp'
import mnW1 from '../../assets/menu-designs/W_Menu 1.webp'
import mnW2 from '../../assets/menu-designs/W_Menu 2.webp'

// Ad Design
import ad1 from '../../assets/ad-design/Artboard 6 copy 3_converted.webp'
import ad2 from '../../assets/ad-design/sd-02_converted.webp'
import ad3 from '../../assets/ad-design/sd-03_converted.webp'
import ad4 from '../../assets/ad-design/sd-04_converted.webp'

// Websites
import EzyScrap from '../../assets/EzyScrap.png'
import goatGamingThumbnail from '../../assets/goatGamingTumbnail.png'

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'web', label: 'Websites', Icon: Globe },
  { id: 'social', label: 'Social Media', Icon: LayoutGrid },
  { id: 'books', label: 'Books', Icon: BookOpen },
  { id: 'packages', label: 'Packaging', Icon: Package },
  { id: 'menus', label: 'Menus', Icon: UtensilsCrossed },
  { id: 'ads', label: 'Ads', Icon: Megaphone },
] as const

type CategoryId = typeof CATEGORIES[number]['id']

const ALL_IMAGES: Record<string, string[]> = {
  social: [sm25, sm26, sm27, sm28, sm29, sm30, sm31, sm32, sm33, sm34, sm35, sm36, sm37,
    sm38, sm39, sm40, sm41, sm42, sm43, sm44, sm45, sm46, sm47, sm48, sm49, sm50,
    sm51, sm52, sm53, sm54, sm55, sm56, sm57, sm58, sm59, sm60, sm61, sm62, sm63,
    sm64, sm65, sm66, sm67, sm68, sm69, smSmc, smU1],
  books: [bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, bk9, bk10],
  packages: [pk1, pk2],
  menus: [mn1, mn2, mn4, mn5, mn6, mnW1, mnW2],
  ads: [ad1, ad2, ad3, ad4],
}

// Marquee uses small, fast-loading images
const MARQUEE_POOL = [sm28, sm29, sm30, sm35, sm42, sm45, sm48, sm49, sm51, sm55, sm67, sm60]

const WEB_PROJECTS = [
  { name: 'EzyScrap', url: 'https://ezyscrap.com', img: EzyScrap, desc: 'E-Commerce / Web Platform' },
  { name: 'GOAT Gaming Café', url: 'https://goatgamingcafe.com', img: goatGamingThumbnail, desc: 'Hospitality & Gaming Brand' },
]

// How many social images to show initially in preview (home) vs full (portfolio)
const PREVIEW_LIMIT = 4   // on home page
const LOAD_MORE_STEP = 12  // how many to add each "Load More" click

// Stable ordered list of tab IDs for auto-cycling (derived from CATEGORIES, never changes)
const TAB_IDS = CATEGORIES.map(c => c.id) as CategoryId[]

// ─── Animation variants ────────────────────────────────────────────────────────

const EASE = [0.23, 1, 0.32, 1] as const

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
}
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: EASE } },
}
const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
}
const lightboxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, scale: 0.93, transition: { duration: 0.2 } },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MarqueeRow({ images, direction }: { images: string[]; direction: 'left' | 'right' }) {
  const doubled = [...images, ...images]
  return (
    <div className="overflow-hidden w-full">
      <div className={direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'}>
        {doubled.map((src, i) => (
          <img
            key={i} src={src} alt="" loading="lazy" decoding="async"
            className="h-[200px] w-auto rounded-xl object-cover flex-shrink-0 opacity-80"
          />
        ))}
      </div>
    </div>
  )
}

function GalleryCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.div className="gallery-card" variants={cardVariants} onClick={onClick} whileHover={{ y: -4 }}>
      {!loaded && <div className="w-full h-48 bg-[#1e1b24] animate-pulse rounded-xl" />}
      <img
        src={src} alt={alt} loading="lazy" decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full rounded-xl object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 absolute'}`}
      />
      <div className="gallery-card-overlay">
        <span className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-1">
          View Full <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.div>
  )
}

function MasonryGrid({ images, onSelect }: { images: string[]; onSelect: (i: number) => void }) {
  return (
    <motion.div
      key={images.length}
      className="columns-2 sm:columns-3 lg:columns-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {images.map((src, i) => (
        <GalleryCard key={src + i} src={src} alt={`Work ${i + 1}`} onClick={() => onSelect(i)} />
      ))}
    </motion.div>
  )
}

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: string[]; index: number
  onClose: () => void; onPrev: () => void; onNext: () => void
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute left-4 md:left-8 text-white text-5xl font-light opacity-60 hover:opacity-100 transition-opacity z-10 select-none"
        onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Previous"
      >‹</button>

      <motion.div
        variants={lightboxVariants} initial="hidden" animate="show" exit="exit"
        onClick={e => e.stopPropagation()}
        className="relative flex items-center justify-center"
      >
        <img src={images[index]} alt="" className="lightbox-img" />
        <div className="absolute bottom-3 left-0 right-0 text-center text-white/40 text-xs tracking-widest">
          {index + 1} / {images.length}
        </div>
      </motion.div>

      <button
        className="absolute right-4 md:right-8 text-white text-5xl font-light opacity-60 hover:opacity-100 transition-opacity z-10 select-none"
        onClick={e => { e.stopPropagation(); onNext() }} aria-label="Next"
      >›</button>

      <button
        className="absolute top-5 right-6 text-white/50 hover:text-white transition-colors z-10"
        onClick={onClose} aria-label="Close"
      >
        <ArrowUpRight size={22} className="rotate-45" />
      </button>
    </motion.div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Hero3Props {
  /** When true (home page): show preview of social media only, hide tabs, show "See All Work →" */
  isPreview?: boolean
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const Hero3 = ({ isPreview = false }: Hero3Props) => {
  const [activeTab, setActiveTab] = useState<CategoryId>('web')
  const [visibleCount, setVisible] = useState(isPreview ? PREVIEW_LIMIT : LOAD_MORE_STEP)
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const [progress, setProgress] = useState(0)          // 0–100 for the timer bar
  const galleryRef = useRef<HTMLDivElement>(null)
  const userInteracting = useRef(false)               // true while user is hovering/clicking
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const TAB_DURATION = 10000                        // ms per tab
  const IDLE_RESUME_DELAY = 10000                        // ms after last interaction to resume

  const startAutoPlay = useCallback(() => {
    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    setProgress(0)

    const TICK = 50 // ms
    let elapsed = 0
    progressRef.current = setInterval(() => {
      elapsed += TICK
      setProgress(Math.min((elapsed / TAB_DURATION) * 100, 100))
    }, TICK)

    intervalRef.current = setInterval(() => {
      if (userInteracting.current) return
      setActiveTab(prev => {
        const idx = TAB_IDS.indexOf(prev)
        return TAB_IDS[(idx + 1) % TAB_IDS.length]
      })
      setVisible(LOAD_MORE_STEP)
      elapsed = 0
      setProgress(0)
    }, TAB_DURATION)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // TAB_IDS and constants are module-level — stable forever

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    intervalRef.current = null
    progressRef.current = null
    setProgress(0)
  }, [])

  // Start auto-play only in full (portfolio) mode
  useEffect(() => {
    if (isPreview) return
    startAutoPlay()
    return () => stopAutoPlay()
  }, [isPreview, startAutoPlay, stopAutoPlay])

  const pauseAndScheduleResume = useCallback(() => {
    userInteracting.current = true
    stopAutoPlay()
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      userInteracting.current = false
      startAutoPlay()
    }, IDLE_RESUME_DELAY)
  }, [startAutoPlay, stopAutoPlay])

  // Reset visible count when tab changes
  const handleTabChange = (id: CategoryId) => {
    setActiveTab(id)
    setVisible(LOAD_MORE_STEP)
    pauseAndScheduleResume()
    setTimeout(() => galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightbox({ images, index })
    document.body.style.overflow = 'hidden'
  }, [])
  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])
  const prevImage = useCallback(() =>
    setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb), [])
  const nextImage = useCallback(() =>
    setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb), [])

  const allForTab = ALL_IMAGES[activeTab] ?? []
  const shownImages = allForTab.slice(0, visibleCount)
  const hasMore = visibleCount < allForTab.length

  // ── PREVIEW MODE (Home page) ─────────────────────────────────────────────
  if (isPreview) {
    const previewImgs2 = Object.entries(ALL_IMAGES).map(([, images]) => images.slice(0, 2)).flat().reverse()
    return (
      <section className="flex flex-col items-center pb-20 px-4">
        {/* Heading */}
        <motion.div
          className="text-center pt-16 pb-10"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-label text-[#AFFC41] text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Our Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Featured <span className="text-[#AFFC41] font-bold">Works</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            A glimpse of our social media design work — scroll-stopping content that converts.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="w-full flex flex-col gap-4 mb-12 overflow-hidden">
          <MarqueeRow images={MARQUEE_POOL} direction="left" />
          <MarqueeRow images={[...MARQUEE_POOL].reverse()} direction="right" />
        </div>

        {/* Preview grid */}
        <div className="w-full max-w-7xl relative">
          <MasonryGrid
            images={previewImgs2}
            onSelect={(i) => openLightbox(previewImgs2, i)}
          />

          <motion.div
            className="flex justify-center mt-16 pb-12 relative z-[100]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 bg-[#AFFC41] hover:bg-[#c8ff5e] text-[#17141b] font-bold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(175,252,65,0.4)] hover:shadow-[0_0_40px_rgba(175,252,65,0.6)] cursor-pointer active:scale-95 touch-manipulation"
              style={{ pointerEvents: 'auto', WebkitTapHighlightColor: 'transparent' }}
            >
              See All Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <Lightbox
              images={lightbox.images} index={lightbox.index}
              onClose={closeLightbox} onPrev={prevImage} onNext={nextImage}
            />
          )}
        </AnimatePresence>
      </section>
    )
  }

  // ── FULL MODE (Portfolio page) ───────────────────────────────────────────
  return (
    <section className="min-h-screen flex flex-col items-center pb-24">

      {/* Heading */}
      <motion.div
        className="text-center pt-16 pb-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="section-label text-[#AFFC41] text-sm tracking-[0.3em] uppercase font-semibold mb-3">
          Digital Creative Agency
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-4">
          Our <span className="text-[#AFFC41] font-bold">Works</span>
        </h1>
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
          A curated showcase of designs that drive results — from thumb-stopping social posts to stunning brand identities.
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="w-full flex flex-col gap-4 mb-14 overflow-hidden">
        <MarqueeRow images={MARQUEE_POOL} direction="left" />
        <MarqueeRow images={[...MARQUEE_POOL].reverse()} direction="right" />
      </div>

      {/* Tabs + Gallery */}
      <div ref={galleryRef} className="w-full max-w-7xl px-4">

        {/* Tab buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onMouseEnter={pauseAndScheduleResume}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(({ id, label, Icon }) => {
              const active = activeTab === id
              return (
                <button
                  key={id}
                  onClick={() => handleTabChange(id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide
                    border transition-all duration-300 cursor-pointer
                    ${active
                      ? 'bg-[#AFFC41] text-[#17141b] border-[#AFFC41] shadow-[0_0_20px_rgba(175,252,65,0.4)]'
                      : 'bg-transparent text-[#AFFC41]/70 border-[#AFFC41]/20 hover:border-[#AFFC41]/60 hover:text-[#AFFC41]'
                    }
                  `}
                >
                  <Icon size={15} strokeWidth={2} />
                  {label}
                </button>
              )
            })}
          </div>

          {/* Auto-play progress bar */}
          <div className="w-48 h-0.5 bg-[#AFFC41]/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#AFFC41] rounded-full origin-left"
              style={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Gallery content */}
        <AnimatePresence mode="wait">
          {activeTab !== 'web' ? (
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden" animate="show" exit="exit"
            >
              {shownImages.length > 0 ? (
                <>
                  <MasonryGrid
                    images={shownImages}
                    onSelect={(i) => openLightbox(allForTab, i)}
                  />

                  {/* Load More / count */}
                  <div className="flex flex-col items-center gap-3 mt-10">
                    <p className="text-white/30 text-xs tracking-widest uppercase">
                      Showing {shownImages.length} of {allForTab.length}
                    </p>
                    {hasMore && (
                      <motion.button
                        onClick={() => setVisible(v => v + LOAD_MORE_STEP)}
                        className="group flex items-center gap-2 border border-[#AFFC41]/30 hover:border-[#AFFC41] text-[#AFFC41]/70 hover:text-[#AFFC41] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Load More
                        <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                      </motion.button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center text-white/30 py-24 text-lg">Coming soon…</div>
              )}
            </motion.div>
          ) : (
            /* Websites */
            <motion.div
              key="web"
              variants={tabContentVariants}
              initial="hidden" animate="show" exit="exit"
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                variants={containerVariants} initial="hidden" animate="show"
              >
                {WEB_PROJECTS.map((site, idx) => (
                  <motion.a
                    key={idx}
                    href={site.url} target="_blank" rel="noopener noreferrer"
                    className="site-card group block"
                    variants={cardVariants}
                  >
                    <div className="relative w-full h-64 md:h-72 overflow-hidden">
                      <img
                        src={site.img} alt={site.name} loading="lazy" decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a080e] via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl">{site.name}</h3>
                        <p className="text-[#AFFC41]/60 text-sm mt-1">{site.desc}</p>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className="text-[#AFFC41] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Stats strip */}
              <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants} initial="hidden" animate="show"
              >
                {[
                  { n: '40+', label: 'Projects Delivered' },
                  { n: '12+', label: 'Happy Clients' },
                  { n: '5', label: 'Design Categories' },
                  { n: '6+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <motion.div
                    key={i} variants={cardVariants}
                    className="rounded-2xl border border-[#AFFC41]/10 bg-[#1e1b24] p-6 text-center"
                  >
                    <div className="text-[#AFFC41] text-4xl font-bold">{stat.n}</div>
                    <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images} index={lightbox.index}
            onClose={closeLightbox} onPrev={prevImage} onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
