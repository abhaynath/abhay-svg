class Data {
  static #images = [
    {
      title: "Ganesh 1",
      group: "god",
      path: "god/ganesh1.svg"
    },
    {
      title: "Dragon",
      group: "animals",
      path: "animals/dragon1.svg",
      edit:"dragon1/dragon1.html"
    },
    {
      title: "Revolver 1",
      group: "weapons",
      path: "weapons/revolver1.svg",
    },
    {
      title: "Revolver 2",
      group: "weapons",
      path: "weapons/revolver2.svg",
    },
    {
      title: "Spartan",
      group: "Logo",
      path: "logos/spartan1.svg",
      edit:"spartan1/spartan1-edit.html"
    }
  ];
  constructor() {}
  static getImages(searchText = "") {
    let txt = searchText.trim();
    if (txt == "") {
      // return this.#images;
    }
    txt = txt.toUpperCase();

    const res = [];
    const map = {};
    let i, j, curr;
    let arr = Data.#images;
    for (i = 0, j = arr.length; i < j; i++) {
      curr = arr[i];
    
      if (!(curr.group in map)) {
        map[curr.group] = { group: curr.group, images: [] };
        res.push(map[curr.group]);
      }
      map[curr.group].images.push(curr);
    }
   
    return map;
  }
}

export { Data };
