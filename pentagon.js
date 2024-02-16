let titleNum = 1;
document.getElementById("pentagon-btn").addEventListener("click", function () {
  // Get perimeter value****
  // Bangla Way***********
  //   let perimeter = document.getElementById("perimeter").value;
  //   let perimeterValueInt = parseFloat(perimeter);
  // Functional Way***********
  let perimeterValue = getValueElementById("perimeter");

  // Get base value********
  // Bangla way********
  //   let base = document.getElementById("base").value;
  //   let baseValueInt = parseFloat(base);
  // Functional Way*******
  let baseValue = getValueElementById("base");

  // Calculation area*******
  let area = 0.5 * perimeterValue * baseValue;

  // result show in span********
  document.getElementById("pentagon-span").innerText = area;

  // show final result in geometry calculation area**********
  let result = document.getElementById("result");
  let p1 = document.createElement("p");
  p1.innerText = area + " cm";

  // show card name************
  let name = document.getElementById("name");
  let cardDiv = document.getElementById("card-div");
  let cardTitle = cardDiv.childNodes[1].innerText;
  let p2 = document.createElement("p");
  p2.innerText = titleNum + ". " + cardTitle;
  titleNum++;
  result.appendChild(p1);
  name.appendChild(p2);
});
// Function for get element value by id********
function getValueElementById(elementId) {
  let element = document.getElementById(elementId).value;
  let elementInt = parseFloat(element);
  return elementInt;
}
