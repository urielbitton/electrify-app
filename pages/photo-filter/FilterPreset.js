import Image from "next/image"
import React from 'react'
import styles from './PhotoFilter.module.css'
import filterImg from '../../assets/imgs/filter-img.jpg'

export default function FilterPreset(props) {

  const { img, name } = props.preset
  const { activePreset, setActivePreset } = props

  return (
    <div 
      className={`${styles.filterPreset} ${activePreset === name ? styles.activePreset : ""}`}
      onClick={() => setActivePreset(name)}
    >
      <Image 
        src={img ?? filterImg} 
        width="100px" 
        height="90px" 
        alt=""
      />
      <h5>{name}</h5>
    </div>
  )
}