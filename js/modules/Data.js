class Data {
  static #images = [
    {
      title: "Ganesh 1",
      group: "god",
      path: "god/ganesh1.svg",
    },
    {
      title: "Ganesh 2",
      group: "god",
      path: "god/ganesh2.svg",
    },
    {
      title: "Ganesh 3",
      group: "god",
      path: "god/ganesh3.svg",
    },
    {
      title: "Shivaji Maharaj",
      group: "shivaji",
      path: "god/shivray.svg",
    },
    {
      title: "Shivaji Maharaj 2",
      group: "shivaji",
      path: "god/shivray2.svg",
    },
    {
      title: "Shivaji Maharaj 3",
      group: "shivaji",
      path: "god/shivray3.svg",
    },
    {
      title: "Shivaji Maharaj 4",
      group: "shivaji",
      path: "god/shivray4.svg",
    },
    {
      title: "Shivaji Maharaj 5",
      group: "shivaji",
      path: "god/shivray5.svg",
    },
    {
      title: "Shivaji Maharaj 6",
      group: "shivaji",
      path: "god/shivray6.svg",
    },
    {
      title: "Shivaji Maharaj 7",
      group: "shivaji",
      path: "god/shivray7.svg",
    },
    {
      title: "Shivaji Maharaj 8",
      group: "shivaji",
      path: "god/shivray8.svg",
    },
    {
      title: "Shivaji Maharaj 9",
      group: "shivaji",
      path: "god/shivray9.svg",
    },
    {
      title: "Shivaji Maharaj 11",
      group: "shivaji",
      path: "god/shivray11.svg",
    },
    {
      title: "Shiva",
      group: "god",
      path: "god/shiva1.svg",
    },
    {
      title: "Shiva",
      group: "god",
      path: "god/shiva3.svg",
    },
    {
      title: "Shiva",
      group: "god",
      path: "god/shiva4.svg",
    },
    {
      title: "Krishna",
      group: "god",
      path: "god/krishna1.svg",
    },
    {
      title: "Krishna",
      group: "god",
      path: "god/krishna2.svg",
    },
    {
      title: "Dragon",
      group: "animals",
      path: "animals/dragon1.svg",
      edit: "dragon1/dragon1.html",
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
      edit: "spartan1/spartan1-edit.html",
    },
    {
      title: "Spartan",
      group: "Logo",
      path: "logos/spartan2.svg",
    },
    {
      title: "Netaji",
      group: "Heros",
      path: "heros/netaji1.svg",
    },
    {
      title: "Netaji",
      group: "Heros",
      path: "heros/netaji2.svg",
    },
    {
      title: "Netaji",
      group: "Heros",
      path: "heros/netaji3.svg",
    },
    {
      title: "Bricks 1",
      group: "Mario",
      path: "mario/bricks1.svg",
    },
    {
      title: "Bricks 2",
      group: "Mario",
      path: "mario/bricks2.svg",
    },
    {
      title: "Bricks 3",
      group: "Mario",
      path: "mario/bricks3.svg",
    },
    {
      title: "Bricks 4",
      group: "Mario",
      path: "mario/bricks4.svg",
    },
    {
      title: "Pipe 1",
      group: "Mario",
      path: "mario/pipe1.svg",
    },
    {
      title: "Pipe 2",
      group: "Mario",
      path: "mario/pipe2.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo1.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo2.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo3.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo4.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo5.svg",
    },
    {
      title: "Batman",
      group: "Batman",
      path: "batman/logo6.svg",
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
