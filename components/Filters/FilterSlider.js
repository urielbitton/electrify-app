import React from 'react'
import styles from '../../pages/photo-filter/PhotoFilter.module.css'

export default function FilterSlider(props) {

  const { title, value=0, setValue, minValue=0, maxValue=100, defaultValue, tail='%' } = props

  return (
    <div className={styles.filterSlider}>
      <div className={styles.header}>
        <h6>{title}</h6>
        <div className={styles.manualValue}>
          <input 
            onChange={(e) => setValue(e.target.value)} 
            value={value + tail} 
            min={minValue} 
            max={maxValue} 
            disabled
          />
        </div>
      </div>
      <input  
        type="range" 
        className="range-slider"
        defaultValue={defaultValue} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        onChange={(e) => setValue(e.target.value)}
        value={value} 
        min={minValue}
        max={maxValue}
      />
    </div>
  )
}
