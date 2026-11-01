import { useEffect, useRef } from 'react'

const MAGNET = '.btn, .filter, .brand-mark'

export default function Pointer() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const blobRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const root = document.documentElement
    root.classList.add('has-pointer')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    const blob = { x: pos.x, y: pos.y }
    let magEl = null
    let raf = 0

    const isMag = (el) => el?.closest?.(MAGNET)

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      blob.x += (pos.x - blob.x) * 0.07
      blob.y += (pos.y - blob.y) * 0.07
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${blob.x}px, ${blob.y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (!magEl) return
      const r = magEl.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      magEl.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.36}px, 0) scale(1.045)`
      magEl.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      magEl.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }

    const onOver = (e) => {
      const mag = isMag(e.target)
      if (mag && mag !== magEl) {
        if (magEl) {
          magEl.style.transform = ''
          magEl.classList.remove('is-hot')
        }
        magEl = mag
        mag.classList.add('is-hot')
      }
      if (mag) root.classList.add('pointer-hot')
    }

    const onOut = (e) => {
      const mag = isMag(e.target)
      const nextMag = isMag(e.relatedTarget)
      if (mag && nextMag !== mag) {
        mag.style.transform = ''
        mag.classList.remove('is-hot')
        if (magEl === mag) magEl = nextMag
      }
      if (!nextMag) root.classList.remove('pointer-hot')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      root.classList.remove('has-pointer', 'pointer-hot')
    }
  }, [])

  return (
    <>
      <div ref={blobRef} className="cursor-blob" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
