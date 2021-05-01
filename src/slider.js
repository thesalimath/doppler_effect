sliderToText = val => {
  return (Math.pow(10, Number(val) / 100) - 101).toFixed(2);
};
sliderChange = val => {
  dopplerText.value = sliderToText(val);
  starBlend(sliderToText(val));
};
