import { Data } from "./Data.js";

class UI {
  #searchBox = null;
  #gallery = null;
  constructor() {
    this.#gallery = document.getElementById("gallery");
    this.#searchBox = document.getElementById("searchbox");
    this.#searchBox.addEventListener("input", () => {
      this.updateSearch();
    });
  }
  updateSearch() {
    const img = Data.getImages(this.#searchBox.value);

    let str = ``;
    for (let prop in img) {
      str += `<div><div class="group-title">${prop}</div><div  class="roll">`;
      const images = img[prop].images;
      images.forEach((d) => {
        const path = "svgs/" + d.path;
        let edithPath = "";
        let editButton = "";
        if (d.edit != undefined && d.edit != null && d.edit.trim() != "") {
          edithPath = "edit/" + d.edit;
          editButton = ` <a target="_blank" href="${edithPath}"> <i class="fa fa-edit"></i></a>`;
        }
        str += ` <div class="card">
            <div class="svg-container">
                <object data="${path}"></object>
            </div>
            <div class="svg-info"><a target="_blank" href="${path}">${d.title}</a>
              ${editButton}
            </div>
        </div>`;
      });
      str += `</div>`;

      str += `</div>`;
    }

    this.#gallery.innerHTML = str;
  }
}
export { UI };
