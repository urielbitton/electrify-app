export const resetFilters = (filterStates) => {
  const { setContrast, setBrightness, setSaturate, setSepia, setGrayscale,
    setInvert, setHueRotate, setOpacity, setBlur } = filterStates
  setContrast(100)
  setBrightness(100)
  setSaturate(100)
  setSepia(0)
  setGrayscale(0)
  setInvert(0)
  setHueRotate(0)
  setOpacity(100)
  setBlur(0)
}