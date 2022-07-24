let fillColor = document.getElementById("fillColor");
let strokeColor = document.getElementById("strokeColor");
let strokeWidth = document.getElementById("strokeWidth");

let prevSelected = null;
let selectedObj = null;

fillColor.onchange = function () {
  if (selectedObj != null) {
    selectedObj.style.fill = fillColor.value;
    selectedObj.style.opacity = 1;
  }
};
strokeColor.onchange = function () {
  if (selectedObj != null) {
    selectedObj.style.stroke = strokeColor.value;
    selectedObj.style.opacity = 1;
    // selectedObj.style.strokeWidth = 5;
  }
};

strokeWidth.onchange = function () {
  if (selectedObj != null) {
    selectedObj.style.strokeWidth = strokeWidth.value;
    selectedObj.style.stroke = strokeColor.value;
    selectedObj.style.opacity = 1;
  }
};

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
attachEvents(["wingTopRight", "wingTopLeft", "wingPart1", "wingPart2", "head", "flame1", "flame2", "stripes", "tail", "back"]);
