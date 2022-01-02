import React, { useState } from 'react'
import Meta from "../../components/Meta/Meta"
import TopBar from "../../components/Filters/TopBar"
import FilterWindow from "../../components/Filters/FilterWindow"
import FilterSidebar from "../../components/Filters/FilterSidebar"
import { server } from "../../config"
import styles from './PhotoFilter.module.css'
import { presets } from "../api/filter-presets"

export default function PhotoFilter() {

  const [image, setImage] = useState('')
  const [contrast, setContrast] = useState(100)
  const [brightness, setBrightness] = useState(100)
  const [saturate, setSaturate] = useState(100)
  const [sepia, setSepia] = useState(0)
  const [grayscale, setGrayscale] = useState(0)
  const [invert, setInvert] = useState(0)
  const [hueRotate, setHueRotate] = useState(0)
  const [opacity, setOpacity] = useState(100)
  const [blur, setBlur] = useState(0)

  const filterStates = {
    contrast, setContrast,
    brightness, setBrightness,
    saturate, setSaturate,
    sepia, setSepia,
    grayscale, setGrayscale,
    invert, setInvert,
    hueRotate, setHueRotate,
    opacity, setOpacity,
    blur, setBlur
  }

  return (
    <div className="photo-filter-page">
      <Meta title="Photo Filter - Electrify App"/>
      <TopBar />
      <div className={styles.filterApp}>
        <FilterWindow 
          presets={presets} 
          filterStates={filterStates}
          image={image}
        />
        <FilterSidebar 
          presets={presets} 
          filterStates={filterStates}
        />
      </div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/filter-presets`)
//   const presets  = await res.json()
//   return {
//     props: {
//       presets
//     }
//   }
// }