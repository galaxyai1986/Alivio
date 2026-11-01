import { useEffect, useRef, useState } from 'react'

export default function TrueFocus({
  sentence,
  as: Tag = 'h1',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#7c6af7',
  glowColor = 'rgba(124, 106, 247, 0.55)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.15,
  className = '',
}) {
  const words = String(sentence).split(/\s+/).filter(Boolean)
  const [active, setActive] = useState(0)
  const [rect, setRect] = useState({ x: 0, y: 0, w: 0, h: 0, ready: false })
  const wrapRef = useRef(null)
  const wordRefs = useRef([])
  const hovering = useRef(false)

  const measure = (i) => {
    const el = wordRefs.current[i]
    const wrap = wrapRef.current
    if (!el || !wrap) return
    const wr = wrap.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    setRect({
      x: r.left - wr.left,
      y: r.top - wr.top,
      w: r.width,
      h: r.height,
      ready: true,
    })
  }

  useEffect(() => {
    setActive(0)
  }, [sentence])

  useEffect(() => {
    measure(active)
    const onResize = () => measure(active)
    window.addEventListener('resize', onResize)
    const fonts = document.fonts?.ready
    if (fonts) fonts.then(() => measure(active))
    return () => window.removeEventListener('resize', onResize)
  }, [active, sentence])

  useEffect(() => {
    if (manualMode || words.length < 2) return
    const ms = (animationDuration + pauseBetweenAnimations) * 1000
    const t = setInterval(() => {
      if (hovering.current) return
      setActive((i) => (i + 1) % words.length)
    }, ms)
    return () => clearInterval(t)
  }, [manualMode, words.length, animationDuration, pauseBetweenAnimations, sentence])

  return (
    <Tag className={`tf ${className}`.trim()} ref={wrapRef}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => { wordRefs.current[i] = el }}
          className={`tf-word${i === active ? ' is-on' : ''}`}
          style={{
            filter: i === active ? 'blur(0px)' : `blur(${blurAmount}px)`,
            transition: `filter ${animationDuration}s ease, opacity ${animationDuration}s ease, color ${animationDuration}s ease`,
          }}
          onMouseEnter={() => {
            hovering.current = true
            setActive(i)
          }}
          onMouseLeave={() => { hovering.current = false }}
        >
          {word}
        </span>
      ))}
      <span
        className={`tf-frame${rect.ready ? ' is-ready' : ''}`}
        style={{
          transform: `translate3d(${rect.x}px, ${rect.y}px, 0)`,
          width: rect.w,
          height: rect.h,
          transitionDuration: `${animationDuration}s`,
          '--tf-border': borderColor,
          '--tf-glow': glowColor,
        }}
        aria-hidden="true"
      >
        <i className="tf-c tl" />
        <i className="tf-c tr" />
        <i className="tf-c bl" />
        <i className="tf-c br" />
      </span>
    </Tag>
  )
}
