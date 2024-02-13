document
  .getElementById("parallelogram-calculation-btn")
  .addEventListener("click", function () {
    let base = getParallelogramBaseHeight("parallelogram-input-base");
    let height = getParallelogramBaseHeight("parallelogram-input-height");
    let area = base * height;
    setSpanInnerText("parallelogram-span", area);
  });

// Get parallelogram Base and height input value
// function getParallelogramBase() {
//   let parallelogramInputBase = document.getElementById(
//     "parallelogram-input-base"
//   );
//     let parallelogramInputBaseValue = parallelogramInputBase.value
//     let parallelogramBase = parseFloat(parallelogramInputBaseValue);
//     return parallelogramBase
// }

function getParallelogramBaseHeight(inputId) {
  let inputField = document.getElementById(inputId);
  let inputValueText = inputField.value;
  let inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setSpanInnerText(spanId, totalAreaValue) {
  let spanID = document.getElementById(spanId);
  spanID.innerText = totalAreaValue;
}
