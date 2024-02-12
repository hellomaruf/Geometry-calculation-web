function calculationTriangleArea() {
  let inputBase = document.getElementById("input-base");
  let inputBaseValue = inputBase.value;
  let base = parseFloat(inputBaseValue);
  let inputHeight = document.getElementById("input-height");
  let inputHeightValue = inputHeight.value;
  let height = parseFloat(inputHeightValue);
  let triangleCalculation = 0.5 * base * height;
  let triangleSpan = document.getElementById("triangle-span");
  triangleSpan.innerText = triangleCalculation;
}
