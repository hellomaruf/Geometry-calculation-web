// get name throw funciton
function getName(elementId) {
    let element = document.getElementById(elementId);
    let elementName = element.childNodes[1].innerText;
    return elementName;
  }