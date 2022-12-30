const apartmentHunting = require("./solution.js").apartmentHunting;
let blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];
let reqs = ["gym", "school", "store"];
let answer = apartmentHunting(blocks,reqs);
console.log(answer);
