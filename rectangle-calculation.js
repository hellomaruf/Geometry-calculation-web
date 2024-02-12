document.getElementById("rectangle-btn").addEventListener("click", function () {
  // Play with width
  let inputWidth = document.getElementById("input-width");
  let inputWidthValue = inputWidth.value;
  let width = parseFloat(inputWidthValue);
  // Play with length
  let inputLength = document.getElementById("input-length");
  let inputValue = inputLength.value;
  let length = parseFloat(inputValue);
  // Area calculation
  let area = width * length;
  let rectangleSpan = document.getElementById("rectangle-span");
  rectangleSpan.innerText = area;
});
