import Image from "next/image"
import React, { useEffect, useRef, useState } from 'react'
import FilterPreset from "./FilterPreset"
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import { localImgUploader } from '../../utils/localImgUploader'
import { resetFilters } from "./resetFilters"
import AppModal from "../UI/AppModal"

export default function FilterWindow(props) {

  const { presets, filterStates, image, setImage } = props
  const [activePreset, setActivePreset] = useState('normal')
  const [closePresets, setClosePresets] = useState(false)
  const [showUrlAdd, setShowUrlAdd] = useState(false)
  const [addedImg, setAddedImg] = useState('')
  const {
    contrast, setContrast, brightness, setBrightness, saturate, setSaturate,
    sepia, setSepia, grayscale, setGrayscale, invert, setInvert, hueRotate, 
    setHueRotate, opacity, setOpacity, blur, setBlur
   } = filterStates
  const inputRef = useRef()

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

  const openImageAdder = (e) => {
    e.stopPropagation()
    setShowUrlAdd(true)
  }
  const setAddedImage = () => {
    setShowUrlAdd(false)
    setImage(addedImg)
  }

  useEffect(() => {
    resetFilters(filterStates)
  },[image])

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
            <label onChange={() => localImgUploader(inputRef, setImage)}>
              <input type="file" style={{display:'none'}} ref={inputRef} />
              <i className="fal fa-image"></i>
              Upload Image
            </label>
            <button onClick={(e) => openImageAdder(e)}>
              <i className="fal fa-link"></i>
              Image from URL
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
            src={image}
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
      <AppModal
        title="Add Image from URL"
        actions={<button onClick={() => setAddedImage()}>Add</button>}
        showModal={showUrlAdd}
        setShowModal={setShowUrlAdd}
      >
        <input 
          placeholder="https://unsplash.com/photos/h3u5bfv5cn"
          onChange={(e) => setAddedImg(e.target.value)}
        />
      </AppModal>
    </div>
  )
}
