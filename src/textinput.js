validateTextInput = val => {
  return isNaN(val) ? "err" : val <= -100 || val >= 100 ? "err" : val;
};
textToslider = inputVal => {
  return (Math.log(inputVal + 101) * 100) / Math.log(10);
};
function textChange(val) {
  let textValue = !textSet ? 0 : val;
  textSet = true;

  if (validateTextInput(textValue) === "err") {
    errorMsg.innerHTML = "Only Numbers between -100 to 100 accepted!";
    textChange(0);
    dopplerText.value = 0;
  } else {
    dopplerSlider.value = textToslider(Number(textValue));
    starBlend(textValue);
  }
}
