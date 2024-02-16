function calculationTriangleArea() {
  let inputBase = document.getElementById("input-base");
  let inputBaseValue = inputBase.value;
  let base = parseFloat(inputBaseValue);
  let inputHeight = document.getElementById("input-height");
  let inputHeightValue = inputHeight.value;
  let height = parseFloat(inputHeightValue);

  // triangle calculation
  let triangleCalculation = 0.5 * base * height;
  console.log(triangleCalculation);
  let triangleSpan = document.getElementById("triangle-span");
  triangleSpan.innerText = triangleCalculation;

  // get name by function
  let cardName = getName("card-triangle");
  let name = document.getElementById("name");
  let result = document.getElementById("result");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p2.innerText = triangleCalculation + " cm";
  p1.innerText = name.childElementCount + 1 + ". " + cardName;
  console.log(name);
  console.log(p1);
  name.appendChild(p1);
  result.appendChild(p2);
}
