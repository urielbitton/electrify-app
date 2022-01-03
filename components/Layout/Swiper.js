import React, { useRef, useState } from 'react'
import styles from './Swiper.module.css'

export default function Swiper({children, className}) {

  const [isDown, setIsDown] = useState(true)
  const [active, setActive] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)
  const swiperRef = useRef()

  const executeMove = (e) => {
    if(isDown) {
      e.preventDefault();
      const x = e.pageX - swiperRef.current.offsetLeft;
      const walk = (x - startX) * 0.6; 
      swiperRef.current.scrollLeft = scrollLeft - walk;
    }
  }

  return (
    <div 
      className={`${styles.swiper} ${className} ${active ? styles.active : ""}`}
      onMouseDown={(e) => {
        setIsDown(true)
        setActive(true)
        setStartX(e.pageX - swiperRef.current.offsetLeft)
        setScrollLeft(swiperRef.current.scrollLeft);
      }}
      onMouseLeave={(e) => {
        setIsDown(false)
        setActive(false)
      }}
      onMouseUp={(e) => {
        setIsDown(false)
        setActive(false)
      }}
      onMouseMove={(e) => executeMove(e)}
      ref={swiperRef}
    >
      {children}
    </div>
  )
}
