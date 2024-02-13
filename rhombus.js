document.getElementById("rhombus-btn").addEventListener("click", function () {
  let perimeter = getPerimeterDiagonalValue("input-perimeter");
  let diagonal = getPerimeterDiagonalValue("input-Diagonal");
  let area = 0.5 * perimeter * diagonal
  setSpanInnerText('rhombus-span', area)
});

// get perimeter input value and Diagonal input value
function getPerimeterDiagonalValue(inputId) {
  let inputField = document.getElementById(inputId);
  let inputValue = inputField.value;
  let value = parseFloat(inputValue);
  return value;
}

function setSpanInnerText(spanId, rhombusArea) {
    let getSpanId = document.getElementById(spanId)
    getSpanId.innerText = rhombusArea
}