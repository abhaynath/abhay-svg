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
   
    let str=``;
    for(let prop in img){
        str+=`<div><div class="group-title">${prop}</div><div  class="roll">`;
        const images = img[prop].images;
        images.forEach((d)=>{
            const path = "svgs/"+d.path;
            str+=` <div class="card">
            <div class="svg-container">
                <object data="${path}"></object>
            </div>
            <div class="svg-info"><a target="_blank" href="${path}">${d.title}</a>
                <a target="_blank" href="edit/dragon1.html"> <i class="fa fa-edit"></i></a>
            </div>
        </div>`;
        });
        str+=`</div>`;

        str+=`</div>`;
    }
  
    this.#gallery.innerHTML = str;

   
  }
 
}
export { UI };
