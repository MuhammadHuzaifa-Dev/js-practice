const real_heros = ["Prophet Muhammad PBUH","Salahudin Ayyubi", "Nelson Mandela"];
const real_villains = ["Netenyahu", "Trump", "Jeffrey Epstein"];

// real_heros.push(real_villains);

// console.log(real_heros);
// console.log(`The worst person in the history is ${real_heros[3][0]}`);

const villainsNheros = real_heros.concat(real_villains)
// console.log(villainsNheros);

const villainsANDheros = [...real_heros, ...real_villains];
// console.log(villainsANDheros);

const arr = [1,2,3,[1,2],4,5,[1,2,3,4,[1,2,3]]];
const newArr = arr.flat(Infinity);
// console.log(newArr);

// console.log(Array.isArray("Huzaifa"));
// console.log(Array.from("Huzaifa"));
// console.log(Array.from({name:"Huzaifa"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3));
