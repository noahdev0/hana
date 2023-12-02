let array = ["java<scri<pt < hello<", "ph<p", "ja<va", "c++", "c<#<<"];

const div = document.createElement("div");
document.body.appendChild(div);
const ul = document.createElement("ul");
div.appendChild(ul);

let a = array.map((item, index) => {
  return item.replace(/</g, "3");
});
function changeBackgroundColor(elementId, color) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.backgroundColor = color;
  }
}

changeBackgroundColor("ar", "red");
changeBackgroundColor("dz", "yellow");
changeBackgroundColor("der", "blue");

const func = (a) => {
  console.log(a);
};
console.log(a);
