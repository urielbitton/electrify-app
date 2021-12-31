import React, { useState } from 'react'
import FilterSlider from "./FilterSlider"
import styles from './PhotoFilter.module.css'

export default function FilterSidebar(props) {

  const { filterStates } = props
  const [tab, setTab] = useState('generator')
  const {
    contrast, setContrast, brightness, setBrightness, saturate, setSaturate,
    sepia, setSepia, grayscale, setGrayscale, invert, setInvert, hueRotate, 
    setHueRotate, opacity, setOpacity, blur, setBlur
  } = filterStates

  return (
    <div className={styles.filterSidebar}>
      <div className={styles.sidebarHead}>
        <div 
          className={tab === 'generator' ? styles.activeTab : ""}
          onClick={() => setTab('generator')}
        >
          <h3>Generator</h3>
        </div>
        <div 
          className={tab === 'code' ? styles.activeTab : ""}
          onClick={() => setTab('code')}
        >
          <h3>CSS Code</h3>
        </div>
      </div>
      <div className={styles.sidebarScrollable}>
        <div className={`${styles.generator} ${styles.tabContent} ${tab === 'generator' ? styles.show : ""}`}>
          <div className={styles.filtersSection}>
            <div className={styles.sectionHead}>
              <h5>Filters</h5>
              <span>Clear All</span>
            </div>
            <FilterSlider 
              title="Contrast"
              value={contrast}
              setValue={(val) => setContrast(val)}
              defaultValue={100}
              minValue={0}
              maxValue={200}
            />
            <FilterSlider 
              title="Brightness"
              value={brightness}
              setValue={(val) => setBrightness(val)}
              defaultValue={100}
              minValue={0}
              maxValue={200}
            />
            <FilterSlider 
              title="Saturate"
              value={saturate}
              setValue={(val) => setSaturate(val)}
              defaultValue={100}
              minValue={0}
              maxValue={1000}
            />
            <FilterSlider 
              title="Sepia"
              value={sepia}
              setValue={(val) => setSepia(val)}
              defaultValue={0}
              minValue={0}
              maxValue={100}
            />
            <FilterSlider 
              title="Grayscale"
              value={grayscale}
              setValue={(val) => setGrayscale(val)}
              defaultValue={0}
              minValue={0}
              maxValue={100}
            />
            <FilterSlider 
              title="Invert"
              value={invert}
              setValue={(val) => setInvert(val)}
              defaultValue={0}
              minValue={0}
              maxValue={100}
            />
            <FilterSlider 
              title="Hue Rotate"
              value={hueRotate}
              setValue={(val) => setHueRotate(val)}
              defaultValue={0}
              minValue={0}
              maxValue={360}
              tail="deg"
            />
            <FilterSlider 
              title="Opacity"
              value={opacity}
              setValue={(val) => setOpacity(val)}
              defaultValue={100}
              minValue={0}
              maxValue={100}
              tail="px"
            />
            <FilterSlider 
              title="Blur"
              value={blur}
              setValue={(val) => setBlur(val)}
              defaultValue={0}
              minValue={0}
              maxValue={20}
              tail="px"
            />
            <div className={styles.sectionHead}>
              <h5>Overlay</h5>
            </div>
          </div>
        </div>
        <div className={`${styles.cssCode} ${styles.tabContent} ${tab === 'code' ? styles.show : ""}`}>
          CSS Code
        </div>
      </div>
    </div>
  )
}
