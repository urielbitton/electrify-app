export const localImgUploader = (inputRef, setImage) => {
  let file = inputRef.current.files[0]
  let reader = new FileReader()
  reader.onloadend = function(){
    setImage(reader.result)
  } 
  if(file) {
    reader.readAsDataURL(file)
  } 
} 