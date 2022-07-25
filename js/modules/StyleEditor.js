class StyleEditor {
  #prevSelected = null;
  #selectedObj = null;
  #svgIds = [];
  #controls = [
    {
      type: "color",
      id: "fillColor",
      label: "Fill Color",
      property: "fill",
    },
    {
      type: "range",
      id: "fillOpacity",
      label: "Fill Opacity",
      property: "fillOpacity",
      compute: (d) => d / 10,
    },
    {
      type: "color",
      id: "strokeColor",
      label: "Stroke Color",
      property: "stroke",
    },
    {
      type: "range",
      id: "strokeOpacity",
      label: "Stroke Opacity",
      property: "strokeOpacity",
      compute: (d) => d / 10,
    },
    {
      type: "range",
      id: "strokeWidth",
      label: "Stroke Width",
      property: "strokeWidth",
    },
  ];
  constructor(containerId, idList) {
    this.#svgIds = idList;
    this.#createUI(containerId);
  }
  #createUI(containerId) {
    let str2 = `<table class="tblProperty">`;
    this.#controls.forEach((d) => {
      str2 += this.#getControlUI(d);
    });
    str2 += `</table>`;
    let container = document.getElementById(containerId);
    if (container != null) {
      container.innerHTML = str2;
      this.#attachEvents();
      this.#updateValues();
    }
  }
  #getLabelId(id) {
    return "txt" + id;
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
    const txtId = this.#getLabelId(obj.id);
    str += `<td id="${txtId}"></td>`;

    str += `</tr>`;
    return str;
  }
  #attachEvents() {
    this.#controls.forEach((d) => {
      const control = document.getElementById(d.id);
      control.addEventListener("input", () => {
        this.#inputChangeHandler(d);
      });
    });
    this.#svgIds.forEach((d) => {
      const item = document.getElementById(d);
      item.addEventListener("click", () => {
        this.#clickHandler(item);
      });
    });
  }
  #clickHandler(item) {
    if (this.#selectedObj == item) {
      this.#selectedObj = null;
      item.classList.remove("sel");
      return;
    }
    this.#prevSelected = this.#selectedObj;
    this.#selectedObj = item;

    this.#selectedObj.classList.add("sel");
    this.#updatePanel();
    this.#updateValues();
    if (this.#prevSelected != null) {
      this.#prevSelected.classList.remove("sel");
    }
  }
  #inputChangeHandler(d) {
    this.#updateValues();
    if (this.#selectedObj != null) {
      let val = this.#getValue(d);
      this.#selectedObj.style[d.property] = val;
    }
  }
  #updateValues() {
    this.#controls.forEach((d) => {
      let val = this.#getValue(d);
      const txtId = this.#getLabelId(d.id);
      document.getElementById(txtId).innerHTML = val;
    });
  }
  #rgbArrayToHex(rgb) {
    return `#${rgb.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  }
  #rgbStringToArray(rgb) {
    return rgb
      .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      .splice(1, 3)
      .map((v) => Number(v));
  }
  #rgbStringToHex(rgb) {
    return this.#rgbArrayToHex(this.#rgbStringToArray(rgb));
  }
  #updatePanel() {
    this.#controls.forEach((d) => {
      let propValue = this.#selectedObj.style[d.property];
      if (propValue != null && propValue.trim() != "") {
        if (d.type == "color") {
          propValue = this.#rgbStringToHex(propValue);
        }
        document.getElementById(d.id).value = propValue;
      }
    });
  }
  #getValue(d) {
    let val = document.getElementById(d.id).value;
    if (d.compute != undefined && d.compute != null) {
      val = d.compute(val);
    }
    return val;
  }
}
export { StyleEditor };
