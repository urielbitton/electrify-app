import Image from "next/image"
import React from 'react'
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import filterImg from '../../assets/imgs/filter-img.jpg'

export default function FilterPreset(props) {

  const { name, contrast, brightness, saturate, sepia, 
    grayscale, invert, hueRotate, opacity, blur} = props.preset
  const { activePreset, setActivePreset, image, imageFilters, onClick } = props

  return (
    <div 
      className={`${styles.filterPreset} ${activePreset === name ? styles.activePreset : ""}`}
      onClick={() => {
        setActivePreset(name)
        onClick()
      }}
    >
      <div 
        style={{
          filter: `contrast(${contrast}%)
          brightness(${brightness}%) 
          saturate(${saturate}%) 
          sepia(${sepia}%) 
          grayscale(${grayscale}%)
          invert(${invert}%)
          hue-rotate(${hueRotate}deg)
          opacity(${opacity}%)
          blur(${blur}px)`
        }}
      >
        <Image 
          src={image.length ? image : filterImg} 
          style={{opacity: 0.4}}
          width={100} 
          height={90}
          alt=""
        />
      </div>
      <h5>{name}</h5>
    </div>
  )
}
