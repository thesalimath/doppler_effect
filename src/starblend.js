starBlend = val => {
  inputVal = Number(val);
  let newImageDimension = 420 + 2 * inputVal;
  let filterDimension = 210 + inputVal;
  rgbVal = inputVal > 0 ? "rgb(255,0,0)" : "rgb(0,0,255)";
  star.style.backgroundColor = rgbVal;
  star.style.height = filterDimension + "px";
  star.style.width = filterDimension + "px";
  star.style.filter = "blur(" + Math.floor(50 + inputVal / 4) + "px)";
  star.style.opacity = Math.abs(inputVal / 125);
  starImg.height = newImageDimension;
  starImg.width = newImageDimension;
  starImg.style.marginTop = -inputVal;
  starImg.style.marginBottom = -inputVal;
};
