import { StyleEditor } from "../../js/modules/StyleEditor.js";

const styleEditor = new StyleEditor("styleeditor", [
  "wingTopRight",
  "wingTopLeft",
  "wingPart1",
  "wingPart2",
  "head",
  "flame1",
  "flame2",
  "stripes",
  "tail",
  "back",
]);
let fillColor = document.getElementById("fillColor");
let strokeColor = document.getElementById("strokeColor");
let strokeWidth = document.getElementById("strokeWidth");
let fillOpacity = document.getElementById("fillOpacity");
let strokeOpacity = document.getElementById("strokeOpacity");

let txtFillColor = document.getElementById("txtFillColor");
let txtFillOpacity = document.getElementById("txtFillOpacity");
let txtStrokeColor = document.getElementById("txtStrokeColor");
let txtStrokeOpacity = document.getElementById("txtStrokeOpacity");
let txtStrokeWidth = document.getElementById("txtStrokeWidth");

let prevSelected = null;
let selectedObj = null;

fillColor.oninput = function () {
  updateValues();
  if (selectedObj != null) {
    selectedObj.style.fill = fillColor.value;
    //selectedObj.style.opacity = 1;
  }
};
fillOpacity.oninput = function () {
  updateValues();
  if (selectedObj != null) {
    const opacity = parseInt(fillOpacity.value) / 10;
    selectedObj.style.fillOpacity = opacity;
  }
};
strokeOpacity.oninput = function () {
  updateValues();
  if (selectedObj != null) {
    const opacity = parseInt(strokeOpacity.value) / 10;
    selectedObj.style.strokeOpacity = opacity;
  }
};
strokeColor.oninput = function () {
  updateValues();
  if (selectedObj != null) {
    selectedObj.style.stroke = strokeColor.value;
    selectedObj.style.opacity = 1;
    // selectedObj.style.strokeWidth = 5;
  }
};

strokeWidth.oninput = function () {
  updateValues();
  if (selectedObj != null) {
    selectedObj.style.strokeWidth = strokeWidth.value;
    selectedObj.style.stroke = strokeColor.value;
    selectedObj.style.opacity = 1;
  }
};
function updateValues() {
  /* txtFillColor.innerHTML = fillColor.value;
  txtFillOpacity.innerHTML = fillOpacity.value / 10;
  txtStrokeColor.innerHTML = strokeColor.value;
  txtStrokeOpacity.innerHTML = strokeOpacity.value / 10;
  txtStrokeWidth.innerHTML = strokeWidth.value;*/
} 
function attachEvents(arr) {
  //let items = [];
  for (let count = 0; count < arr.length; count++) {
    let item = document.getElementById(arr[count]);
    if (item != null) {
      //
      item.onclick = function () {
        if (selectedObj == item) {
          selectedObj = null;
          //item.style.opacity = 1;
          item.classList.remove("sel");
          return;
        }
        prevSelected = selectedObj;
        selectedObj = item;
        // selectedObj.style.opacity = 0.1;
        selectedObj.classList.add("sel");
        if (prevSelected != null) {
          prevSelected.classList.remove("sel");
          // prevSelected.style.opacity = 1;
        }
        //item.style.fill = fillColor.value;
      };
    }
  }
}
// document.getElementById("container").onclick = function () {
//   if (selectedObj != null) {
//     selectedObj.style.opacity = 1;
//     selectedObj = null;
//   }
// };
//attachEvents(["wingTopRight", "wingTopLeft", "wingPart1", "wingPart2", "head", "flame1", "flame2", "stripes", "tail", "back"]);
//updateValues();
