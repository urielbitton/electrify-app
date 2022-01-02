import Image from "next/image"
import React from 'react'
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import filterImg from '../../assets/imgs/filter-img.jpg'

export default function FilterPreset(props) {

  const { name } = props.preset
  const { activePreset, setActivePreset, image } = props

  return (
    <div 
      className={`${styles.filterPreset} ${activePreset === name ? styles.activePreset : ""}`}
      onClick={() => setActivePreset(name)}
    >
      <Image 
        src={image.length ? image : filterImg} 
        width={100} 
        height={90}
        alt=""
      />
      <h5>{name}</h5>
    </div>
  )
}
