class StyleEditor {
  #controls = [
    {
      type: "color",
      id: "fillColor",
      label: "Fill Color",
    },
    {
      type: "range",
      id: "fillOpacity",
      label: "Fill Opacity",
    },
    {
      type: "color",
      id: "strokeColor",
      label: "Stroke Color",
    },
    {
      type: "range",
      id: "strokeOpacity",
      label: "Stroke Opacity",
    },
    {
      type: "range",
      id: "strokeWidth",
      label: "Stroke Width",
    },
  ];
  constructor(containerId, idList) {
    this.#createUI(containerId);
  }
  #createUI(containerId) {
    const str = `<table>
    <tr><td><label for="fillColor"> Fill Color</td><td><input id="fillColor" type="color" /></td><td id="txtFillColor"></td></tr>
    <tr><td><label for="fillOpacity"> Fill Opacity</td><td><input id="fillOpacity" type="range" min="0" max="10" value="10" /></td><td id="txtFillOpacity"></td></tr>
    <tr><td><label for="strokeColor"> Stroke Color</label></td><td><input id="strokeColor" type="color" /></td><td id="txtStrokeColor"></td></tr>
    <tr><td><label for="strokeOpacity"> Stroke Opacity</label></td><td><input id="strokeOpacity" type="range" min="0" max="10" value="10" /></td><td id="txtStrokeOpacity"></td></tr>
    <tr><td><label for="strokeWidth">Stroke Width</label></td><td><input id="strokeWidth" type="range" min="0" max="10" value="1" /></td><td id="txtStrokeWidth"></td></tr>
  </table>`;
    let str2 = `<table>`;
    this.#controls.forEach((d) => {
      str2 += this.#getControlUI(d);
    });
    str2 += `</table>`;
    let container = document.getElementById(containerId);
    if (container != null) {
      container.innerHTML = str2;
      this.#attachEvents();
    }
  }
  #getControlUI(obj) {
    let str = `<tr>`;
    const min = 0;
    const max = 10;
    const value = 10;

    str += `<td><label for="${obj.id}">${obj.label}</td>`;
    if (obj.type == "color") {
      str += `<td><input id="${obj.id}" type="${obj.type}" /></td>`;
    }
    if (obj.type == "range") {
      str += `<td><input id="${obj.id}" type="${obj.type}" min="${min}" max="${max}" value="${value}" /></td>`;
    }
    const txtId = "txt" + obj.id;
    str += `<td id="${txtId}"></td>`;

    str += `</tr>`;
    return str;
  }
  #attachEvents() {
    console.log("--attach events-");
    this.#controls.forEach((d) => {
      const id = d.id;
      const control = document.getElementById(id);
      console.log(control);
      control.oninput = ()=>{
        this.#handleChange(d);
      }
    });
  }
  #handleChange(d){
    console.log("--handle change");
    console.log(d);
  }
}
export { StyleEditor };
