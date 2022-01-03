import Image from "next/image"
import React, { useEffect, useRef, useState } from 'react'
import FilterPreset from "./FilterPreset"
import styles from '../../pages/photo-filter/PhotoFilter.module.css'
import { localImgUploader } from '../../utils/localImgUploader'
import { resetFilters } from "./resetFilters"
import AppModal from "../UI/AppModal"
import { getUnsplashImages } from "../../services/unsplashServices"
import { imgs } from '../../pages/api/unplashImgs'

export default function FilterWindow(props) {

  const { presets, filterStates, image, setImage } = props
  const [activePreset, setActivePreset] = useState('normal')
  const [closePresets, setClosePresets] = useState(false)
  const [showUrlAdd, setShowUrlAdd] = useState(false)
  const [addedImg, setAddedImg] = useState('')
  const [showUnsplash, setShowUnsplash] = useState(false)
  const {
    contrast, setContrast, brightness, setBrightness, saturate, setSaturate,
    sepia, setSepia, grayscale, setGrayscale, invert, setInvert, hueRotate, 
    setHueRotate, opacity, setOpacity, blur, setBlur
   } = filterStates
  const inputRef = useRef()

  const imageFilters = `
    contrast(${contrast}%)
    brightness(${brightness}%) 
    saturate(${saturate}%) 
    sepia(${sepia}%) 
    grayscale(${grayscale}%)
    invert(${invert}%)
    hue-rotate(${hueRotate}deg)
    opacity(${opacity}%)
    blur(${blur}px)
  `

  const filterPresetsRender = presets?.map((preset, i) => {
    return <FilterPreset 
      preset={preset} 
      onClick={() => applyPresetFilters(preset)}
      activePreset={activePreset}
      setActivePreset={setActivePreset}
      image={image}
      imageFilters={imageFilters}
      key={i}
    />
  })

  const unsplashImgsRender = imgs?.map((img, i) => {
    return <Image 
      src={img} 
      alt={'unplash-img-'+i} 
      width={100}
      height={100}
      key={i}
      className={`${styles.unsplashImg}`}
      onClick={() => setUnsplashImg(img)}
    />
  })

  const downloadFilteredImg = () => {
    
  }

  const setAddedImage = () => {
    setShowUrlAdd(false)
    setImage(addedImg)
  }

  const setUnsplashImg = (img) => {
    setImage(img)
    setShowUnsplash(false)
  }

  const applyPresetFilters = (preset) => {
    setContrast(preset.contrast)
    setBrightness(preset.brightness)
    setSaturate(preset.saturate)
    setSepia(preset.sepia)
    setGrayscale(preset.grayscale)
    setInvert(preset.invert)
    setHueRotate(preset.hueRotate)
    setOpacity(preset.opacity)
    setBlur(preset.blur)
  }

  useEffect(() => {
    // getUnsplashImages('mountain')
    // .then((res) => setUnsplash(res.data.results[0].urls.regular))
    // .catch((err) => console.log(err))
  },[]) 

  return (
    <div className={styles.filterWindow}>
      <div className={`${styles.presetsContainer} ${closePresets ? styles.closed : ""}`}>
        {filterPresetsRender}
      </div>
      <div className={styles.filterPreview}>
        <div className={styles.previewTools}>
          <div>
            <button onClick={() => setShowUnsplash(true)}>
              <i className="fab fa-unsplash"></i>
              Select From Unsplash
            </button>
            <label onChange={() => localImgUploader(inputRef, setImage)}>
              <input type="file" style={{display:'none'}} ref={inputRef} />
              <i className="fal fa-image"></i>
              Upload Image
            </label>
            <button onClick={() => setShowUrlAdd(true)}>
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
        <div className={styles.previewContainer} style={{filter: imageFilters}}>
          <Image 
            src={image}
            className="main-img"
            width={700}
            height={500}
            alt="main-img"
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
      <AppModal
        title="Upload from Unsplash"
        actions={<button onClick={() => setShowUnsplash(false)}>Done</button>}
        showModal={showUnsplash}
        setShowModal={setShowUnsplash}
      >
        <div className={styles.unsplashGrid}>
          {unsplashImgsRender}
        </div>
      </AppModal>
    </div>
  )
}
