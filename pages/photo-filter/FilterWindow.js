import Image from "next/image"
import React, { useState } from 'react'
import FilterPreset from "./FilterPreset"
import styles from './PhotoFilter.module.css'
import filterImg from '../../assets/imgs/filter-img.jpg'

export default function FilterWindow({presets, filterStates, image}) {

  const [activePreset, setActivePreset] = useState('normal')
  const [closePresets, setClosePresets] = useState(false)
  const {
    contrast, setContrast, brightness, setBrightness, saturate, setSaturate,
    sepia, setSepia, grayscale, setGrayscale, invert, setInvert, hueRotate, 
    setHueRotate, opacity, setOpacity, blur, setBlur
   } = filterStates

  const imageFilters = { filter: 
    `contrast(${contrast}%) 
    brightness(${brightness}%) 
    saturate(${saturate}%) 
    sepia(${sepia}%) 
    grayscale(${grayscale}%)
    invert(${invert}%)
    hue-rotate(${hueRotate}deg)
    opacity(${opacity}%)
    blur(${blur}px)`
  }

  const filterPresetsRender = presets?.map((preset, i) => {
    return <FilterPreset 
      preset={preset} 
      activePreset={activePreset}
      setActivePreset={setActivePreset}
      image={image}
      key={i} 
    />
  })

  const downloadFilteredImg = () => {
    
  }

  return (
    <div className={styles.filterWindow}>
      <div className={`${styles.presetsContainer} ${closePresets ? styles.closed : ""}`}>
        {/* {filterPresetsRender} */}
      </div>
      <div className={styles.filterPreview}>
        <div className={styles.previewTools}>
          <div>
            <button>
              <i className="fab fa-unsplash"></i>
              Upload From Unsplash
            </button>
            <button>
              <i className="fal fa-image"></i>
              Upload Image
            </button>
          </div>
          <div>
            <button onClick={() => setClosePresets(prev => !prev)}>
              <i className="fal fa-sliders-v"></i>
              { closePresets ? "Show Presets" : "Hide Presets" }
            </button>
          </div>
        </div>
        <div className={styles.previewContainer} style={imageFilters}>
          <Image 
            src={image.length ? image : filterImg}
            className="main-img"
            width={700}
            height={500}
            alt="main-img"
            title="Long click to see original version"
            onMouseDown={() => console.log('show original')}
            onMouseUp={() => console.log('revert to filtered image')}
          />
        </div>
        <div className={styles.previewFooter}>
          <button className="shadow-hover" onClick={() => downloadFilteredImg()}>
            <i className="fal fa-download"></i>
            Download Image
          </button>
        </div>
      </div>
    </div>
  )
}
