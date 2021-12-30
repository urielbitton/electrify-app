import Image from "next/image"
import React, { useState } from 'react'
import FilterPreset from "./FilterPreset"
import styles from './PhotoFilter.module.css'
import filterImg from '../../assets/imgs/filter-img.jpg'

export default function FilterWindow({presets}) {

  const [activePreset, setActivePreset] = useState('normal')
  const [closePresets, setClosePresets] = useState(false)
  const [mainImg, setMainImg] = useState('')

  const filterPresetsRender = presets?.map((preset, i) => {
    return <FilterPreset 
      preset={preset} 
      activePreset={activePreset}
      setActivePreset={setActivePreset}
      key={i} 
    />
  })

  return (
    <div className={styles.filterWindow}>
      <div className={`${styles.presetsContainer} ${closePresets ? styles.closed : ""}`}>
        {filterPresetsRender}
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
        <div className={styles.previewContainer}>
          <Image 
            src={mainImg.length ? mainImg : filterImg}
            width={700}
            height={500}
            alt=""
          />
        </div>
        <div className={styles.previewFooter}>
          <p>Created & Designed by Uriel Bitton.</p>
        </div>
      </div>
    </div>
  )
}
